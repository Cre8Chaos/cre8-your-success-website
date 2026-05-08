#!/usr/bin/env bash
# Post-deploy health check for cre8yoursuccess.com
# Classifies failures as simple (EA handles) or complex (EA escalates to Michael)
set -uo pipefail

SITE_URL="${SITE_URL:-https://cre8yoursuccess.com}"
SLACK_BOT_TOKEN="${SLACK_BOT_TOKEN:-}"
SLACK_ALERT_CHANNEL_ID="${SLACK_ALERT_CHANNEL_ID:-}"
GITHUB_SERVER_URL="${GITHUB_SERVER_URL:-}"
GITHUB_REPOSITORY="${GITHUB_REPOSITORY:-}"
GITHUB_RUN_ID="${GITHUB_RUN_ID:-}"

FAILURES=()

check_url() {
  local url="$1"
  local expect_text="$2"
  local label="$3"

  http_code=$(curl -s -o /tmp/hc_body.html -w "%{http_code}" --max-time 20 "$url" 2>/dev/null || echo "000")

  if [[ "$http_code" != "200" ]]; then
    FAILURES+=("$label: HTTP $http_code (expected 200)")
    echo "  ✗ $label — HTTP $http_code"
    return 1
  fi

  if [[ -n "$expect_text" ]] && ! grep -q "$expect_text" /tmp/hc_body.html 2>/dev/null; then
    FAILURES+=("$label: returned 200 but content '$expect_text' not found")
    echo "  ✗ $label — content check failed"
    return 1
  fi

  echo "  ✓ $label"
}

echo "Health check: $SITE_URL"
echo "─────────────────────────────────────"

check_url "$SITE_URL/"                          "Cre8 Your Success"   "Homepage"           || true
check_url "$SITE_URL/healthcare.html"           "Healthcare"          "Healthcare page"    || true
check_url "$SITE_URL/lead-generation.html"      "Lead Generation"     "Lead Gen page"      || true
check_url "$SITE_URL/voice-agents.html"         "Voice Agent"         "Voice Agents page"  || true
check_url "$SITE_URL/workflow-automation.html"  "Workflow Automation" "Workflow page"      || true
check_url "$SITE_URL/styles.css"                "site-nav"            "Styles CSS"         || true
check_url "$SITE_URL/assets/logo-horizontal.png" ""                   "Logo asset"         || true

echo "─────────────────────────────────────"

if [[ ${#FAILURES[@]} -eq 0 ]]; then
  echo "All checks passed."
  exit 0
fi

echo "FAILURES (${#FAILURES[@]}):"
for f in "${FAILURES[@]}"; do echo "  - $f"; done

# Classify: simple vs complex
# Simple = all failures are 404s and count is small (propagation delay or single missing file)
# Complex = content mismatches, 5xx errors, or widespread failures
ALL_404=true
for f in "${FAILURES[@]}"; do
  if [[ "$f" != *"HTTP 404"* ]]; then
    ALL_404=false
    break
  fi
done

ACTIONS_URL=""
if [[ -n "$GITHUB_SERVER_URL" && -n "$GITHUB_REPOSITORY" && -n "$GITHUB_RUN_ID" ]]; then
  ACTIONS_URL="$GITHUB_SERVER_URL/$GITHUB_REPOSITORY/actions/runs/$GITHUB_RUN_ID"
fi

FAILURE_LIST=""
for f in "${FAILURES[@]}"; do
  FAILURE_LIST="$FAILURE_LIST• $f\n"
done

if [[ "$ALL_404" == "true" && ${#FAILURES[@]} -le 2 ]]; then
  SEVERITY="simple"
  MESSAGE="🟡 *Site health check — simple issue* on \`cre8yoursuccess.com\`\n${#FAILURES[@]} page(s) returning 404 after deploy. Likely a propagation delay or missing file.\n\n@CRE8-EA please verify cre8yoursuccess.com is up and retrigger deploy if still down after 5 minutes.\n\nFailed checks:\n${FAILURE_LIST}"
else
  SEVERITY="complex"
  ACTIONS_LINE=""
  if [[ -n "$ACTIONS_URL" ]]; then
    ACTIONS_LINE="\nActions run: $ACTIONS_URL"
  fi
  MESSAGE="🔴 *Site health check — CRITICAL* on \`cre8yoursuccess.com\`\n${#FAILURES[@]} failure(s) detected after deploy. Requires investigation.\n\n@CRE8-EA please escalate to Michael.\n\nFailed checks:\n${FAILURE_LIST}${ACTIONS_LINE}"
fi

echo "Severity: $SEVERITY"

if [[ -n "$SLACK_BOT_TOKEN" && -n "$SLACK_ALERT_CHANNEL_ID" ]]; then
  curl -s -X POST "https://slack.com/api/chat.postMessage" \
    -H "Authorization: Bearer $SLACK_BOT_TOKEN" \
    -H "Content-Type: application/json" \
    -d "{\"channel\": \"$SLACK_ALERT_CHANNEL_ID\", \"text\": \"$(echo -e "$MESSAGE" | sed 's/"/\\"/g')\"}" \
    > /dev/null
  echo "Slack alert posted."
else
  echo "SLACK_BOT_TOKEN or SLACK_ALERT_CHANNEL_ID not set — skipping Slack notification."
fi

exit 1
