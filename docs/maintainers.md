# Maintainer Guide

This guide defines how AI-Agent-Cloud is reviewed, released, and maintained by the core team.

## Review workflow

1. Triage new issues and PRs within 48 hours.
2. Label issues and PRs using the label taxonomy in `docs/labels.md`.
3. Assign reviewers based on area ownership:
   - Frontend: `frontend` and UI pages
   - Backend: `backend` and API services
   - Agents: `agents` and orchestration code
   - Docs: `documentation` and GitHub Pages content
4. Review PRs for code quality, tests, documentation, and alignment with the platform vision.
5. Use PR checks to validate builds, formatting, and automated workflows.

## Release process

1. Prepare a release candidate milestone in GitHub.
2. Ensure all target issues are closed or captured for the next release.
3. Update `CHANGELOG.md` with release notes and highlights.
4. Create a draft GitHub release with the version tag.
5. Publish release notes and announce the release in the repository.

## Contribution management

- Encourage contributors to use issue templates and follow `CONTRIBUTING.md`.
- Support new contributors with `good first issue` and `help wanted` labels.
- Keep contributions small and reviewable.
- Merge PRs only after passing CI and review sign-off.

## Roadmap planning

- Maintain a prioritized roadmap in `docs/roadmap.md`.
- Align milestones with community goals, ecosystem growth, and production readiness.
- Track releases, feature areas, and enterprise readiness in documentation.
- Review roadmap priorities monthly.

## Issue triage

- Validate reproducibility for bugs.
- Assess impact and scope for feature requests.
- Route security issues via `SECURITY.md` and maintainers only.
- Convert unclear issues into discussion topics when needed.
- Close stale issues after 30 days of inactivity with the stale workflow.
