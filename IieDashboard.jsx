import React, { useMemo, useState } from 'react';
import dashboardData from './dashboard_data.json';

const TABS = [
  { id: 'executive', label: 'Executive Summary' },
  { id: 'respondents', label: 'Respondents Overview' },
  { id: 'adoption', label: 'Overall Adoption' },
  { id: 'academic', label: 'Academic Staff' },
  { id: 'students', label: 'Students' },
  { id: 'nonAcademic', label: 'Non-Academic Staff' },
  { id: 'comparative', label: 'Comparative Analysis' },
  { id: 'ideas', label: 'Staff Ideas' },
  { id: 'assistance', label: 'Required Assistance' },
  { id: 'recommendations', label: 'Recommendations' }
];

const palette = {
  // Light, professional theme (inspired by details.html)
  background: '#e2e8f0', // slate-200: slightly darker for container contrast
  surface: '#ffffff',
  panel: '#f8fafc',
  accent: '#38bdf8',
  accentSoft: '#0ea5e9',
  accentAlt: '#f97316',
  positive: '#22c55e',
  neutral: '#94a3b8',
  negative: '#ef4444',
  text: '#0f172a',
  textMuted: '#475569'
};

const linkButtonStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
  padding: '12px 18px',
  borderRadius: '14px',
  background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.25), rgba(14, 165, 233, 0.15))',
  border: '1px solid rgba(56, 189, 248, 0.4)',
  color: '#e2e8f0',
  fontWeight: 600,
  letterSpacing: '0.03em',
  textDecoration: 'none',
  boxShadow: '0 12px 24px rgba(14, 165, 233, 0.25)',
  transition: 'transform 0.2s ease, box-shadow 0.2s ease'
};

const likertColors = {
  Agree: '#38bdf8',
  Neutral: '#facc15',
  Disagree: '#f87171'
};

const adoptionColors = {
  'Yes, I do': '#38bdf8',
  'Yes, but no longer': '#0ea5e9',
  'I am thinking about it': '#facc15',
  'No, not yet': '#94a3b8',
  'No & I will never (on principle)': '#f87171'
};

const attitudeColors = {
  Yes: '#38bdf8',
  'No opinion': '#facc15',
  Never: '#f87171'
};

const boolColors = {
  Yes: '#38bdf8',
  No: '#f87171',
  "I don't know": '#facc15'
};

const META_SCALE = ['No', 'Maybe', 'Yes'];

const IT_PROFICIENCY_ORDER = [
  "Low, I don't use computers often.",
  'Moderate, I use a PC for most of my work.',
  'Advanced, I can assist others to solve their problems.',
  'High, I could work in an IT department.'
];

const proficiencyColors = {
  "Low, I don't use computers often.": '#f87171',
  'Moderate, I use a PC for most of my work.': '#facc15',
  'Advanced, I can assist others to solve their problems.': '#38bdf8',
  'High, I could work in an IT department.': '#22c55e'
};

const metaColors = {
  No: '#f87171',
  Maybe: '#facc15',
  Yes: '#38bdf8'
};

const piePalette = ['#38bdf8', '#f97316', '#22c55e', '#a855f7', '#facc15', '#f87171', '#14b8a6', '#ef8dff'];

const sectionStyle = {
  background: palette.surface,
  borderRadius: '20px',
  padding: '24px',
  marginBottom: '24px',
  boxShadow: '0 8px 24px rgba(2, 6, 23, 0.08)'
};

const headingStyle = {
  fontSize: '20px',
  fontWeight: 600,
  marginBottom: '16px',
  color: palette.text
};

const textStyle = {
  color: palette.text,
  lineHeight: 1.6
};

function formatPercent(value) {
  return `${value.toFixed ? value.toFixed(1) : value}%`;
}

function formatValue(value) {
  return value.toLocaleString();
}

function truncateTitle(title) {
  return title.split(' - ')[0];
}

function KeyInsights({ title, items, variant = 'default' }) {
  const panelStyle = {
    ...sectionStyle,
    background:
      variant === 'highlight'
        ? 'linear-gradient(135deg, rgba(56, 189, 248, 0.2), rgba(14, 165, 233, 0.05))'
        : variant === 'alt'
        ? 'linear-gradient(135deg, rgba(249, 115, 22, 0.2), rgba(14, 165, 233, 0.05))'
        : sectionStyle.background,
    border: variant === 'highlight' ? '1px solid rgba(56, 189, 248, 0.35)' : '1px solid rgba(15, 23, 42, 0.08)'
  };
  return (
    <div style={panelStyle}>
      <h3 style={headingStyle}>{title}</h3>
      <ul style={{ ...textStyle, paddingLeft: '20px' }}>
        {items.map((item, idx) => (
          <li key={idx} style={{ marginBottom: '6px' }}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function TabNavigation({ activeTab, onSelect }) {
  return (
    <nav
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '12px',
        marginBottom: '24px'
      }}
    >
      {TABS.map((tab) => {
        const isActive = tab.id === activeTab;
        return (
          <button
            key={tab.id}
            onClick={() => onSelect(tab.id)}
            style={{
              padding: '12px 18px',
              borderRadius: '999px',
              border: isActive ? '1px solid rgba(56,189,248,0.4)' : '1px solid rgba(2,6,23,0.1)',
              cursor: 'pointer',
              background: isActive ? palette.accent : '#f1f5f9',
              color: isActive ? '#0b1220' : palette.text,
              fontWeight: 700,
              letterSpacing: '0.02em',
              boxShadow: isActive ? '0 10px 20px rgba(56,189,248,0.25)' : '0 2px 6px rgba(2,6,23,0.06)',
              transition: 'all 0.2s ease'
            }}
          >
            {tab.label}
          </button>
        );
      })}
    </nav>
  );
}

function TabProgress({ activeTab }) {
  const activeIndex = TABS.findIndex((tab) => tab.id === activeTab);
  return (
    <div style={{ display: 'flex', gap: '6px', marginBottom: '24px', flexWrap: 'wrap' }}>
      {TABS.map((tab, idx) => {
        const isActive = idx === activeIndex;
        const isComplete = idx < activeIndex;
        const background = isActive ? palette.accent : isComplete ? 'rgba(56, 189, 248, 0.35)' : '#e2e8f0';
        return (
          <div
            key={tab.id}
            style={{
              width: '18px',
              height: '18px',
              borderRadius: '50%',
              background,
              border: '1px solid rgba(2,6,23,0.08)',
              boxShadow: isActive ? '0 0 12px rgba(56, 189, 248, 0.5)' : 'none'
            }}
            title={tab.label}
          />
        );
      })}
    </div>
  );
}

function Breadcrumbs({ activeTab }) {
  const index = TABS.findIndex((tab) => tab.id === activeTab);
  const trail = TABS.slice(0, index + 1);
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '18px', color: palette.textMuted }}>
      {trail.map((tab, idx) => (
        <React.Fragment key={tab.id}>
          <span>{tab.label}</span>
          {idx < trail.length - 1 && <span style={{ opacity: 0.5 }}>/</span>}
        </React.Fragment>
      ))}
    </div>
  );
}

