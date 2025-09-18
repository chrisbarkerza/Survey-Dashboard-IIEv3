import csv
import json
import math
from collections import Counter, defaultdict
from pathlib import Path

DATA_FILE = Path(__file__).resolve().parent / 'IIE.csv'
OUTPUT_FILE = Path(__file__).resolve().parent / 'dashboard_data.json'

ROLE_COL = '1.10) Which of the following best describes your role at the institution? '
BRAND_COL = '1.9) At which brand/department do you work? '

ACADEMIC_ROLES = {
    'Lecturer, Developer or Supervisor',
    'Academic Management (Dean, Head of Faculty or Head of Programme)'
}
NON_ACADEMIC_ROLES = {
    'General Management',
    'Operations & Support Staff'
}

IT_PROFICIENCY_ORDER = [
    "Low, I don't use computers often.",
    'Moderate, I use a PC for most of my work.',
    'Advanced, I can assist others to solve their problems.',
    'High, I could work in an IT department.'
]

ADOPTION_SCALE = [
    'No & I will never (on principle)',
    'No, not yet',
    'Yes, but no longer',
    'I am thinking about it',
    'Yes, I do'
]

TEACHING_ATTITUDE_SCALE = ['Never', 'No opinion', 'Yes']
LIKERT_TRIAD = ['Disagree', 'Neutral', 'Agree']
META_SCALE = ['No', 'Maybe', 'Yes']
STUDENT_BEHAVIOUR_SCALE = ['No', "I don't know", 'Yes']

CONFIDENCE_SCALE = [
    'Not confident',
    'Somewhat unsure',
    'Neutral',
    'Somewhat confident',
    'Very confident'
]

ASSISTANCE_SPLIT_CHARS = [';', '\n']


def pearson_corr(xs, ys):
    n = len(xs)
    if n == 0 or len(ys) != n:
        return None
    mean_x = sum(xs) / n
    mean_y = sum(ys) / n
    num = sum((x - mean_x) * (y - mean_y) for x, y in zip(xs, ys))
    den_x = math.sqrt(sum((x - mean_x) ** 2 for x in xs))
    den_y = math.sqrt(sum((y - mean_y) ** 2 for y in ys))
    if den_x == 0 or den_y == 0:
        return None
    r = num / (den_x * den_y)
    r = max(min(r, 0.9999), -0.9999)
    if n <= 3:
        ci = (None, None)
    else:
        z = 0.5 * math.log((1 + r) / (1 - r))
        se = 1 / math.sqrt(n - 3)
        lo = z - 1.96 * se
        hi = z + 1.96 * se
        lo_r = (math.exp(2 * lo) - 1) / (math.exp(2 * lo) + 1)
        hi_r = (math.exp(2 * hi) - 1) / (math.exp(2 * hi) + 1)
        ci = (round(lo_r, 3), round(hi_r, 3))
    return {
        'r': round(r, 3),
        'n': n,
        'ci95': ci,
        'significant': ci[0] is not None and ci[1] is not None and ci[0] * ci[1] > 0
    }


def chi_square_test(table):
    rows = len(table)
    cols = len(table[0]) if rows else 0
    row_totals = [sum(row) for row in table]
    col_totals = [sum(table[r][c] for r in range(rows)) for c in range(cols)]
    total = sum(row_totals)
    chi_sq = 0.0
    for r in range(rows):
        for c in range(cols):
            expected = row_totals[r] * col_totals[c] / total if total else 0
            if expected > 0:
                chi_sq += (table[r][c] - expected) ** 2 / expected
    df = (rows - 1) * (cols - 1)
    critical = {
        1: 3.841,
        2: 5.991,
        3: 7.815,
        4: 9.488,
        5: 11.07,
        6: 12.592,
        8: 15.507,
        9: 16.919,
        10: 18.307
    }.get(df)
    significant = critical is not None and chi_sq > critical
    return {
        'chiSquare': round(chi_sq, 3),
        'df': df,
        'critical95': critical,
        'significant': significant
    }


