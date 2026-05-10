# GitHub Labels and Issue Taxonomy

AI-Agent-Cloud uses structured labels to keep issues, pull requests, and roadmap items easy to discover.

## Primary labels

- `bug` — Reproducible issues, defects, or broken functionality.
- `enhancement` — Improvements, feature work, and product upgrades.
- `good first issue` — Low-risk issues ideal for new contributors.
- `help wanted` — Community support issues or areas where maintainers want assistance.
- `documentation` — Docs updates, guides, pages, or walkthrough improvements.
- `frontend` — UI, dashboard, styling, and Next.js frontend work.
- `backend` — FastAPI, API design, services, and backend logic.
- `agents` — Agent modules, orchestration workflows, and multi-agent integration.
- `observability` — Logging, tracing, metrics, monitoring, and analytics.

## How labels are applied

- New pull requests and issues are labeled automatically using file and path detection.
- Frontend changes are tagged with `frontend`; backend changes with `backend`.
- Documentation updates are tagged with `documentation`.
- Agent and orchestration work use `agents`, while telemetry work uses `observability`.

## Triaging labels

Maintainers should use labels to reflect scope, priority, and status:

- `bug` + `help wanted` for community-driven fixes.
- `enhancement` + `good first issue` for onboarding-friendly feature work.
- `frontend` + `enhancement` for UX polish initiatives.
- `backend` + `performance` for backend stability improvements.

## Best practices

- Keep issue titles short and descriptive.
- Add a label as soon as an issue or PR is created.
- Use `good first issue` for clear onboarding tasks with easy setup.
- Use `help wanted` when the issue is ready for contributor collaboration.
