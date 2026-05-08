# Claude Configuration — cre8-your-success-website

## Project Identity
Static website for Cre8 Your Success (cre8yoursuccess.com).  
No build step. CDN-loaded React 18 + Babel for JSX.  
GitHub repo: `Cre8Chaos/cre8-your-success-website`  
Netlify site ID: `ded9959c-8999-484f-b6c0-80e195671056`

## File Map

| File | Purpose |
|------|---------|
| `index.html` | Homepage — loads `tweaks-panel.jsx` + `home-components.jsx` |
| `healthcare.html` | Healthcare vertical — loads `components.jsx` |
| `lead-generation.html` | Lead gen vertical — loads `components.jsx` |
| `voice-agents.html` | Voice agents vertical — loads `components.jsx` |
| `workflow-automation.html` | Workflow automation vertical — loads `components.jsx` |
| `styles.css` | Global styles (nav, layout, typography, brand system) |
| `subpages.css` | Service page hero + layout styles |
| `home-components.jsx` | All homepage React components (Nav, Hero, sections, Footer) |
| `components.jsx` | Shared components used by all service subpages |
| `components-bundle.jsx` | Combined bundle — keep in sync with `components.jsx` |
| `tweaks-panel.jsx` | Dev-mode visual tweaks panel (Babel/React at runtime) |
| `assets/` | Static media: logos (PNG/SVG), hero video, service demos |

## Deploy Pipeline (READ THIS BEFORE ANY DEPLOY)

```
Push to main → GitHub Actions (deploy.yml)
  → deploy job: nwtgck/actions-netlify → Netlify production
  → health-check job: scripts/health-check.sh
    → All pages OK: 🟢 Slack notification
    → Simple failure (≤2 pages 404): 🟡 @CRE8-EA in Slack
    → Complex failure: 🔴 @CRE8-EA CRITICAL alert in Slack
```

**NEVER run `netlify deploy` from the CLI.** CLI deploys overwrite the GitHub-connected deploy and can push an empty deploy (causing site-wide 404). Lesson learned 2026-05-08. Always use GitHub Actions.

## WAT Framework

This project uses the WAT architecture (inherited from Cre8 Your Success):

- **Workflows** — `tasks/todo.md` + `scripts/` define what to do and how
- **Agent** — Claude coordinates, plans, and verifies changes
- **Tools** — `scripts/health-check.sh` is the deterministic execution layer

How to operate:
1. Look for existing tools/scripts first before adding new ones
2. Learn and adapt when things fail — read errors, fix scripts, document in `tasks/lessons.md`
3. Keep `tasks/todo.md` current — it's the active work log

## Workflow Orchestration

### Plan First
- Enter plan mode for ANY non-trivial task (3+ steps or architectural decisions)
- If something goes sideways, STOP and re-plan immediately

### Subagent Strategy
- Use subagents to keep main context clean
- Offload research, exploration, and parallel analysis to subagents
- One task per subagent for focused execution

### Self-Improvement Loop
- After ANY correction: update `tasks/lessons.md` with the pattern
- Write rules that prevent the same mistake
- Review lessons at session start

### Verification Before Done
- Never mark a task complete without proving it works
- For deploys: run `scripts/health-check.sh` or confirm GitHub Actions passed
- Ask: "Would a staff engineer approve this?"

### Demand Elegance
- For non-trivial changes: pause and ask "is there a more elegant way?"
- Skip this for simple, obvious fixes — don't over-engineer

### Autonomous Bug Fixing
- When given a bug report: just fix it
- Point at logs, errors — then resolve them

## Task Management

1. **Plan First** — write plan to `tasks/todo.md` with checkable items
2. **Verify Plan** — check in before starting implementation
3. **Track Progress** — mark items complete as you go
4. **Explain Changes** — high-level summary at each step
5. **Document Results** — add review section to `tasks/todo.md`
6. **Capture Lessons** — update `tasks/lessons.md` after corrections

## Core Principles

- **Simplicity First** — this is a static site. Resist any urge to add build steps, frameworks, or tooling that isn't necessary.
- **No Laziness** — find root causes. No temporary fixes. Senior developer standards.
- **Minimal Impact** — changes should only touch what's necessary. Avoid introducing bugs.

## Output Routing

| Type | Destination |
|------|-------------|
| Analysis, research | `/Users/michaelgrapentin/Projects/claude-outputs/analyses/` |
| Docs, reports | `/Users/michaelgrapentin/Projects/claude-outputs/documents/` |
| Site changes | This repo — committed and pushed to trigger Actions pipeline |

## GitHub Secrets Required

These must be set in the `Cre8Chaos/cre8-your-success-website` repo settings before the Actions pipeline is fully operational:

| Secret | Source |
|--------|--------|
| `NETLIFY_AUTH_TOKEN` | Netlify → User Settings → Applications → Personal Access Token |
| `SLACK_BOT_TOKEN` | Same `xoxb-...` token the Cre8 EA uses (from Doppler) |
| `SLACK_DEPLOY_CHANNEL_ID` | Slack channel ID for deploy notifications |
| `SLACK_ALERT_CHANNEL_ID` | Slack channel ID where the EA bot is present |

## Notion SOP

Maintain entry in SOPs & Build Library:  
https://www.notion.so/5357247630a24e3c897873bd573d2a4c?v=e0f7a58a7c704dcebe0249e7578c58f5

SOP Type: `VS Code Project`  
Area: Cre8 Your Success  
Tool Stack: HTML, CSS, React (CDN), Netlify, GitHub Actions, Slack
