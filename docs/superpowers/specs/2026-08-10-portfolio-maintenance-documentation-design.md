# Portfolio Maintenance Documentation Design

## Goal

Bring the repository's maintainer-facing documentation in line with the deployed portfolio at commit `ce9c5c1` without changing the rendered site, dependencies, or deployment configuration.

## Context

The live GitHub Pages release is healthy: the six homepage tests pass, the production build succeeds, the deployment workflow completed successfully for `ce9c5c1`, and the healthcare paper, resume, and Colab links resolve. Two documentation gaps remain:

- `README.md` is still the generic Create React App starter document and does not explain this portfolio's architecture, content model, verification commands, or deployment workflow.
- `docs/superpowers/plans/2026-08-10-healthcare-rag-additional-work.md` identifies `syedmahdi30/personal-portfolio` as the repository for GitHub Actions monitoring, but the deployed repository is `syedmahdi30/syedmahdi30.github.io`.

## Considered approaches

### 1. Focused documentation correction — selected

Replace the starter README with concise project-specific maintenance guidance and correct the single deployment-repository reference in the healthcare release plan.

This resolves the verified documentation drift with the smallest possible change and does not disturb the deployed application.

### 2. Correct only the release-plan repository reference

This would fix the immediate factual error but leave the primary repository entry point misleading and unhelpful to future maintainers.

### 3. Perform a broader documentation and architecture rewrite

This could consolidate `design.md`, historical plans, and the untracked repository overview, but it would expand scope beyond the verified maintenance defects and risk rewriting useful historical context.

## README design

The replacement README will provide:

1. A short description of the portfolio's recruiter-facing ML-systems purpose.
2. The current architecture: React 19, Create React App 5, a static single-page GitHub Pages deployment, normalized project data, and no runtime backend.
3. Local commands for installation, development, tests, and production builds.
4. A compact repository map covering the primary content, component, styling, asset, design, and workflow files.
5. Content-maintenance guardrails derived from `design.md`, including the three-project flagship hierarchy, evidence-based claims, static artifact links, and the exclusion of provisional research results.
6. Deployment details for the `master`/`main` workflow and the canonical GitHub repository and live-site URLs.
7. A release checklist covering tests, build, diff hygiene, artifact availability, and live deployment verification.

The README will link to `design.md` and the existing focused specifications instead of duplicating their full content.

## Release-plan correction

The healthcare plan's monitoring instruction will reference the public Actions API repository `syedmahdi30/syedmahdi30.github.io`. No other historical plan wording will change.

## Boundaries

- Do not modify React, CSS, project content, assets, dependencies, workflows, or generated build output.
- Do not add or track the existing untracked `REPO_OVERVIEW_FOR_LLM.md` or `graphify-out/` artifacts.
- Do not rewrite historical implementation steps except for the verified repository-name error.
- Do not claim visual browser QA, because no browser connection was available during this maintenance pass.

## Verification

- Confirm all README paths, commands, repository URLs, and live URLs match the checkout.
- Run `git diff --check`.
- Run `CI=true npm test -- --watchAll=false --runInBand`.
- Run `npm run build`.
- Confirm the final diff contains documentation files only.

## Success criteria

- A new maintainer can understand how the portfolio is structured, update content safely, verify changes, and identify the deployment repository from `README.md`.
- The healthcare release plan points to the repository that actually produced the successful `ce9c5c1` deployment.
- The deployed application remains unchanged.