def cramers_v(table):
    rows = len(table)
    cols = len(table[0]) if rows else 0
    if rows == 0 or cols == 0:
        return 0.0
    total = sum(sum(row) for row in table)
    if total == 0:
        return 0.0
    chi = chi_square_test(table)['chiSquare']
    k = min(rows - 1, cols - 1)
    if k <= 0:
        return 0.0
    return round(math.sqrt(chi / (total * k)), 3)


def load_rows():
    with DATA_FILE.open(newline='', encoding='utf-8-sig') as f:
        reader = csv.DictReader(f)
        return list(reader)


def strip_numeric_prefix(value: str) -> str:
    value = value.strip()
    if value and value[0].isdigit():
        parts = value.split('. ', 1)
        if len(parts) == 2:
            return parts[1].strip()
    return value


def normalise_text(value: str) -> str:
    value = value.replace('\u2019', "'").replace('\u2018', "'").replace('\u2013', '-').strip()
    value = value.replace('I am thinking of it', 'I am thinking about it')
    value = value.replace('Yes I do', 'Yes, I do')
    value = value.replace('Yes I do.', 'Yes, I do')
    value = value.replace('Yes, I do.', 'Yes, I do')
    value = value.replace('Yes I pay for a subscription', 'Yes, I pay for a subscription')
    value = value.replace('Yes I pay for subscription', 'Yes, I pay for a subscription')
    value = value.replace('Yes I pay for a subscription.', 'Yes, I pay for a subscription')
    value = value.replace('Yes but free version', 'Yes, but free version')
    value = value.replace('Yes but free', 'Yes, but free version')
    value = value.replace('I don\'t know', "I don't know")
    return value


def canonicalise(value: str, strip_numbers: bool = True) -> str:
    if not value:
        return ''
    value = normalise_text(value)
    if strip_numbers:
        value = strip_numeric_prefix(value)
    return value


def count_by_category(rows, column, *, transform=None, predicate=None):
    counter = Counter()
    total = 0
    for row in rows:
        raw_value = row.get(column, '')
        if predicate and not predicate(row):
            continue
        value = transform(raw_value) if transform else canonicalise(raw_value)
        if value:
            counter[value] += 1
            total += 1
    return counter, total


def split_multi(value: str):
    value = value.strip()
    if not value:
        return []
    items = [value]
    for sep in ASSISTANCE_SPLIT_CHARS:
        fragments = []
        for item in items:
            fragments.extend(item.split(sep))
        items = fragments
    return [canonicalise(item, strip_numbers=False) for item in items if canonicalise(item, strip_numbers=False)]


def get_group(row):
    role = canonicalise(row.get(ROLE_COL, ''), strip_numbers=False)
    if role in ACADEMIC_ROLES:
        return 'Academic'
    if role in NON_ACADEMIC_ROLES:
        return 'Non-academic'
    return 'Unknown'


def to_percentage(count, total):
    return round(count / total * 100, 1) if total else 0.0


def experience_bin(value: float):
    if value is None or value < 0:
        return 'Unknown'
    ranges = [
        (0, 5),
        (6, 10),
        (11, 15),
        (16, 20),
        (21, 25),
        (26, 30),
        (31, 35),
        (36, 40),
        (41, 45)
    ]
    for low, high in ranges:
        if low <= value <= high:
            return f"{low}-{high}"
    return '46+'


def parse_float(value: str):
    value = value.strip()
    if not value:
        return None
    try:
        return float(value)
    except ValueError:
        return None


def build_experience_hist(rows, column):
    bucket = Counter()
    for row in rows:
        val = parse_float(row.get(column, ''))
        if val is None:
            continue
        bucket[experience_bin(val)] += 1
    def sort_key(label):
        if label.endswith('+'):
            return 999
        start = int(label.split('-')[0])
        return start
    return [
        {'bin': label, 'count': bucket[label]}
        for label in sorted(bucket, key=sort_key)
    ]