function PieChart({ title, data, size = 160, subtitle, footnote, legendPosition = 'side' }) {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  let currentAngle = 0;
  const segments = data.map((item, idx) => {
    const start = currentAngle;
    const angle = (item.value / total) * 360;
    currentAngle += angle;
    return { ...item, start, angle, color: item.color || piePalette[idx % piePalette.length] };
  });
  const gradient = segments
    .map((seg) => {
      const start = (seg.start / 360) * 100;
      const end = ((seg.start + seg.angle) / 360) * 100;
      return `${seg.color} ${start}% ${end}%`;
    })
    .join(', ');
  return (
    <div style={{ ...sectionStyle, flex: 1, minWidth: '260px' }}>
      <h4 style={{ ...headingStyle, fontSize: '18px' }}>{title}</h4>
      <div style={{ display: legendPosition === 'bottom' ? 'block' : 'flex', alignItems: 'center', gap: '16px' }}>
        <div
          style={{
            width: size,
            height: size,
            aspectRatio: '1 / 1',
            flex: '0 0 auto',
            borderRadius: '50%',
            background: `conic-gradient(${gradient})`,
            position: 'relative',
            margin: legendPosition === 'bottom' ? '0 auto' : undefined
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: size * 0.55,
              height: size * 0.55,
              borderRadius: '50%',
              background: palette.panel,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: palette.text,
              fontWeight: 600
            }}
          >
            {total}
          </div>
        </div>
        <div style={{ marginTop: legendPosition === 'bottom' ? '12px' : 0 }}>
          {subtitle && <p style={{ ...textStyle, marginBottom: '12px', color: palette.textMuted }}>{subtitle}</p>}
          <ul style={{ ...textStyle, listStyle: 'none', padding: 0, display: legendPosition === 'bottom' ? 'flex' : 'block', gap: '16px', flexWrap: 'wrap', justifyContent: legendPosition === 'bottom' ? 'center' : 'flex-start' }}>
            {segments.map((seg) => (
              <li key={seg.label} style={{ display: 'flex', alignItems: 'center', marginBottom: '6px' }}>
                <span
                  style={{
                    display: 'inline-block',
                    width: '12px',
                    height: '12px',
                    borderRadius: '4px',
                    background: seg.color,
                    marginRight: '10px'
                  }}
                />
                <span style={{ flex: 1 }}>{seg.label}</span>
                <strong style={{ color: palette.text, marginLeft: '6px' }}>{formatPercent((seg.value / total) * 100)}</strong>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {footnote && <div style={{ color: palette.textMuted, marginTop: '12px', fontSize: '13px' }}>{footnote}</div>}
    </div>
  );
}

function HorizontalBarChart({ title, data, unit = 'count', maxValue, colorScale, footnote, showLegend, legendPalette, footnoteUnderTitle = false }) {
  const computedMax = maxValue || Math.max(...data.map((d) => d.value));
  return (
    <div style={sectionStyle}>
      <h4 style={{ ...headingStyle, fontSize: '18px' }}>{title}</h4>
      {footnoteUnderTitle && footnote && <div style={{ color: palette.textMuted, marginBottom: '16px', fontSize: '13px' }}>{footnote}</div>}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {data.map((item, idx) => {
          const width = (item.value / computedMax) * 100;
          const barColor = colorScale ? colorScale(item, idx) : palette.accent;
          return (
            <div key={item.label}>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: palette.textMuted, fontSize: '14px' }}>
                <span style={{ maxWidth: '70%', color: palette.text }}>{item.label}</span>
                <span>{item.context || ''}</span>
              </div>
              <div style={{ position: 'relative', height: '12px', marginTop: '14px', paddingRight: '50px' }}>
                <div style={{
                  width: `${width}%`,
                  height: '12px',
                  background: barColor,
                  borderRadius: '6px'
                }} />
                <div style={{ position: 'absolute', top: '-2px', left: `min(${width}%, calc(100% - 50px))`, marginLeft: '8px', color: palette.text, fontSize: '13px', fontWeight: '600', whiteSpace: 'nowrap' }}>
                  {unit === 'percent' ? formatPercent(item.value) : formatValue(item.value)}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {showLegend && legendPalette && (
        <div style={{ marginTop: '12px', display: 'flex', gap: '12px', flexWrap: 'wrap', color: palette.textMuted, fontSize: '13px' }}>
          {Object.keys(legendPalette).map((key) => (
            <div key={key} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ width: '12px', height: '12px', borderRadius: '4px', background: legendPalette[key] }} />
              <span>{key}</span>
            </div>
          ))}
        </div>
      )}
      {!footnoteUnderTitle && footnote && <div style={{ color: palette.textMuted, marginTop: '8px', fontSize: '13px' }}>{footnote}</div>}
    </div>
  );
}

// Automatically choose bar orientation: <=5 items → columns, else horizontal bars
function AutoBarChart({ title, data, colorScale, unit = 'count', footnote, footnoteUnderTitle = false }) {
  const items = data || [];
  if (items.length <= 5) {
    const vData = items.map((d) => ({ label: d.label, value: d.value, context: d.context }));
    return <VerticalBarChart title={title} data={vData} colorScale={colorScale} footnote={footnote} unit={unit} />;
  }
  return <HorizontalBarChart title={title} data={items} colorScale={colorScale} unit={unit} footnote={footnote} footnoteUnderTitle={footnoteUnderTitle} />;
}

function StackedBarGroup({ title, data, colorPalette, footnote, showLegend, segmentOrder }) {
  return (
    <div style={sectionStyle}>
      <h4 style={{ ...headingStyle, fontSize: '18px' }}>{title}</h4>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {data.map((row) => {
          const total = Object.values(row.counts).reduce((sum, value) => sum + value, 0);
          const entries = Object.entries(row.counts);
          const ordered = segmentOrder
            ? entries.sort((a, b) => segmentOrder.indexOf(a[0]) - segmentOrder.indexOf(b[0]))
            : entries;
          let acc = 0;
          return (
            <div key={row.label}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '6px',
                color: palette.text
              }}>
                <span style={{ maxWidth: '70%' }}>{truncateTitle(row.label)}</span>
                <span style={{ color: palette.textMuted }}>{total ? `${total}` : 'n/a'}</span>
              </div>
              <div style={{ display: 'flex', borderRadius: '8px', overflow: 'hidden', height: '18px' }}>
                {ordered.map(([key, value], idx, arr) => {
                  if (!value) return null;
                  let percent = total ? (value / total) * 100 : 0;
                  if (idx === arr.length - 1 && percent + acc < 100) {
                    percent = 100 - acc; // fill rounding gap
                  }
                  acc += percent;
                  const color = colorPalette[key] || palette.accent;
                  return (
                    <div
                      key={key}
                      style={{
                        width: `${percent}%`,
                        background: color,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#0f172a',
                        fontSize: '12px',
                        fontWeight: 600
                      }}
                    >
                      {percent > 0 ? `${percent.toFixed(0)}%` : ''}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      {showLegend && (
        <div style={{ marginTop: '12px', display: 'flex', gap: '12px', flexWrap: 'wrap', color: palette.textMuted, fontSize: '13px' }}>
          {Object.keys(colorPalette).map((key) => (
            <div key={key} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ width: '12px', height: '12px', borderRadius: '4px', background: colorPalette[key] }} />
              <span>{key}</span>
            </div>
          ))}
        </div>
      )}
      {footnote && <div style={{ color: palette.textMuted, marginTop: '12px', fontSize: '13px' }}>{footnote}</div>}
    </div>
  );
}

function StackedColumnChart({ title, series, colorPalette, footnote, segmentOrder }) {
  const legendKeys = Object.keys(colorPalette);
  const cols = Math.max(1, series.length);
  const grid = {
    display: 'grid',
    gridTemplateColumns: `repeat(${cols}, minmax(160px, 1fr))`,
    gap: '24px'
  };
  return (
    <div style={sectionStyle}>
      <h4 style={{ ...headingStyle, fontSize: '18px' }}>{title}</h4>
      {/* Row 1: bars only (fixed height, equal columns) */}
      <div style={{ ...grid, alignItems: 'end' }}>
        {series.map((item) => (
          <div key={item.label} style={{ height: '220px', display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column-reverse',
              height: '100%',
              width: '80%',
              background: 'transparent'
            }}>
              {(segmentOrder ? [...item.segments].sort((a,b)=>segmentOrder.indexOf(a.label)-segmentOrder.indexOf(b.label)) : item.segments).map((segment, segIdx, segArr) => (
                <div
                  key={segment.label}
                  style={{
                    height: `${segment.percent}%`,
                    background: colorPalette[segment.label] || palette.accent,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#0f172a',
                    fontSize: '12px',
                    fontWeight: 600,
                    borderRadius: segIdx === segArr.length - 1 ? '14px 14px 0 0' : '0'
                  }}
                >
                  {segment.percent > 0 ? (segment.percent === 100 ? item.total : `${segment.percent.toFixed(0)}%`) : ''}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* Row 2: labels only (equal columns, top-aligned, center text) */}
      <div style={{ ...grid, marginTop: '10px' }}>
        {series.map((item) => (
          <div key={item.label} style={{ textAlign: 'center', alignSelf: 'start', color: palette.text }}>
            {item.label}
          </div>
        ))}
      </div>
      {/* Legend */}
      <div style={{ marginTop: '16px', display: 'flex', gap: '16px', flexWrap: 'wrap', color: palette.textMuted, fontSize: '13px' }}>
        {legendKeys.map((key) => (
          <div key={key} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ width: '12px', height: '12px', borderRadius: '4px', background: colorPalette[key] }} />
            <span>{key}</span>
          </div>
        ))}
      </div>
      {footnote && <div style={{ color: palette.textMuted, marginTop: '12px', fontSize: '13px' }}>{footnote}</div>}
    </div>
  );
}

function VerticalBarChart({ title, data, colorScale, footnote, columns, unit = 'count' }) {
  const maxValue = Math.max(...data.map((d) => d.value));
  return (
    <div style={sectionStyle}>
      <h4 style={{ ...headingStyle, fontSize: '18px' }}>{title}</h4>
      <div style={{
        display: columns ? 'grid' : 'flex',
        gridTemplateColumns: columns ? `repeat(${columns}, minmax(140px, 1fr))` : undefined,
        gap: '24px',
        alignItems: columns ? 'end' : 'flex-end',
        flexWrap: columns ? undefined : 'wrap'
      }}>
        {data.map((item, idx) => {
          const heightPercent = maxValue ? (item.value / maxValue) * 100 : 0;
          return (
            <div key={item.label} style={{
              flex: '1 1 140px',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'flex-end',
              minHeight: '280px'
            }}>
              <div
                style={{
                  width: '60%',
                  height: `${(item.value / maxValue) * 220}px`,
                  minHeight: item.value > 0 ? '4px' : '0',
                  background: colorScale ? colorScale(item, idx) : palette.accent,
                  borderRadius: '12px 12px 4px 4px',
                  position: 'relative',
                  marginBottom: '8px'
                }}
              >
                <span style={{ position: 'absolute', top: '-24px', left: '0', width: '100%', textAlign: 'center', fontSize: '13px', color: palette.text, fontWeight: '600' }}>
                  {item.valueLabel ?? (unit === 'percent' ? formatPercent(item.value) : formatValue(item.value))}
                </span>
              </div>
              <div style={{ color: palette.text, minHeight: '36px' }}>{item.label}</div>
              {item.context && <div style={{ color: palette.textMuted, fontSize: '12px', minHeight: '16px' }}>{item.context}</div>}
            </div>
          );
        })}
      </div>
      {footnote && <div style={{ color: palette.textMuted, marginTop: '12px', fontSize: '13px' }}>{footnote}</div>}
    </div>
  );
}

function DualStackedBar({ title, left, right, colors }) {
  return (
    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
      <div style={{ flex: 1, minWidth: '320px' }}>
        <StackedBarGroup title={`${title} • Attitude`} data={left} colorPalette={colors} showLegend segmentOrder={['Yes','No opinion','Never']} />
      </div>
      <div style={{ flex: 1, minWidth: '320px' }}>
        <StackedBarGroup title={`${title} • Behaviour`} data={right} colorPalette={adoptionColors} showLegend segmentOrder={['Yes, I do','Yes, but no longer','I am thinking about it','No, not yet','No & I will never (on principle)']} />
      </div>
    </div>
  );
}

function TableCard({ title, columns, rows, formatters }) {
  return (
    <div style={sectionStyle}>
      <h4 style={{ ...headingStyle, fontSize: '18px' }}>{title}</h4>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', color: palette.text }}>
          <thead>
            <tr>
              {columns.map((col) => (
                <th
                  key={col}
                  style={{
                    textAlign: 'left',
                    padding: '12px 16px',
                    background: '#243044',
                    fontWeight: 600,
                    color: palette.textMuted,
                    borderBottom: '1px solid rgba(148, 163, 184, 0.2)'
                  }}
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => (
              <tr key={idx} style={{ background: idx % 2 === 0 ? 'rgba(36, 48, 68, 0.35)' : 'transparent' }}>
                {columns.map((col) => (
                  <td key={col} style={{ padding: '10px 16px', borderBottom: '1px solid rgba(148, 163, 184, 0.12)' }}>
                    {formatters && formatters[col]
                      ? formatters[col](row[col])
                      : typeof row[col] === 'number'
                      ? formatValue(row[col])
                      : row[col]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function StatBadge({ label, value, emphasis }) {
  return (
    <div
      style={{
        padding: '16px',
        borderRadius: '16px',
        background: emphasis ? 'rgba(56, 189, 248, 0.12)' : palette.surface,
        border: emphasis ? '1px solid rgba(56, 189, 248, 0.35)' : '1px solid rgba(2, 6, 23, 0.08)',
        flex: 1,
        minWidth: '180px'
      }}
    >
      <div style={{ color: palette.textMuted, fontSize: '13px', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{label}</div>
      <div style={{ color: palette.text, fontSize: '26px', fontWeight: 700 }}>{value}</div>
    </div>
  );
}

function InsightGrid({ stats }) {
  return (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '24px' }}>
      {stats.map((stat) => (
        <StatBadge key={stat.label} {...stat} />
      ))}
    </div>
  );
}

function HistogramPair({ title, left, right, compact = false, sync = false }) {
  return (
    <div style={sectionStyle}>
      <h4 style={{ ...headingStyle, fontSize: '18px', marginBottom: '20px' }}>{title}</h4>
      <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', alignItems: 'flex-end' }}>
        {(() => {
          const scale = (bins) => Math.max(1, ...bins.map((b) => b.count));
          const max = sync ? Math.max(scale(left.data), scale(right.data)) : undefined;
          const hMul = compact ? 3 : 6;
          const maxHeight = sync ? (hMul * (max || 1)) : undefined;
          return [left, right].map((series, idx) => (
            <div key={idx} style={{ flex: 1, minWidth: '260px' }}>
              <h5 style={{ color: palette.textMuted, marginBottom: '12px' }}>{series.title}</h5>
              <div style={{
                display: 'flex',
                gap: '10px',
                alignItems: 'flex-end',
                height: maxHeight ? `${maxHeight + 40}px` : 'auto'
              }}>
                {series.data.map((bin) => (
                  <div key={bin.bin} style={{ textAlign: 'center', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                    <div
                      style={{
                        height: `${(bin.count / (max || scale(series.data))) * (hMul * (max || scale(series.data)))}px`,
                        background: palette.accent,
                        borderRadius: '6px 6px 2px 2px',
                        marginBottom: '6px'
                      }}
                    />
                    <div style={{ color: palette.textMuted, fontSize: '12px', marginBottom: '2px' }}>{bin.bin}</div>
                    <div style={{ color: palette.text, fontSize: '12px' }}>{bin.count}</div>
                  </div>
                ))}
              </div>
            </div>
          ));
        })()}
      </div>
    </div>
  );
}

function AssistanceChart({ data }) {
  const series = data.map((d) => ({ label: d.label, value: d.count, context: `` }));
  return (
    <HorizontalBarChart title="Top Assistance Needs" data={series} colorScale={() => palette.accent} />
  );
}

function InsightList({ title, items }) {
  return (
    <div style={sectionStyle}>
      <h4 style={{ ...headingStyle, fontSize: '18px' }}>{title}</h4>
      <ul style={{ ...textStyle, paddingLeft: '20px' }}>
        {items.map((item, idx) => (
          <li key={idx} style={{ marginBottom: '8px' }}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function RecommendationGroup({ horizon, items }) {
  return (
    <div style={{ ...sectionStyle, borderLeft: `4px solid ${palette.accent}` }}>
      <h4 style={{ ...headingStyle, fontSize: '18px' }}>{horizon}</h4>
      <ul style={{ ...textStyle, paddingLeft: '20px' }}>
        {items.map((item, idx) => (
          <li key={idx} style={{ marginBottom: '8px' }}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function IieDashboard() {
  const [activeTab, setActiveTab] = useState(TABS[0].id);
  const totalRespondents = dashboardData.respondents.totalRespondents;
  const academicCount = dashboardData.respondents.academicCount;
  const nonAcademicCount = dashboardData.respondents.nonAcademicCount;

  const executiveInsights = useMemo(() => [
    `331 staff members responded (62% academic, 38% non-academic), equating to a 12.4% institutional participation rate with adequate ±5.4% margin of error.`,
    `${dashboardData.overallAdoption.adoptionWork.percentages['Yes, I do']}% currently use GenAI for work while ${dashboardData.overallAdoption.adoptionPersonal.percentages['Yes, I do']}% use it personally; 263 respondents rely on GenAI in both contexts.`,
    `ChatGPT adoption is near-universal (89% current users), with Copilot (47%) and Meta AI (50%) forming a strong productivity stack despite high ethical (67%) and reliability (49%) concerns.`,
    `Academic staff overwhelmingly endorse GenAI-enabled teaching (86% for curriculum design) but only 28% actively apply it to assessment workflows; confidence strongly predicts usage (r = 0.48).`,
    `Academic respondents report surging student usage (64% already see GenAI in personalised learning) alongside acute integrity concerns (81% worried about plagiarism) spurring assessment redesign.`,
    `Training (270 votes), subsidised licensing (253) and curated app access (251) top the assistance queue, signalling readiness for structured enablement programs.`,
    `Adoption remains uneven: academic staff show 86% active work usage versus 63% in non-academic teams, highlighting the priority for targeted operational onboarding.`
  ], []);

  const respondentInsights = [
    `Academic respondents (204) outnumber Non-academic (127) aligning with staffing ratios; Varsity College (52%) and Rosebank College (29%) dominate the sample with Vega at 14%.`,
    `Academic participation clusters in Commerce (36%), Humanities (26%), ICT (20%), Education (19%), NQF level 7 (63%) and NQF levels 5&6 (52%), providing balanced discipline coverage for strategic planning.`,
    `58% of Academics and 57% of Non-Academic staff have ≤5 years at The IIE.`,
    `IT proficiency is solid: 50% of academics and 52% of non-academic staff self-rate as advanced, with a further 13% and 12% respectively confident enough to work in IT.`
  ];

  const adoptionInsights = [
    `${dashboardData.overallAdoption.adoptionWork.percentages['Yes, I do']}% already rely on GenAI for work and ${dashboardData.overallAdoption.adoptionPersonal.percentages['Yes, I do']}% for personal tasks; 85% of adopters straddle both contexts.`,
    `ChatGPT remains the anchor (89% current usage, 34 paid seats) with rapid entrants: Copilot (47% current), Meta AI via WhatsApp (50%) and DeepSeek (18%) highlight appetite for multi-model workflows.`,
    `Research (270 users) and writing (229) lead activities, yet only 97 respondents use GenAI for technical tasks while 33 refuse entirely—signalling a skills and tooling gap.`,
    `Ethical risks top the concern list (67% agreement) despite strong belief in efficiency (80%) and automation (74%) benefits, underscoring the need for governance paired with enablement.`,
    `Advanced capabilities remain emergent: 25% currently use reasoning models and 23% engage AI agents, indicating headroom for structured experimentation.`
  ];

  const academicInsights = [
    `Support for GenAI-enabled teaching is robust (86% for curriculum/content) but operational uptake lags—only 28% actively use it for assessment and 27% for documentation.`,
    `Two-thirds of academics flag reliability (66%) and ethics/accountability (66%) as primary risks, yet 70–86% credit GenAI with gains in preparation efficiency, richer materials and administrative relief.`,
    `Confidence fuels adoption: very confident academics average 2.45 active teaching use-cases versus 0.71 among unsure peers (r = 0.48, n = 204).`,
    `Only 11 academics use native AI code  editors and disclosure to students is uneven (48 always disclose, 63 rarely/never), signalling policy and tooling opportunities.`
  ];

  const studentInsights = [
    `Academic staff endorse student access (70–82% support across scenarios) and report widespread learner adoption, notably 64% seeing GenAI for personalised learning and 57% for research planning.`,
    `Academic honesty anxieties are acute: 81% fear undetected plagiarism and 79% highlight assessment challenges, driving 36% to redesign evaluations with a further 17% mid-transition.`,
    `Perceived misuse clusters around uncredited copying (188 mentions) and homework completion (185), underscoring the need for transparent student policy and detection support.`,
    `AI agents are already entering classrooms—69% of academics believe students use them—demanding proactive guidance and scenario planning.`
  ];

  const nonAcademicInsights = [
    `Operations & support teams are the most enthusiastic (82% approval) yet fewer than one-third currently apply GenAI to meetings, media or technical tasks—revealing process integration gaps.`,
    `Over half of non-academic respondents use GenAI for research (53%) and writing (55%), mirroring core administrative workloads.`,
    `Ethical anxiety (65%) outweighs fears of job displacement (37%) or technical barriers (20%), reinforcing the need for governance and change management messaging.`,
    `Conversational AI (95 users) and search tools (63 users) anchor toolkits, with 41 already exploring AI agents for workflow automation.`
  ];

  const comparativeInsights = [
    `IT proficiency correlates with adoption: work usage rises from 0% at low proficiency to 81% among highly proficient staff, though aggregate correlation remains modest (r = 0.11).`,
    `Teaching confidence is the strongest behavioural predictor—usage breadth climbs steadily from 0.7 to 2.45 applications as confidence grows (r = 0.48, CI95 [0.36; 0.58]).`,
    `Academic staff outpace non-academic peers in active work usage (86% vs 63%, χ²=22.99, p<0.05) indicating an operational enablement gap.`,
    `Brand adoption variance is moderate (Cramér’s V = 0.16) with Vega (82%) and Varsity College (81%) leading, while MSA (69%) and Rosebank (68%) lag.`
  ];

  const ideaInsights = {
    uses: {
      summary: [
        `277 respondents shared institutional use-cases: student support (29%), research & analytics (25%) and capability development (22%) dominate submissions.`,
        `Sentiment skews pragmatic (63% neutral, 22% positive) with repeat calls for GenAI-assisted assessment design, rubric drafting and content localisation.`
      ],
      highlights: [
        'Co-creating creative formative assessments and rubrics with GenAI to diversify evaluation formats.',
        'Leveraging GenAI for market intelligence and programme innovation insights across faculties.'
      ]
    },
    jobIdeas: {
      summary: [
        `280 ideas to ease workload emphasise student support (18%), assessment automation (16%) and workflow streamlining (13%).`,
        `Respondents voice pain points (41% negative sentiment) around time-intensive marking, fragmented tooling and manual reporting.`
      ],
      highlights: [
        'Desire for an integrated assistant that links lesson planning, assessment design and personalised feedback dashboards.',
        'Requests for GenAI-driven change management communications and stakeholder engagement scripts.'
      ]
    },
    agentIdeas: {
      summary: [
        `269 agent concepts target student services (21%), research support (15%) and academic integrity monitoring (14%).`,
        `Neutral sentiment (50%) masks clear solution themes—admissions triage, knowledgebase chatbots and curriculum copilots.`
      ],
      highlights: [
        'Admission workflow agent that checks documentation, summarises applicant status and automates follow-up communications.',
        '24/7 policy-aware chatbot for assessment queries, escalating edge cases to academic leadership with context packs.'
      ]
    }
  };

  const assistanceInsights = [
    `Training tops the list (270 votes) with strong demand for multi-modal enablement (workshops, webinars and on-demand content).`,
    `Budget support matters: 253 respondents need help covering premium licences, while 251 request an institutionally curated and managed app stack.`,
    `Enablement scaffolding—resource libraries (232 mentions), technical troubleshooting (185) and peer communities (183)—completes the support blueprint.`
  ];

  const recommendations = {
    short: [
      'Launch an institution-wide GenAI enablement sprint: curated training pathways, rapid-reference guides and a transparent approved-tools register.',
      'Codify disclosure, assessment and student-use guidelines paired with exemplar communications for academics and operations teams.',
      'Stand-up a GenAI helpdesk pod blending technical support and instructional design coaching to unblock early adopters.'
    ],
    medium: [
      'Co-design faculty-specific playbooks that translate high-benefit use-cases (assessment redesign, admissions triage, research assistance) into reusable workflows.',
      'Negotiate enterprise licensing for priority tools (ChatGPT Teams, Copilot, Meta AI integrations) aligned to compliance and data governance requirements.',
      'Implement a confidence accelerator programme that pairs power users with cohort-based mentoring, targeting teams with low utilisation.'
    ],
    long: [
      'Embed GenAI maturity metrics into strategic dashboards—track adoption depth, quality outcomes and integrity indicators to steer continuous improvement.',
      'Build an innovation lab for reasoning models and agent ecosystems, emphasising cross-department pilots in student services, analytics and quality assurance.',
      'Integrate GenAI capability development into talent management, ensuring progression frameworks reward ethical, high-impact AI-enabled practice.'
    ]
  };

  const coreStats = [
    { label: 'Total Respondents', value: formatValue(totalRespondents), emphasis: true },
    { label: 'Academic Staff', value: `${academicCount} (${((academicCount / totalRespondents) * 100).toFixed(1)}%)` },
    { label: 'Non-Academic Staff', value: `${nonAcademicCount} (${((nonAcademicCount / totalRespondents) * 100).toFixed(1)}%)` },
    { label: 'Dual-context GenAI Users', value: `${dashboardData.overallAdoption.adoptionBoth.counts['Both work & personal']} (${((dashboardData.overallAdoption.adoptionBoth.counts['Both work & personal'] / dashboardData.overallAdoption.adoptionBoth.total) * 100).toFixed(1)}%)` }
  ];

  const renderTab = () => {
    switch (activeTab) {
      case 'executive':
        return (
          <div>
            <InsightGrid stats={coreStats} />
            <KeyInsights title="Strategic Headlines" items={executiveInsights} variant="highlight" />
          </div>
        );
      case 'respondents': {
        const brandPieData = dashboardData.respondents.brandCounts.map((item, idx) => ({
          label: item.label,
          value: item.count,
          color: piePalette[idx % piePalette.length]
        }));
        const groupPieData = dashboardData.respondents.groupCounts.map((item, idx) => ({
          label: item.label,
          value: item.count,
          color: piePalette[idx % piePalette.length]
        }));
        const academicExp = dashboardData.respondents.experience.academic;
        const nonExp = dashboardData.respondents.experience.nonAcademic;
        const facultyData = dashboardData.respondents.facultyCounts.map((item) => ({ label: truncateTitle(item.label), value: item.count }));
        const tableColumns = ['Brand', 'Academic', 'Non-academic', 'Total'];
        const percentColumns = ['Brand', 'Academic', 'Non-academic'];
        const countsRows = dashboardData.respondents.brandGroupCounts.map((row) => ({
          Brand: row.brand,
          Academic: row.Academic,
          'Non-academic': row['Non-academic'],
          Total: row.Total
        }));
        const percRows = dashboardData.respondents.brandGroupPercentages.map((row) => ({
          Brand: row.brand,
          Academic: `${row.Academic.toFixed(1)}%`,
          'Non-academic': `${row['Non-academic'].toFixed(1)}%`
        }));
        const itStackData = [
          {
            title: 'Academic Staff',
            stats: dashboardData.respondents.itProficiency.academic
          },
          {
            title: 'Non-Academic Staff',
            stats: dashboardData.respondents.itProficiency.nonAcademic
          }
        ];
        const sampleSummary = dashboardData.respondents.sampleSummary;
        const sampleStats = [
          {
            label: 'Overall participation',
            value: `${sampleSummary.overall.respondents}/${sampleSummary.overall.population} (${sampleSummary.overall.participationRate.toFixed(1)}%)`,
            emphasis: true
          },
          {
            label: 'Academic response rate',
            value: `${sampleSummary.academic.respondents}/${sampleSummary.academic.population} (${sampleSummary.academic.participationRate.toFixed(1)}%)`
          },
          {
            label: 'Non-academic response rate',
            value: `${sampleSummary.nonAcademic.respondents}/${sampleSummary.nonAcademic.population} (${sampleSummary.nonAcademic.participationRate.toFixed(1)}%)`
          }
        ];
        const nqfData = dashboardData.respondents.nqfCounts.map((item) => ({ label: truncateTitle(item.label), value: item.count }));
        const proficiencySeries = [
          {
            label: 'Academic Staff',
            total: itStackData[0].stats.total,
            segments: [...IT_PROFICIENCY_ORDER].reverse().map((key) => ({
              label: key,
              percent: itStackData[0].stats.percentages[key] || 0
            }))
          },
          {
            label: 'Non-Academic Staff',
            total: itStackData[1].stats.total,
            segments: [...IT_PROFICIENCY_ORDER].reverse().map((key) => ({
              label: key,
              percent: itStackData[1].stats.percentages[key] || 0
            }))
          }
        ];
        return (
          <div>
            <KeyInsights title="Key Findings" items={respondentInsights} />
            <InsightGrid stats={sampleStats} />
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
              <PieChart title="Respondents by Brand" data={brandPieData} />
              <PieChart title="Respondents by Role Group" data={groupPieData} />
            </div>
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
              <div style={{ flex: 1 }}>
                <TableCard title="Brand × Role • Counts" columns={tableColumns} rows={countsRows} />
              </div>
              <div style={{ flex: 1 }}>
                <TableCard title="Brand × Role • % of Brand" columns={percentColumns} rows={percRows} />
              </div>
            </div>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <div style={{ flex: 1, minWidth: '320px' }}>
                <AutoBarChart
                  title="Academic Faculties Represented"
                  data={facultyData}
                  colorScale={() => palette.accent}
                  footnote={`n = ${dashboardData.respondents.academicCount} academic staff (multiple selections allowed)`}
                  footnoteUnderTitle={true}
                />
              </div>
              <div style={{ flex: 1, minWidth: '320px' }}>
                <AutoBarChart
                  title="Academic NQF Levels"
                  data={nqfData}
                  colorScale={() => palette.accentAlt}
                  footnote={`n = ${dashboardData.respondents.academicCount} academic staff (multiple selections allowed)`}
                  footnoteUnderTitle={true}
                />
              </div>
            </div>
            <HistogramPair
              title="Tenure Distribution"
              left={{
                title: 'Academic Staff • years at IIE',
                data: academicExp.iie
              }}
              right={{
                title: 'Academic Staff • prior years of teaching experience',
                data: academicExp.elsewhere
              }}
              compact
            />
            <HistogramPair
              title="Non-Academic Staff Distribution"
              left={{
                title: 'Non-Academic Staff • years at IIE',
                data: nonExp.iie
              }}
              right={{
                title: 'Non-Academic Staff • prior experience',
                data: nonExp.elsewhere
              }}
              sync
            />
            <StackedColumnChart
              title="IT Proficiency (Share of Respondents)"
              series={proficiencySeries}
              colorPalette={proficiencyColors}
              footnote="What is your general IT proficiency?\n\nPercentages per bar sum to 100%"
            />
          </div>
        );
      }
      case 'adoption': {
        const adoptionPieData = [
          {
            title: 'GenAI for Work',
            data: Object.entries(dashboardData.overallAdoption.adoptionWork.counts).map(([label, value], idx) => ({
              label,
              value,
              color: adoptionColors[label] || piePalette[idx % piePalette.length]
            })),
            subtitle: `n = ${dashboardData.overallAdoption.adoptionWork.total}`
          },
          {
            title: 'GenAI for Personal Use',
            data: Object.entries(dashboardData.overallAdoption.adoptionPersonal.counts).map(([label, value], idx) => ({
              label,
              value,
              color: adoptionColors[label] || piePalette[idx % piePalette.length]
            })),
            subtitle: `n = ${dashboardData.overallAdoption.adoptionPersonal.total}`
          },
          {
            title: 'Dual-context Usage',
            data: Object.entries(dashboardData.overallAdoption.adoptionBoth.counts).map(([label, value], idx) => ({
              label,
              value,
              color: piePalette[idx % piePalette.length]
            })),
            subtitle: `n = ${dashboardData.overallAdoption.adoptionBoth.total}`
          }
        ];
        const activitiesData = dashboardData.overallAdoption.activities.map((item) => ({
          label: truncateTitle(item.label),
          value: item.used,
          context: `${item.notYet} not yet`
        }));
        const activitiesTotal = dashboardData.overallAdoption.activities[0]?.total || 0;
        const toolBarData = [...dashboardData.overallAdoption.topTools]
          .sort((a, b) => b.used - a.used)
          .map((item) => ({
            label: item.tool,
            value: item.used
          }));
        const toolBarCurrentPct = [...dashboardData.overallAdoption.topTools]
          .sort((a, b) => b.used - a.used)
          .map((item) => ({
            label: item.tool,
            value: item.used ? (item.current / item.used) * 100 : 0
          }));
        const topToolBreakdown = dashboardData.overallAdoption.topCurrentBreakdown.map((item) => ({
          title: item.tool,
          data: [
            { label: 'Free Tier', value: item.currentFree, color: palette.accent },
            { label: 'Paid Tier', value: item.currentPaid, color: palette.accentAlt }
          ],
          subtitle: `${item.currentTotal} current users`
        }));
        const metaSeries = dashboardData.overallAdoption.metaUsage.map((item) => ({
          label: item.label,
          total: item.total,
          segments: META_SCALE.map((option) => ({
            label: option,
            percent: item.total ? (item.counts[option] || 0) / item.total * 100 : 0
          }))
        }));
        const labelShort = {
          'No, not yet': 'Not yet',
          'Yes, I do': 'Yes',
          'I am thinking about it': 'Thinking',
          'Yes, but no longer': 'Yes (past)',
          'No & I will never (on principle)': 'Never'
        };
        const reasoningCounts = dashboardData.overallAdoption.reasoningModels;
        const reasoningData = Object.entries(reasoningCounts.counts).map(([label, value]) => ({
          label: labelShort[label] || label,
          value,
          valueLabel: `${value}`
        }));
        const agentsCounts = dashboardData.overallAdoption.aiAgents;
        const agentData = Object.entries(agentsCounts.counts).map(([label, value]) => ({
          label: labelShort[label] || label,
          value,
          valueLabel: `${value}`
        }));
        return (
          <div>
            <KeyInsights title="Key Findings" items={adoptionInsights} />
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            {adoptionPieData.map((pie) => (
              <PieChart key={pie.title} title={pie.title} data={pie.data} size={160} />
            ))}
          </div>
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
              <div style={{ flex: 1, width: 'calc(50% - 10px)', minWidth: '400px', overflow: 'hidden' }}>
                <HorizontalBarChart
                  title="Top GenAI Tools • Ever Used"
                  data={toolBarData}
                  colorScale={(item) => (item.label === 'ChatGPT' ? palette.accent : palette.accentAlt)}
                  footnote={`n = ${dashboardData.respondents.totalRespondents} respondents`}
                />
              </div>
              <div style={{ flex: 1, width: 'calc(50% - 10px)', minWidth: '400px', overflow: 'hidden' }}>
                <AutoBarChart
                  title="% of Users Still Using"
                  data={toolBarCurrentPct}
                  colorScale={() => palette.accentAlt}
                  unit="percent"
                  footnote={`n = ${dashboardData.respondents.totalRespondents} respondents`}
                />
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
              {topToolBreakdown.map((item) => (
                <PieChart key={item.title} title={item.title} data={item.data} size={160} legendPosition="bottom" />
              ))}
            </div>
            <div style={{ overflow: 'hidden' }}>
              <AutoBarChart
                title="GenAI Activities • Current or Past Users"
                data={activitiesData}
                colorScale={() => palette.accent}
                footnote={`n = ${activitiesTotal} respondents (multiple selections allowed)`}
              />
            </div>
            <StackedColumnChart
              title="Concerns about GenAI"
              series={dashboardData.overallAdoption.concerns.map((row) => ({ label: truncateTitle(row.label), total: row.total, segments: Object.entries(row.percentages).map(([k,v])=>({label:k, percent:v})) }))}
              colorPalette={likertColors}
              segmentOrder={['Agree','Neutral','Disagree']}
              footnote={`Regardless of your answers above, what is your perception of the drawbacks of the use of GenAi tools?\n\nn = ${dashboardData.overallAdoption.concerns[0]?.total || 0} respondents`}
            />
            <StackedColumnChart
              title="Perceived Benefits of GenAI"
              series={dashboardData.overallAdoption.benefits.map((row) => ({ label: truncateTitle(row.label), total: row.total, segments: Object.entries(row.percentages).map(([k,v])=>({label:k, percent:v})) }))}
              colorPalette={likertColors}
              segmentOrder={['Agree','Neutral','Disagree']}
              footnote={`Regardless of your answers above, what is your perception of the benefits of the use of GenAi tools?\n\nn = ${dashboardData.overallAdoption.benefits[0]?.total || 0} respondents`}
            />
            <StackedColumnChart
              title="Appetite for Meta AI Surfaces"
              series={metaSeries}
              colorPalette={metaColors}
              segmentOrder={['Yes','Maybe','No']}
              footnote="Do you plan to use Meta AI tools in the near future? Both for work and/or personal use!\n\nPercentages per bar sum to 100%"
            />
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
              <div style={{ flex: 1, minWidth: '400px' }}>
                <VerticalBarChart
                  title="AI Reasoning Models Adoption"
                  data={reasoningData}
                  colorScale={() => palette.accent}
                  footnote={`n = ${reasoningCounts.total} respondents • Legend: Not yet, Yes, Thinking, Yes (past), Never`}
                  columns={5}
                />
              </div>
              <div style={{ flex: 1, minWidth: '400px' }}>
                <VerticalBarChart
                  title="AI Agents Adoption"
                  data={agentData}
                  colorScale={() => palette.accentAlt}
                  footnote={`n = ${agentsCounts.total} respondents • Legend: Not yet, Yes, Thinking, Yes (past), Never`}
                  columns={5}
                />
              </div>
            </div>
          </div>
        );
      }
      case 'academic':
        return (
          <div>
            <KeyInsights title="Key Findings" items={academicInsights} />
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
              <div style={{ flex: 1, minWidth: '400px' }}>
                <StackedColumnChart
                  title="Teaching Applications • Attitude"
                  series={dashboardData.academicStaff.attitudes.map((row) => ({
                    label: truncateTitle(row.label),
                    total: row.total,
                    segments: Object.entries(row.counts).map(([key, value]) => ({
                      label: key,
                      percent: row.total ? (value / row.total) * 100 : 0
                    }))
                  }))}
                  colorPalette={attitudeColors}
                  segmentOrder={['Yes', 'No opinion', 'Never']}
                  footnote={`Should we as an organisation allow the use of GenAi tools for TEACHING purposes in the following applications?\n\nn = ${dashboardData.academicStaff.attitudes[0]?.total || 0} academic respondents `}
                />
              </div>
              <div style={{ flex: 1, minWidth: '400px' }}>
                <StackedColumnChart
                  title="Teaching Applications • Behaviour"
                  series={dashboardData.academicStaff.behaviours.map((row) => ({
                    label: truncateTitle(row.label),
                    total: row.total,
                    segments: Object.entries(row.counts).map(([key, value]) => ({
                      label: key,
                      percent: row.total ? (value / row.total) * 100 : 0
                    }))
                  }))}
                  colorPalette={adoptionColors}
                  segmentOrder={['Yes, I do', 'Yes, but no longer', 'I am thinking about it', 'No, not yet', 'No & I will never (on principle)']}
                  footnote={`Have you ALREADY used GenAi tools IN YOUR TEACHING for the following applications?\n\nn = ${dashboardData.academicStaff.behaviours[0]?.total || 0} academic respondents `}
                />
              </div>
            </div>
            <StackedColumnChart
              title="Academic Concerns"
              series={dashboardData.academicStaff.concerns.map((row) => ({ label: truncateTitle(row.label), total: row.total, segments: Object.entries(row.percentages).map(([k,v])=>({label:k, percent:v})) }))}
              colorPalette={likertColors}
              segmentOrder={['Agree','Neutral','Disagree']}
              footnote={`Regardless of your answers above, what is your perception of the drawbacks of the use of GenAi tools for TEACHING purposes?\n\nn = ${dashboardData.academicStaff.concerns[0]?.total || 0} respondents`}
            />
            <StackedColumnChart
              title="Academic Benefits"
              series={dashboardData.academicStaff.benefits.map((row) => ({ label: truncateTitle(row.label), total: row.total, segments: Object.entries(row.percentages).map(([k,v])=>({label:k, percent:v})) }))}
              colorPalette={likertColors}
              segmentOrder={['Agree','Neutral','Disagree']}
              footnote={`Regardless of your answers above, what is your perception of the benefits of the use of GenAi tools for TEACHING purposes?\n\nn = ${dashboardData.academicStaff.benefits[0]?.total || 0} respondents`}
            />
            <HorizontalBarChart
              title="Tools Supporting Teaching"
              data={dashboardData.academicStaff.toolTypes.map((item) => ({
                label: truncateTitle(item.label),
                value: item.used,
                context: ``
              }))}
              colorScale={() => palette.accent}
              footnote={`n ≈ ${dashboardData.academicStaff.attitudes[0]?.total || 0} academics (multiple selections allowed)`}
            />
            <div style={{ display: 'flex', gap: '18px', flexWrap: 'wrap' }}>
              <PieChart
                title="AI Code Editor Usage"
                data={Object.entries(dashboardData.academicStaff.codeEditors.counts).map(([label, value], idx) => ({
                  label,
                  value,
                  color: piePalette[idx % piePalette.length]
                }))}
                size={150}
              />
              <PieChart
                title="Disclosure to Students"
                data={Object.entries(dashboardData.academicStaff.disclosure.counts).map(([label, value], idx) => ({
                  label,
                  value,
                  color: piePalette[idx % piePalette.length]
                }))}
                size={150}
              />
              <PieChart
                title="Confidence Levels"
                data={Object.entries(dashboardData.academicStaff.confidence.counts).map(([label, value], idx) => ({
                  label,
                  value,
                  color: piePalette[idx % piePalette.length]
                }))}
                size={150}
              />
            </div>
          </div>
        );
      case 'students':
        const studentAttitudeSeries = dashboardData.students.attitudes.map((item) => ({
          label: truncateTitle(item.label),
          total: item.total,
          segments: Object.entries(item.percentages).map(([label, percent]) => ({ label, percent }))
        }));
        const studentBehaviourSeries = dashboardData.students.behaviours.map((item) => ({
          label: truncateTitle(item.label),
          total: item.total,
          segments: Object.entries(item.percentages).map(([label, percent]) => ({ label, percent }))
        }));
        const misuseTotal = dashboardData.students.abuseConcerns[0]?.total || 0;
        return (
          <div>
            <KeyInsights title="Key Findings" items={studentInsights} />
            <StackedColumnChart
              title="Student Applications"
              series={studentAttitudeSeries}
              colorPalette={attitudeColors}
              segmentOrder={['Yes','No opinion','Never']}
              footnote={`Should we as an organisation allow STUDENTS to use GenAi tools for LEARNING purposes in the following applications?\n\nn = ${dashboardData.students.attitudes[0]?.total || 0} academic respondents `}
            />
            <StackedColumnChart
              title="Observed Student Usage (Behaviour)"
              series={studentBehaviourSeries}
              colorPalette={{
                'Yes': '#38bdf8',
                'I don\'t know': '#facc15',
                'No': '#f87171'
              }}
              segmentOrder={['Yes','I don\'t know','No']}
              footnote={`Are your STUDENTS ALREADY using GenAi tools for LEARNING in the following applications?\n\nn = ${dashboardData.students.behaviours[0]?.total || 0} academic respondents `}
            />
            <StackedColumnChart
              title="Academic Concerns for Student Usage"
              series={dashboardData.students.concerns.map((row) => ({
                label: truncateTitle(row.label),
                total: row.total,
                segments: Object.entries(row.counts).map(([key, value]) => ({
                  label: key,
                  percent: row.total ? (value / row.total) * 100 : 0
                }))
              }))}
              colorPalette={likertColors}
              segmentOrder={['Agree','Neutral','Disagree']}
              footnote={`Regardless of your answers above, what is your perception of the drawbacks of STUDENTS using GenAi tools for LEARNING purposes?\n\nn = ${dashboardData.students.concerns[0]?.total || 0} respondents`}
            />
            <StackedColumnChart
              title="Academic benefits"
              series={dashboardData.students.benefits.map((row) => ({
                label: truncateTitle(row.label),
                total: row.total,
                segments: Object.entries(row.counts).map(([key, value]) => ({
                  label: key,
                  percent: row.total ? (value / row.total) * 100 : 0
                }))
              }))}
              colorPalette={likertColors}
              segmentOrder={['Agree','Neutral','Disagree']}
              footnote={`Regardless of your answers above, what is your perception of the benefits of STUDENTS using GenAi tools for LEARNING purposes?\n\nn = ${dashboardData.students.benefits[0]?.total || 0} respondents`}
            />
            <AutoBarChart
              title="Tools Supporting Students"
              data={dashboardData.students.tools.map((item) => ({ label: truncateTitle(item.label), value: item.count }))}
              colorScale={() => palette.accent}
              footnote="Counts reflect number of academics reporting student use; multiple tools per respondent allowed"
            />
            <StackedColumnChart
              title="Student Misuse Concerns"
              series={dashboardData.students.abuseConcerns.map((row) => ({
                label: truncateTitle(row.label),
                total: row.total,
                segments: Object.entries(row.counts).map(([key, value]) => ({
                  label: key,
                  percent: row.total ? (value / row.total) * 100 : 0
                }))
              }))}
              colorPalette={likertColors}
              segmentOrder={['Agree','Neutral','Disagree']}
              footnote={`What is your level of concern about possible GenAi misuse by students in the following areas?\n\nn = ${misuseTotal} respondents`}
            />
            <StackedColumnChart
              title="Student Abuse Suspicions"
              series={dashboardData.students.abuseTypes.map((item) => ({
                label: truncateTitle(item.label),
                total: item.count,
                segments: [{
                  label: 'count',
                  percent: 100
                }]
              }))}
              colorPalette={{ 'count': palette.accentAlt }}
              footnote="What forms of misuse have you suspected or detected in student work?\n\nCounts indicate academics suspecting each misuse (multiple selections allowed)"
            />
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
              {(() => {
                const agentCounts = dashboardData.students.agents.counts;
                const totalA = dashboardData.students.agents.total;
                const agentSeries = [{
                  label: 'AI Agent Adoption',
                  total: totalA,
                  segments: Object.entries(agentCounts).map(([k,v]) => ({ label: k, percent: totalA ? (v/totalA)*100 : 0 }))
                }];
                const agentPalette = { 'Yes': '#22c55e', "I don't know": '#f59e0b', 'No': '#ef4444' };
                return (
                  <div style={{ flex: 1, minWidth: '320px' }}>
                    <StackedColumnChart title="AI Agent Adoption" series={agentSeries} colorPalette={agentPalette} segmentOrder={['Yes',"I don't know",'No']} footnote="Are your STUDENTS using AI agents for academic work?" />
                  </div>
                );
              })()}
              {(() => {
                const aCounts = dashboardData.students.assessment.counts;
                const total = dashboardData.students.assessment.total;
                const aSeries = [{
                  label: 'Assessment Redesign',
                  total,
                  segments: Object.entries(aCounts).map(([k,v]) => ({ label: k, percent: total ? (v/total)*100 : 0 }))
                }];
                const paletteAssess = { 'Yes, I do': '#22c55e', 'I am thinking about it': '#0ea5e9', 'No, not yet': '#f59e0b', 'Not applicable': '#a855f7', 'No & I will never (on principle)': '#ef4444' };
                return (
                  <div style={{ flex: 1, minWidth: '320px' }}>
                    <StackedColumnChart title="Assessment Redesign" series={aSeries} colorPalette={paletteAssess} segmentOrder={['Yes, I do','I am thinking about it','No, not yet','Not applicable','No & I will never (on principle)']} footnote="Have you adapted your assessment design to mitigate for GenAi use by STUDENTS?" />
                  </div>
                );
              })()}
            </div>
          </div>
        );
      case 'nonAcademic':
        return (
          <div>
            <KeyInsights title="Key Findings" items={nonAcademicInsights} />
            <StackedColumnChart
              title="Operational Applications • Attitude"
              series={dashboardData.nonAcademicStaff.attitudes.map((row) => ({
                label: truncateTitle(row.label),
                total: row.total,
                segments: Object.entries(row.counts).map(([key, value]) => ({
                  label: key,
                  percent: row.total ? (value / row.total) * 100 : 0
                }))
              }))}
              colorPalette={attitudeColors}
              segmentOrder={['Yes', 'No opinion', 'Never']}
              footnote={`Should we as an organisation allow the use of GenAi tools for ADMINISTRATION purposes in the following departments?\n\nn = ${dashboardData.nonAcademicStaff.attitudes[0]?.total || 0} non-academic respondents `}
            />
            <StackedColumnChart
              title="Operational Applications • Behaviour"
              series={dashboardData.nonAcademicStaff.behaviours.map((row) => ({
                label: truncateTitle(row.label),
                total: row.total,
                segments: Object.entries(row.counts).map(([key, value]) => ({
                  label: key,
                  percent: row.total ? (value / row.total) * 100 : 0
                }))
              }))}
              colorPalette={adoptionColors}
              segmentOrder={['Yes, I do', 'Yes, but no longer', 'I am thinking about it', 'No, not yet', 'No & I will never (on principle)']}
              footnote={`Have you ALREADY used GenAi tools IN YOUR CURRENT JOB for the following applications?\n\nn = ${dashboardData.nonAcademicStaff.behaviours[0]?.total || 0} non-academic respondents `}
            />
            <StackedColumnChart
              title="Operational Concerns"
              series={dashboardData.nonAcademicStaff.concerns.map((row) => ({
                label: truncateTitle(row.label),
                total: row.total,
                segments: Object.entries(row.counts).map(([key, value]) => ({
                  label: key,
                  percent: row.total ? (value / row.total) * 100 : 0
                }))
              }))}
              colorPalette={likertColors}
              segmentOrder={['Agree','Neutral','Disagree']}
              footnote={`What is your perception of the drawbacks of the use of GenAi tools for ADMINISTRATION purposes?\n\nn = ${dashboardData.nonAcademicStaff.concerns[0]?.total || 0} respondents`}
            />
            <StackedColumnChart
              title="Operational Benefits"
              series={dashboardData.nonAcademicStaff.benefits.map((row) => ({
                label: truncateTitle(row.label),
                total: row.total,
                segments: Object.entries(row.counts).map(([key, value]) => ({
                  label: key,
                  percent: row.total ? (value / row.total) * 100 : 0
                }))
              }))}
              colorPalette={likertColors}
              segmentOrder={['Agree','Neutral','Disagree']}
              footnote={`What is your perception of the benefits of the use of GenAi tools for ADMINISTRATION purposes?\n\nn = ${dashboardData.nonAcademicStaff.benefits[0]?.total || 0} respondents`}
            />
            <AutoBarChart
              title="Tools Supporting Administration"
              data={dashboardData.nonAcademicStaff.toolTypes.map((item) => ({
                label: truncateTitle(item.label),
                value: item.used,
                context: ``
              }))}
              colorScale={() => palette.accent}
              footnote={`What tools have you used for these applications mentioned in the previous question?\n\nn ≈ ${dashboardData.nonAcademicStaff.behaviours[0]?.total || 0} staff (multiple selections allowed)`}
              footnoteUnderTitle={true}
            />
          </div>
        );
      case 'comparative': {
        const itBars = dashboardData.comparative.itProficiency.byLevel.map((item) => ({
          label: item.level,
          value: item.adoptionRate,
          context: `${item.adopters}/${item.total}`
        }));
        const confidenceStats = dashboardData.comparative.confidenceTeaching.byLevel;
        const confidenceBars = Object.entries(confidenceStats).map(([label, stats]) => ({
          label,
          value: stats.averageUsage,
          context: `${stats.respondents} respondents`
        }));
        const brandRates = dashboardData.comparative.brandAdoption.rates.map((item) => ({
          label: item.brand,
          value: item.adoptionRate,
          context: `${item.currentYes}/${item.total}`
        }));
        const groupData = dashboardData.comparative.groupAdoption;
        const groupBars = [
          { label: 'Academic Staff', value: groupData.academic.rate, context: `${groupData.academic.yes}/${groupData.academic.yes + groupData.academic.other}` },
          { label: 'Non-Academic Staff', value: groupData.nonAcademic.rate, context: `${groupData.nonAcademic.yes}/${groupData.nonAcademic.yes + groupData.nonAcademic.other}` }
        ];
        return (
          <div>
            <KeyInsights title="Key Insights" items={comparativeInsights} />
            <HorizontalBarChart
              title="Work Adoption by IT Proficiency"
              data={itBars}
              unit="percent"
              colorScale={(item) => (item.value >= 80 ? palette.positive : palette.accent)}
            />
            <HorizontalBarChart
              title="Average Teaching Use-Cases by Confidence Level"
              data={confidenceBars}
              unit="count"
              colorScale={(item) => (item.label.includes('confident') ? palette.positive : palette.accentAlt)}
            />
            <HorizontalBarChart
              title="Brand-level Work Adoption"
              data={brandRates}
              unit="percent"
              colorScale={() => palette.accent}
            />
            <HorizontalBarChart
              title="Work Adoption by Role Group"
              data={groupBars}
              unit="percent"
              colorScale={(item) => (item.label.startsWith('Academic') ? palette.accent : palette.accentAlt)}
            />
            <InsightList
              title="Statistical Notes"
              items={[
                `IT proficiency correlation overall r = ${dashboardData.comparative.itProficiency.correlation.overall.r} (n = ${dashboardData.comparative.itProficiency.correlation.overall.n}), indicating modest positive association.`,
                `Confidence vs teaching usage r = ${dashboardData.comparative.confidenceTeaching.correlation.r} with 95% CI ${dashboardData.comparative.confidenceTeaching.correlation.ci95.join(' to ')}.`,
                `Brand adoption chi-square = ${dashboardData.comparative.brandAdoption.chiSquare.chiSquare} (df=${dashboardData.comparative.brandAdoption.chiSquare.df}), effect size Cramér’s V = ${dashboardData.comparative.brandAdoption.effectSize}.`,
                `Role-group adoption difference chi-square = ${dashboardData.comparative.groupAdoption.chiSquare.chiSquare} (df=${dashboardData.comparative.groupAdoption.chiSquare.df}), effect size Cramér’s V = ${dashboardData.comparative.groupAdoption.effectSize}.`
              ]}
            />
          </div>
        );
      }
      case 'ideas':
        return (
          <div>
            <KeyInsights title="Key Insights" items={[...ideaInsights.uses.summary, ...ideaInsights.jobIdeas.summary, ...ideaInsights.agentIdeas.summary]} />
            <KeyInsights title="Supported Uses (Q7.1)" items={ideaInsights.uses.summary.concat(['Highlighted ideas:', ...ideaInsights.uses.highlights])} variant="highlight" />
            <KeyInsights title="Ideas to Ease Work (Q7.2)" items={ideaInsights.jobIdeas.summary.concat(['Highlighted ideas:', ...ideaInsights.jobIdeas.highlights])} variant="alt" />
            <KeyInsights title="AI Agent Concepts (Q7.3)" items={ideaInsights.agentIdeas.summary.concat(['Highlighted ideas:', ...ideaInsights.agentIdeas.highlights])} variant="alt" />
          </div>
        );
      case 'assistance':
        return (
          <div>
            <KeyInsights title="Key Insights" items={assistanceInsights} />
            <AssistanceChart data={dashboardData.assistance.counts} />
          </div>
        );
      case 'recommendations':
        return (
          <div>
            <RecommendationGroup horizon="Short-term (0–3 months)" items={recommendations.short} />
            <RecommendationGroup horizon="Medium-term (3–9 months)" items={recommendations.medium} />
            <RecommendationGroup horizon="Long-term (9–18 months)" items={recommendations.long} />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: palette.background,
        padding: '32px',
        fontFamily: '"Inter", "Segoe UI", sans-serif',
        color: palette.text
      }}
    >
      <header
        style={{
          marginBottom: '32px',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
          justifyContent: 'space-between',
          alignItems: 'flex-start'
        }}
      >
        <div style={{ maxWidth: '780px' }}>
          <div style={{ color: palette.accent, letterSpacing: '0.12em', fontSize: '12px', textTransform: 'uppercase', marginBottom: '8px' }}>
            Third Analysis of the IIE GenAI Survey Data
          </div>
          <h1 style={{ fontSize: '36px', fontWeight: 700, marginBottom: '12px' }}>GenAI Strategy Intelligence Dashboard</h1>
          <p style={{ ...textStyle, color: palette.textMuted }}>
            Interactive executive dashboard for The Institute of Independent Education synthesising 331 staff responses to steer GenAI strategy and implementation decisions.
          </p>
        </div>
        <a
          href="details.html"
          style={linkButtonStyle}
          rel="noopener noreferrer"
        >
          <span>Open Data Explorer</span>
          <span aria-hidden="true" style={{ fontSize: '20px', lineHeight: 1 }}>↗</span>
        </a>
      </header>
      <TabNavigation activeTab={activeTab} onSelect={setActiveTab} />
      {renderTab()}
    </div>
  );
}

export default IieDashboard;
