#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

printf '\n▶️  Regenerating dashboard dataset...\n'
python3 compute_dashboard_data.py

if [ ! -f package.json ]; then
  printf '\n🛠️  Initialising npm workspace...\n'
  cat > package.json <<'JSON'
{
  "name": "iie-genai-dashboard",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "start": "bash sh/update_all_insights_and_data.sh"
  }
}
JSON
fi

if [ ! -d node_modules/react ] || [ ! -d node_modules/react-dom ] || [ ! -d node_modules/esbuild ]; then
  printf '\n⬇️  Installing local runtime dependencies (react, react-dom, esbuild)...\n'
  npm install --silent react@18.3.1 react-dom@18.3.1 esbuild@0.21.5
fi

OUT_JS="$ROOT_DIR/app.js"

printf '\n🚀  Launching esbuild dev server on http://localhost:8000 (Ctrl+C to stop)\n'
exec npx esbuild main.jsx \
  --bundle \
  --jsx=automatic \
  --loader:.json=json \
  --define:process.env.NODE_ENV='"development"' \
  --outfile="$OUT_JS" \
  --servedir="$ROOT_DIR" \
  --target=es2018 \
  --log-level=info
