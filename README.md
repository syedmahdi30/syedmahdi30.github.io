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
