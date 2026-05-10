# Release Planning

AI-Agent-Cloud uses a release process focused on quality, community feedback, and predictable milestones.

## Semantic versioning

We use semantic versioning for release clarity:

- `MAJOR` when making incompatible API or platform changes
- `MINOR` when adding functionality in a backwards-compatible way
- `PATCH` for backwards-compatible bug fixes and documentation updates

Example: `v0.1.0` is the first stable public platform release.

## Milestone planning

- Create GitHub milestones for each release cycle.
- Use milestones to group issues and PRs by version.
- Track progress with issues, labels, and status updates.

## Future releases

- `v0.2.0` — Expanded observability, production deploy docs, and Kubernetes vision.
- `v0.3.0` — Agent SDK, marketplace architecture, and enterprise integrations.
- `v1.0.0` — Production-ready platform with deployment infrastructure and multi-user support.

## Roadmap alignment

Release planning is tied to the project roadmap:

- Prioritize the highest-impact developer features.
- Align product vision with open-source community contributions.
- Reserve release notes for platform milestones and ecosystem growth.

## Release checklist

- [ ] Update documentation for the release.
- [ ] Validate GitHub Pages content and deployment docs.
- [ ] Ensure CI workflows pass and PR validation is complete.
- [ ] Publish release notes in `CHANGELOG.md`.
- [ ] Tag the release in GitHub and announce it.