def combine_usage_counts(counter):
    used = counter.get('Yes, but no longer', 0) + counter.get('Yes, but free version', 0) + counter.get('Yes, I pay for a subscription', 0) + counter.get('Yes, I do', 0)
    current = counter.get('Yes, but free version', 0) + counter.get('Yes, I pay for a subscription', 0) + counter.get('Yes, I do', 0)
    return {
        'used': used,
        'current': current,
        'currentFree': counter.get('Yes, but free version', 0),
        'currentPaid': counter.get('Yes, I pay for a subscription', 0),
        'never': counter.get('No & I will never (on principle)', 0),
        'notYet': counter.get('No, not yet', 0),
        'thinking': counter.get('I am thinking about it', 0)
    }


def likert_summary(rows, columns):
    output = []
    for col in columns:
        counter, total = count_by_category(rows, col, transform=lambda v: canonicalise(v))
        total = sum(counter.values())
        output.append({
            'label': col.split('[')[-1].rstrip(']'),
            'counts': {label: counter.get(label, 0) for label in LIKERT_TRIAD},
            'percentages': {label: to_percentage(counter.get(label, 0), total) for label in LIKERT_TRIAD},
            'total': total
        })
    return output


def allow_summary(rows, columns):
    output = []
    for col in columns:
        counter, total = count_by_category(rows, col, transform=lambda v: canonicalise(v))
        total = sum(counter.values())
        output.append({
            'label': col.split('[')[-1].rstrip(']'),
            'counts': {label: counter.get(label, 0) for label in TEACHING_ATTITUDE_SCALE},
            'percentages': {label: to_percentage(counter.get(label, 0), total) for label in TEACHING_ATTITUDE_SCALE},
            'total': total
        })
    return output


def usage_summary(rows, columns):
    output = []
    for col in columns:
        counter, _ = count_by_category(rows, col, transform=lambda v: canonicalise(v))
        used = counter.get('Yes, I do', 0) + counter.get('Yes, but no longer', 0)
        output.append({
            'label': col.split('[')[-1].rstrip(']'),
            'used': used,
            'never': counter.get('No & I will never (on principle)', 0),
            'thinking': counter.get('I am thinking about it', 0),
            'notYet': counter.get('No, not yet', 0)
        })
    output.sort(key=lambda item: item['used'], reverse=True)
    return output


def academic_tool_usage(rows, columns):
    data = []
    for col in columns:
        counter, _ = count_by_category(rows, col, transform=lambda v: canonicalise(v))
        used = counter.get('Yes, I do', 0) + counter.get('Yes, but no longer', 0)
        used += counter.get('Yes, but free version', 0) + counter.get('Yes, I pay for a subscription', 0)
        data.append({
            'label': col.split('[')[-1].rstrip(']'),
            'used': used,
            'never': counter.get('No & I will never (on principle)', 0)
        })
    data.sort(key=lambda item: item['used'], reverse=True)
    return data


