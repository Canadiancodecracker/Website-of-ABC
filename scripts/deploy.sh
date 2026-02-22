#!/usr/bin/env bash
# Deploy to Vercel (preview by default).
# Fix for "The specified token is not valid": use VERCEL_TOKEN or run `vercel login`.

set -e
cd "$(dirname "$0")/.."
# Load token from .env.local or .env so you can set VERCEL_TOKEN without exporting
for f in .env.local .env; do
  [ -f "$f" ] && set -a && . ./"$f" && set +a && break
done
DEPLOY_DIR="."
PROD=""

for arg in "$@"; do
  case "$arg" in
    --prod) PROD="--prod" ;;
    *)      DEPLOY_DIR="$arg" ;;
  esac
done

if [ -n "$VERCEL_TOKEN" ]; then
  echo "Deploying to Vercel (using VERCEL_TOKEN)..."
  exec vercel deploy "$DEPLOY_DIR" -y $PROD --token="$VERCEL_TOKEN"
fi

if ! command -v vercel >/dev/null 2>&1; then
  echo "Error: Vercel CLI not found. Install with: npm i -g vercel" >&2
  exit 1
fi

echo "Deploying to Vercel (using logged-in user)..."
if vercel deploy "$DEPLOY_DIR" -y $PROD; then
  exit 0
fi

echo "" >&2
echo "--- Vercel needs authentication ---" >&2
echo "  1. Log in (one-time):  vercel login" >&2
echo "  2. Or use a token:     VERCEL_TOKEN=<token> npm run deploy" >&2
echo "     Create a token at:  https://vercel.com/account/tokens" >&2
echo "Then run:  npm run deploy" >&2
exit 1
