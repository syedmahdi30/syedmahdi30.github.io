# Portfolio Maintenance Documentation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the generic Create React App README with accurate portfolio-maintenance guidance and correct the repository used for healthcare-release workflow monitoring.

**Architecture:** Keep this as a documentation-only change. `README.md` becomes the maintainer entry point and links to the existing design authority; the historical healthcare plan receives only the verified repository-name correction.

**Tech Stack:** Markdown, React 19, Create React App 5, npm, GitHub Actions, GitHub Pages

## Global Constraints

- Do not modify React, CSS, project content, assets, dependencies, workflows, or generated build output.
- Do not add or track `REPO_OVERVIEW_FOR_LLM.md` or `graphify-out/`.
- Preserve the three-project flagship hierarchy and the claim guardrails in `design.md`.
- Use `syedmahdi30/syedmahdi30.github.io` as the deployment repository and `https://syedmahdi30.github.io/` as the live site.
- Do not claim visual browser QA in this maintenance pass.

---

### Task 1: Replace the starter README with maintainer documentation

**Files:**
- Modify: `README.md:1-70`

**Interfaces:**
- Consumes: `design.md`, `package.json`, `.github/workflows/react-gh-pages.yml`, and the current repository layout
- Produces: the repository's primary maintainer guide with exact local commands, content boundaries, deployment details, and release checks

- [ ] **Step 1: Confirm the existing README is still the CRA starter**

Run:

```bash
rg -n "Getting Started with Create React App|npm start|npm test|npm run build" README.md
```

Expected: the first match is `# Getting Started with Create React App` and the file contains only generic CRA guidance.

- [ ] **Step 2: Replace `README.md` with project-specific content**

Write these sections in this order:

```markdown
# Syed Islam — ML Systems Portfolio

Recruiter-focused portfolio for Syed Islam's work across LLM infrastructure, multimodal interpretability, applied machine learning, and production software.

- Live site: https://syedmahdi30.github.io/
- Design and content authority: [design.md](design.md)

## Architecture

The site is a statically deployed, single-page React application built with React 19 and Create React App 5. It has no runtime backend, router, CMS, or contact API.

- `src/content/projectsData.js` contains normalized project content.
- `src/components/` contains semantic homepage sections.
- `src/App.css` and `src/index.css` contain the tokenized visual system and responsive rules.
- `public/docs/` contains the resume and project papers linked from the site.
- `.github/workflows/react-gh-pages.yml` builds and deploys `build/` to GitHub Pages.

## Local development

```bash
npm ci
npm start
```

The development server runs at `http://localhost:3000`.

## Verification

```bash
CI=true npm test -- --watchAll=false --runInBand
npm run build
git diff --check
```

The test suite covers the ML-systems positioning, flagship project order, healthcare additional-work entry, volatility-result wording, resume and email conversion paths, and the keyboard skip link.

## Maintaining content

Treat `design.md` as the source of truth for visible copy, claims, hierarchy, accessibility, responsive behavior, and artifact policy.

- Keep Carboncopies, Algoverse, and volatility forecasting as the three flagship projects in that order.
- Keep supporting projects under `Additional work` with `featured: false`.
- Add or update project content in `src/content/projectsData.js`; do not create placeholder artifact links.
- Publish only evidence-backed claims. Algoverse results remain provisional until evaluation is frozen.
- Describe the medical terminology benchmark as a four-query exploratory evaluation, not clinical validation or statistically robust model superiority.
- Keep the contact path as `mailto:` and the resume as a static file under `public/docs/`.

Relevant specifications and plans live under `docs/superpowers/`.

## Deployment

The canonical repository is `syedmahdi30/syedmahdi30.github.io`. Pushes to `master` or `main` trigger `.github/workflows/react-gh-pages.yml`, which installs dependencies with `npm ci`, builds the application, and deploys the `build/` artifact to GitHub Pages.

Before releasing:

1. Run the complete verification commands above.
2. Confirm the diff contains only intended files and preserves user-owned untracked artifacts.
3. Confirm every newly added local document exists under `public/docs/` and every external artifact URL resolves.
4. After pushing, confirm the workflow completed successfully for the intended commit.
5. Verify the live bundle contains the expected copy and that its document, resume, and source links resolve.

## Scope boundaries

The current release intentionally has no case-study routes, custom contact backend, CMS, carousel, analytics dependency, or provisional research-result claims. A framework migration or route-based case-study system should be designed as a separate project.
```

- [ ] **Step 3: Verify README facts against the repository**

Run:

```bash
test -f src/content/projectsData.js
test -f .github/workflows/react-gh-pages.yml
test -d public/docs
node -e 'const p=require("./package.json"); if (p.dependencies.react !== "^19.0.0" || p.devDependencies["react-scripts"] !== "5.0.1") process.exit(1)'
rg -n 'branches: \["master", "main"\]' .github/workflows/react-gh-pages.yml
```

Expected: every command exits 0.

- [ ] **Step 4: Commit the README replacement**

```bash
git add README.md
git commit -m "Document portfolio maintenance workflow"
```

### Task 2: Correct release monitoring and verify the documentation patch

**Files:**
- Modify: `docs/superpowers/plans/2026-08-10-healthcare-rag-additional-work.md:469`

**Interfaces:**
- Consumes: the canonical Git remote and the live workflow run verified for `ce9c5c1`
- Produces: a release plan whose public Actions API lookup targets `syedmahdi30/syedmahdi30.github.io`

- [ ] **Step 1: Confirm the stale repository reference exists**

Run:

```bash
rg -n 'syedmahdi30/personal-portfolio' docs/superpowers/plans/2026-08-10-healthcare-rag-additional-work.md
```

Expected: one match in the workflow-monitoring instruction.

- [ ] **Step 2: Correct the repository reference**

Replace:

```text
Use the public GitHub Actions API for `syedmahdi30/personal-portfolio`
```

with:

```text
Use the public GitHub Actions API for `syedmahdi30/syedmahdi30.github.io`
```

Do not change any other historical plan text.

- [ ] **Step 3: Verify the focused documentation diff**

Run:

```bash
git diff --check
git diff --name-only HEAD
rg -n 'syedmahdi30/(personal-portfolio|syedmahdi30.github.io)' README.md docs/superpowers/plans/2026-08-10-healthcare-rag-additional-work.md
```

Expected:

- `git diff --check` exits 0.
- The working diff contains only the healthcare implementation plan because the README change was committed in Task 1.
- No `syedmahdi30/personal-portfolio` reference remains in either file.

- [ ] **Step 4: Run the application verification contract**

Run:

```bash
CI=true npm test -- --watchAll=false --runInBand
npm run build
```

Expected: one test suite and all six tests pass; the optimized production build compiles successfully.

- [ ] **Step 5: Confirm repository state and commit the correction**

Run:

```bash
git status --short
git diff --stat HEAD
```

Expected: only the known user-owned untracked artifacts plus the intended healthcare-plan modification remain; application source and generated build output are unchanged.

Then commit:

```bash
git add docs/superpowers/plans/2026-08-10-healthcare-rag-additional-work.md
git commit -m "Correct portfolio deployment documentation"
```

- [ ] **Step 6: Record completion evidence**

Report the two documentation commits, the six-test result, the successful production build, the corrected deployment repository, and the fact that no application files changed.