def build_data():
    rows = load_rows()
    total = len(rows)
    academic_rows = [row for row in rows if get_group(row) == 'Academic']
    non_rows = [row for row in rows if get_group(row) == 'Non-academic']

    # Respondent overview
    brand_counts = Counter()
    brand_group_counts = defaultdict(lambda: Counter())
    for row in rows:
        brand = canonicalise(row.get(BRAND_COL, ''), strip_numbers=False) or 'Unspecified'
        group = get_group(row)
        brand_counts[brand] += 1
        brand_group_counts[brand][group] += 1

    brand_table = []
    perc_table = []
    for brand, count in brand_counts.most_common():
        acad = brand_group_counts[brand]['Academic']
        non = brand_group_counts[brand]['Non-academic']
        brand_table.append({'brand': brand, 'Academic': acad, 'Non-academic': non, 'Total': count})
        perc_table.append({'brand': brand,
                           'Academic': to_percentage(acad, count),
                           'Non-academic': to_percentage(non, count)})

    faculty_counts = Counter()
    for row in academic_rows:
        for entry in split_multi(row.get('6.2) In which faculties do you teach (tick all that apply)?', '')):
            faculty_counts[entry] += 1

    experience = {
        'academic': {
            'iie': build_experience_hist(academic_rows, '6.3) How many years of teaching experience do you have at The IIE? '),
            'elsewhere': build_experience_hist(academic_rows, '6.4) How many more years of teaching experience do you have in addition to the above?')
        },
        'nonAcademic': {
            'iie': build_experience_hist(non_rows, '5.2) How many years of work experience do you have - at The IIE? '),
            'elsewhere': build_experience_hist(non_rows, '5.3) How many more years of work experience do you have in addition to the above? ')
        }
    }

    def it_distribution(rows_subset, column):
        counter, total_responses = count_by_category(rows_subset, column, transform=lambda v: canonicalise(v, strip_numbers=False))
        return {
            'counts': {label: counter.get(label, 0) for label in IT_PROFICIENCY_ORDER},
            'percentages': {label: to_percentage(counter.get(label, 0), total_responses) for label in IT_PROFICIENCY_ORDER},
            'total': total_responses
        }

    it_proficiency = {
        'academic': it_distribution(academic_rows, '6.5) What is your general IT proficiency?'),
        'nonAcademic': it_distribution(non_rows, '5.4) What is your general IT proficiency?')
    }

    respondents = {
        'totalRespondents': total,
        'academicCount': len(academic_rows),
        'nonAcademicCount': len(non_rows),
        'brandCounts': [{'label': brand, 'count': count} for brand, count in brand_counts.most_common()],
        'groupCounts': [
            {'label': 'Academic', 'count': len(academic_rows)},
            {'label': 'Non-academic', 'count': len(non_rows)}
        ],
        'brandGroupCounts': brand_table,
        'brandGroupPercentages': perc_table,
        'facultyCounts': [{'label': fac, 'count': amount} for fac, amount in faculty_counts.most_common()],
        'experience': experience,
        'itProficiency': it_proficiency
    }

    # Overall adoption
    tool_columns = [col for col in rows[0].keys() if col.startswith('1.1)')]
    tool_stats = []
    for col in tool_columns:
        counter, _ = count_by_category(rows, col, transform=lambda v: canonicalise(v))
        stats = combine_usage_counts(counter)
        stats['tool'] = col.split('[')[-1].rstrip(']')
        stats['never'] = counter.get('No & I will never (on principle)', 0)
        stats['notYet'] = counter.get('No, not yet', 0)
        stats['thinking'] = counter.get('I am thinking about it', 0)
        stats['total'] = sum(counter.values())
        stats['raw'] = counter
        tool_stats.append(stats)
    tool_stats.sort(key=lambda item: item['used'], reverse=True)

    def adoption_breakdown(column):
        counter, _ = count_by_category(rows, column, transform=lambda v: canonicalise(v))
        total_responses = sum(counter.values())
        return {
            'counts': {label: counter.get(label, 0) for label in ADOPTION_SCALE},
            'percentages': {label: to_percentage(counter.get(label, 0), total_responses) for label in ADOPTION_SCALE},
            'total': total_responses
        }

    adoption_work = adoption_breakdown('1.2) Have you used GenAi tools for work and/or personal use?  [For work]')
    adoption_personal = adoption_breakdown('1.2) Have you used GenAi tools for work and/or personal use?  [For personal use]')

    both_counter = Counter({'Both work & personal': 0, 'Work only': 0, 'Personal only': 0})
    for row in rows:
        work = canonicalise(row.get('1.2) Have you used GenAi tools for work and/or personal use?  [For work]', ''))
        personal = canonicalise(row.get('1.2) Have you used GenAi tools for work and/or personal use?  [For personal use]', ''))
        work_used = work in {'Yes, I do', 'Yes, but no longer'}
        personal_used = personal in {'Yes, I do', 'Yes, but no longer'}
        if work_used and personal_used:
            both_counter['Both work & personal'] += 1
        elif work_used:
            both_counter['Work only'] += 1
        elif personal_used:
            both_counter['Personal only'] += 1
    both_total = sum(both_counter.values())

    activity_columns = [col for col in rows[0].keys() if col.startswith('1.3)')]
    activities = usage_summary(rows, activity_columns)

    concerns_cols = [col for col in rows[0].keys() if col.startswith('1.4)')]
    benefits_cols = [col for col in rows[0].keys() if col.startswith('1.5)')]
    concerns = likert_summary(rows, concerns_cols)
    benefits = likert_summary(rows, benefits_cols)

    meta_cols = [
        '1.6) Do you plan to use Meta AI tools in the near future? Both for work and/or personal use!  [In WhatsApp]',
        '1.6) Do you plan to use Meta AI tools in the near future? Both for work and/or personal use!  [In Facebook]',
        '1.6) Do you plan to use Meta AI tools in the near future? Both for work and/or personal use!  [In Instagram]',
        '1.6) Do you plan to use Meta AI tools in the near future? Both for work and/or personal use!  [On Meta website]'
    ]
    meta_usage = []
    for col in meta_cols:
        counter, _ = count_by_category(rows, col, transform=lambda v: canonicalise(v))
        total_responses = sum(counter.values())
        meta_usage.append({
            'label': col.split('[')[-1].rstrip(']'),
            'counts': {label: counter.get(label, 0) for label in META_SCALE},
            'total': total_responses
        })

    reasoning_counter, _ = count_by_category(rows, '1.7) Have you used AI reasoning models (models that think step-by-step through complex problems)?', transform=lambda v: canonicalise(v))
    agents_counter, _ = count_by_category(rows, '1.8) Have you used AI agents (autonomous AI that can complete multi-step tasks)?', transform=lambda v: canonicalise(v))

    overall_adoption = {
        'toolStats': tool_stats,
        'topTools': tool_stats[:10],
        'topCurrentBreakdown': [
            {
                'tool': item['tool'],
                'currentFree': item['currentFree'],
                'currentPaid': item['currentPaid'],
                'currentTotal': item['current']
            }
            for item in tool_stats[:5]
        ],
        'adoptionWork': adoption_work,
        'adoptionPersonal': adoption_personal,
        'adoptionBoth': {'counts': dict(both_counter), 'total': both_total},
        'activities': activities,
        'concerns': concerns,
        'benefits': benefits,
        'metaUsage': meta_usage,
        'reasoningModels': {
            'counts': dict(reasoning_counter),
            'total': sum(reasoning_counter.values())
        },
        'aiAgents': {
            'counts': dict(agents_counter),
            'total': sum(agents_counter.values())
        }
    }

    acad_attitude_cols = [col for col in rows[0].keys() if col.startswith('2.1)')]
    acad_behaviour_cols = [col for col in rows[0].keys() if col.startswith('2.4)')]
    acad_concern_cols = [col for col in rows[0].keys() if col.startswith('2.2)')]
    acad_benefit_cols = [col for col in rows[0].keys() if col.startswith('2.3)')]
    acad_tool_cols = [col for col in rows[0].keys() if col.startswith('2.5)')]

    # Comparative analytics
    proficiency_map = {label: idx + 1 for idx, label in enumerate(IT_PROFICIENCY_ORDER)}

    def row_it_level(row):
        col = '6.5) What is your general IT proficiency?' if get_group(row) == 'Academic' else '5.4) What is your general IT proficiency?'
        label = canonicalise(row.get(col, ''), strip_numbers=False)
        return proficiency_map.get(label)

    def current_work_use(row):
        answer = canonicalise(row.get('1.2) Have you used GenAi tools for work and/or personal use?  [For work]', ''))
        if not answer or answer not in ADOPTION_SCALE:
            return None
        return 1 if answer == 'Yes, I do' else 0

    prof_pairs_all = []
    prof_pairs_acad = []
    prof_pairs_non = []
    prof_counts = {label: {'adopters': 0, 'total': 0} for label in IT_PROFICIENCY_ORDER}
    for row in rows:
        level = row_it_level(row)
        adoption = current_work_use(row)
        if level is None or adoption is None:
            continue
        prof_pairs_all.append((level, adoption))
        group = get_group(row)
        if group == 'Academic':
            prof_pairs_acad.append((level, adoption))
        elif group == 'Non-academic':
            prof_pairs_non.append((level, adoption))
        label = IT_PROFICIENCY_ORDER[level - 1]
        prof_counts[label]['total'] += 1
        if adoption == 1:
            prof_counts[label]['adopters'] += 1

    prof_summary = [
        {
            'level': label,
            'adoptionRate': to_percentage(stats['adopters'], stats['total']),
            'adopters': stats['adopters'],
            'total': stats['total']
        }
        for label, stats in prof_counts.items()
        if stats['total'] > 0
    ]

    def summarise_pairs(pairs):
        if not pairs:
            return None
        xs, ys = zip(*pairs)
        return pearson_corr(list(xs), list(ys))

    prof_correlation = {
        'overall': summarise_pairs(prof_pairs_all),
        'academic': summarise_pairs(prof_pairs_acad),
        'nonAcademic': summarise_pairs(prof_pairs_non)
    }

    confidence_labels = [canonicalise(label) for label in CONFIDENCE_SCALE]
    confidence_map = {label: idx + 1 for idx, label in enumerate(confidence_labels)}
    teach_pairs = []
    confidence_usage = {label: [] for label in confidence_labels}
    for row in academic_rows:
        confidence_label = canonicalise(row.get('2.7) How confident are you in incorporating GenAi into your TEACHING practices?', ''), strip_numbers=False)
        score = confidence_map.get(confidence_label)
        if score is None:
            continue
        usage_count = 0
        for col in acad_behaviour_cols:
            answer = canonicalise(row.get(col, ''))
            if answer == 'Yes, I do':
                usage_count += 1
        teach_pairs.append((score, usage_count))
        confidence_usage[confidence_label].append(usage_count)

    confidence_stats = {
        label: {
            'averageUsage': round(sum(values) / len(values), 2) if values else 0.0,
            'medianUsage': sorted(values)[len(values) // 2] if values else 0,
            'respondents': len(values)
        }
        for label, values in confidence_usage.items()
        if values
    }

    confidence_correlation = summarise_pairs(teach_pairs)

    brand_adoption = []
    brand_table_stats = []
    for brand, count in brand_counts.items():
        yes = 0
        other = 0
        for row in rows:
            if canonicalise(row.get(BRAND_COL, ''), strip_numbers=False) != brand:
                continue
            usage = current_work_use(row)
            if usage is None:
                continue
            if usage == 1:
                yes += 1
            else:
                other += 1
        total_brand = yes + other
        rate = to_percentage(yes, total_brand)
        brand_adoption.append({'brand': brand, 'currentYes': yes, 'other': other, 'adoptionRate': rate, 'total': total_brand})
        brand_table_stats.append([yes, other])

    brand_chi = chi_square_test(brand_table_stats)
    brand_effect = cramers_v(brand_table_stats)

    acad_yes = sum(1 for row in academic_rows if current_work_use(row) == 1)
    acad_other = sum(1 for row in academic_rows if current_work_use(row) in (0,))
    non_yes = sum(1 for row in non_rows if current_work_use(row) == 1)
    non_other = sum(1 for row in non_rows if current_work_use(row) in (0,))
    group_table = [[acad_yes, acad_other], [non_yes, non_other]]
    group_chi = chi_square_test(group_table)

    comparative = {
        'itProficiency': {
            'correlation': prof_correlation,
            'byLevel': prof_summary
        },
        'confidenceTeaching': {
            'correlation': confidence_correlation,
            'byLevel': confidence_stats
        },
        'brandAdoption': {
            'rates': sorted(brand_adoption, key=lambda item: item['adoptionRate'], reverse=True),
            'chiSquare': brand_chi,
            'effectSize': brand_effect
        },
        'groupAdoption': {
            'academic': {'yes': acad_yes, 'other': acad_other, 'rate': to_percentage(acad_yes, acad_yes + acad_other)},
            'nonAcademic': {'yes': non_yes, 'other': non_other, 'rate': to_percentage(non_yes, non_yes + non_other)},
            'chiSquare': group_chi,
            'effectSize': cramers_v(group_table)
        }
    }

    # Academic staff
    acad_attitudes = allow_summary(academic_rows, acad_attitude_cols)
    acad_behaviours = []
    for col in acad_behaviour_cols:
        counter, _ = count_by_category(academic_rows, col, transform=lambda v: canonicalise(v))
        total_responses = sum(counter.values())
        acad_behaviours.append({
            'label': col.split('[')[-1].rstrip(']'),
            'counts': {label: counter.get(label, 0) for label in ADOPTION_SCALE},
            'percentages': {label: to_percentage(counter.get(label, 0), total_responses) for label in ADOPTION_SCALE},
            'total': total_responses
        })

    academic_data = {
        'attitudes': acad_attitudes,
        'behaviours': acad_behaviours,
        'concerns': likert_summary(academic_rows, acad_concern_cols),
        'benefits': likert_summary(academic_rows, acad_benefit_cols),
        'toolTypes': academic_tool_usage(academic_rows, acad_tool_cols)
    }

    code_counter, code_total = count_by_category(academic_rows, '2.6) Have you used native AI code editors for teaching programming/technical modules?', transform=lambda v: canonicalise(v))
    confidence_counter, conf_total = count_by_category(academic_rows, '2.7) How confident are you in incorporating GenAi into your TEACHING practices?', transform=lambda v: canonicalise(v))
    disclosure_counter, disc_total = count_by_category(academic_rows, '2.8) Do you inform students that GenAi tools are used in preparing course content, conducting assessments, and providing feedback?', transform=lambda v: canonicalise(v))

    academic_data.update({
        'codeEditors': {'counts': dict(code_counter), 'total': code_total},
        'confidence': {'counts': dict(confidence_counter), 'total': conf_total},
        'disclosure': {'counts': dict(disclosure_counter), 'total': disc_total}
    })

    # Students (academic perception)
    student_att_cols = [col for col in rows[0].keys() if col.startswith('3.1)')]
    student_beh_cols = [col for col in rows[0].keys() if col.startswith('3.5)')]
    student_concern_cols = [col for col in rows[0].keys() if col.startswith('3.2)')]
    student_benefit_cols = [col for col in rows[0].keys() if col.startswith('3.3)')]
    student_tool_cols = [col for col in rows[0].keys() if col.startswith('3.6)')]
    student_abuse_concern_cols = [col for col in rows[0].keys() if col.startswith('3.4)')]
    student_abuse_type_cols = [col for col in rows[0].keys() if col.startswith('3.7)')]

    def student_behaviour_summary(column):
        counter, _ = count_by_category(academic_rows, column, transform=lambda v: canonicalise(v))
        total_responses = sum(counter.values())
        return {
            'counts': {label: counter.get(label, 0) for label in STUDENT_BEHAVIOUR_SCALE},
            'percentages': {label: to_percentage(counter.get(label, 0), total_responses) for label in STUDENT_BEHAVIOUR_SCALE},
            'total': total_responses
        }

    student_attitudes = allow_summary(academic_rows, student_att_cols)
    student_behaviours = [
        {
            'label': col.split('[')[-1].rstrip(']'),
            **student_behaviour_summary(col)
        }
        for col in student_beh_cols
    ]

    student_tools = []
    for col in student_tool_cols:
        counter, _ = count_by_category(academic_rows, col, transform=lambda v: canonicalise(v))
        student_tools.append({'label': col.split('[')[-1].rstrip(']'), 'count': counter.get('Yes', 0)})
    student_tools.sort(key=lambda item: item['count'], reverse=True)

    abuse_types = []
    for col in student_abuse_type_cols:
        counter, _ = count_by_category(academic_rows, col, transform=lambda v: canonicalise(v))
        abuse_types.append({'label': col.split('[')[-1].rstrip(']'), 'count': counter.get('Yes', 0)})
    abuse_types.sort(key=lambda item: item['count'], reverse=True)

    student_agent_counter, student_agent_total = count_by_category(academic_rows, '3.8) Are your STUDENTS using AI agents for academic work?', transform=lambda v: canonicalise(v))
    assessment_counter, assessment_total = count_by_category(academic_rows, '3.9) Have you adapted your assessment design to mitigate for GenAi use by STUDENTS?', transform=lambda v: canonicalise(v))

    student_data = {
        'attitudes': student_attitudes,
        'behaviours': student_behaviours,
        'concerns': likert_summary(academic_rows, student_concern_cols),
        'benefits': likert_summary(academic_rows, student_benefit_cols),
        'tools': student_tools,
        'abuseConcerns': likert_summary(academic_rows, student_abuse_concern_cols),
        'abuseTypes': abuse_types,
        'agents': {'counts': dict(student_agent_counter), 'total': student_agent_total},
        'assessment': {'counts': dict(assessment_counter), 'total': assessment_total}
    }

    # Non-academic staff
    non_att_cols = [col for col in rows[0].keys() if col.startswith('4.1)')]
    non_beh_cols = [col for col in rows[0].keys() if col.startswith('4.4)')]
    non_concern_cols = [col for col in rows[0].keys() if col.startswith('4.2)')]
    non_benefit_cols = [col for col in rows[0].keys() if col.startswith('4.3)')]
    non_tool_cols = [col for col in rows[0].keys() if col.startswith('4.5)')]

    non_attitudes = allow_summary(non_rows, non_att_cols)
    non_behaviours = []
    for col in non_beh_cols:
        counter, _ = count_by_category(non_rows, col, transform=lambda v: canonicalise(v))
        total_responses = sum(counter.values())
        non_behaviours.append({
            'label': col.split('[')[-1].rstrip(']'),
            'counts': {label: counter.get(label, 0) for label in ADOPTION_SCALE},
            'percentages': {label: to_percentage(counter.get(label, 0), total_responses) for label in ADOPTION_SCALE},
            'total': total_responses
        })

    non_tools = academic_tool_usage(non_rows, non_tool_cols)

    non_data = {
        'attitudes': non_attitudes,
        'behaviours': non_behaviours,
        'concerns': likert_summary(non_rows, non_concern_cols),
        'benefits': likert_summary(non_rows, non_benefit_cols),
        'toolTypes': non_tools
    }

    # Ideas & Assistance
    def collect_open(column):
        texts = []
        for row in rows:
            text = canonicalise(row.get(column, ''), strip_numbers=False)
            if text:
                texts.append(text)
        return texts

    assistance_counts = Counter()
    for row in rows:
        for entry in split_multi(row.get('7.4) What assistance could The IIE provide to help you with using GenAi tools (tick all that apply)?', '')):
            assistance_counts[entry] += 1

    data = {
        'respondents': respondents,
        'overallAdoption': overall_adoption,
        'academicStaff': academic_data,
        'students': student_data,
        'nonAcademicStaff': non_data,
        'comparative': comparative,
        'ideas': {
            'uses': collect_open('7.1) What uses have you found for GenAI that you would want the institution to support, and enhance?'),
            'jobIdeas': collect_open('7.2) Do you have any (GenAi) ideas of your own that would make your current job easier? '),
            'agentIdeas': collect_open('7.3) What ideas do you have for AI agents that could benefit your work or studies at the institution?')
        },
        'assistance': {
            'counts': [{'label': label, 'count': count} for label, count in assistance_counts.most_common()]
        }
    }

    return data


def main():
    data = build_data()
    OUTPUT_FILE.write_text(json.dumps(data, indent=2))
    print(f'Wrote {OUTPUT_FILE}')


if __name__ == '__main__':
    main()
