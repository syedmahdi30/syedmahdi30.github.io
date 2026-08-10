# ML Systems Portfolio Refresh Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the current broad, carousel-based portfolio with the approved recruiter-focused ML systems portfolio while remaining on React and Create React App.

**Architecture:** Keep the production site as one statically deployed page. Move flagship project data into a normalized content module, render semantic focused sections from reusable React components, and use a tokenized CSS system matching the approved systems-dossier concept. Project details remain on-page and link only to verified external artifacts.

**Tech Stack:** React 19, Create React App, JavaScript, CSS, React Testing Library, GitHub Pages

## Global Constraints

- Follow `design.md` as the content and interaction authority.
- Do not add a router, CMS, contact server, or analytics dependency.
- Do not publish provisional Algoverse results or claim that Random Forest beats the AAPL naive baseline.
- Preserve supplied PDFs and existing user files.
- Use test-first development for rendered behavior.
- Verify desktop and mobile rendering in the Browser plugin.

---

### Task 1: Homepage Behavior Contract

**Files:**
- Modify: `src/App.test.js`

**Interfaces:**
- Consumes: rendered `App`
- Produces: assertions for positioning, project ordering, evidence copy, resume, and email actions

- [ ] **Step 1: Replace the stale test with desired behavior tests**

```js
test("presents Syed as an ML systems engineer", () => {
  render(<App />);
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
    "ML systems engineer building reliable infrastructure for intelligent systems."
  );
});

test("renders the three flagship projects in priority order", () => {
  render(<App />);
  const headings = screen.getAllByRole("heading", { level: 3 });
  expect(headings.slice(0, 3).map((heading) => heading.textContent)).toEqual([
    "Carboncopies: Auth-aware RAG infrastructure",
    "Algoverse: Multimodal emotion interpretability",
    "Volatility forecasting: Short-horizon benchmarking",
  ]);
});
```

- [ ] **Step 2: Run the tests and verify they fail because the new content is absent**

Run: `CI=true npm test -- --watchAll=false`

Expected: FAIL on the new ML systems heading and project headings.

### Task 2: Normalized Content and Semantic Page

**Files:**
- Create: `src/content/projectsData.js`
- Create: `src/components/About.js`
- Modify: `src/App.js`
- Modify: `src/components/NavigationBar.js`
- Modify: `src/components/Banner.js`
- Modify: `src/components/Projects.js`
- Modify: `src/components/Experience.js`
- Modify: `src/components/Contact.js`
- Modify: `src/components/Footer.js`

**Interfaces:**
- `projectsData.js` exports `projects`
- `Projects` maps `projects.filter(project => project.featured)` in `featuredOrder`
- `App` composes navigation, main sections, contact, and footer

- [ ] **Step 1: Implement the normalized three-project data module**
- [ ] **Step 2: Implement semantic navigation and hero**
- [ ] **Step 3: Implement Selected Work rows and verified artifact links**
- [ ] **Step 4: Implement experience, capability, about, contact, and footer sections**
- [ ] **Step 5: Run the homepage tests**

Run: `CI=true npm test -- --watchAll=false`

Expected: PASS with the desired hero, projects, result copy, resume, and email actions.

### Task 3: Approved Visual System

**Files:**
- Modify: `src/App.css`
- Modify: `src/index.css`

**Interfaces:**
- Consumes: semantic class names from Task 2
- Produces: design tokens, responsive layouts, visible interaction states, and reduced-motion behavior

- [ ] **Step 1: Replace accumulated styles with design tokens and base typography**
- [ ] **Step 2: Match the accepted hero, project-row, timeline, capability, and contact compositions**
- [ ] **Step 3: Add 1024px, 768px, and 480px responsive behavior**
- [ ] **Step 4: Add focus-visible, skip-link, scroll-offset, and reduced-motion rules**
- [ ] **Step 5: Run tests and build**

Run: `CI=true npm test -- --watchAll=false`

Run: `npm run build`

Expected: both commands exit 0.

### Task 4: Image and Metadata Optimization

**Files:**
- Create: `public/images/headshot-optimized.webp`
- Modify: `public/index.html`
- Modify: `public/manifest.json`
- Modify: `src/components/Banner.js`

**Interfaces:**
- Banner consumes `/images/headshot-optimized.webp` with explicit dimensions
- HTML provides canonical, social, and structured metadata

- [ ] **Step 1: Generate the optimized portrait derivative**
- [ ] **Step 2: Add explicit dimensions, eager loading, and high fetch priority**
- [ ] **Step 3: Replace CRA metadata and add canonical, Open Graph, Twitter, and Person JSON-LD**
- [ ] **Step 4: Run build and inspect output for missing assets**

Run: `npm run build`

Expected: exit 0 and the optimized portrait is included in the static asset tree.

### Task 5: Browser QA and Fidelity Review

**Files:**
- No committed QA artifacts

**Interfaces:**
- Consumes: local production or development server
- Produces: verified desktop and mobile behavior

- [ ] **Step 1: Start the existing React development server**
- [ ] **Step 2: Verify page identity, meaningful DOM, console health, and primary links**
- [ ] **Step 3: Capture desktop and mobile screenshots**
- [ ] **Step 4: Compare the desktop render with the accepted concept at five concrete points**
- [ ] **Step 5: Fix visual or interaction mismatches and rerun checks**
- [ ] **Step 6: Run final tests and production build**

Run: `CI=true npm test -- --watchAll=false`

Run: `npm run build`

Expected: tests and build exit 0, no relevant console errors, and no clipping or horizontal overflow at desktop or mobile widths.
