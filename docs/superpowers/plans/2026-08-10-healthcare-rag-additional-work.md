# Healthcare RAG Additional Work Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add the completed bilingual medical terminology RAG benchmark as a compact, evidence-led Additional Work entry without changing the portfolio's three flagship projects.

**Architecture:** Extend the normalized project collection with one non-featured project and derive an `additionalProjects` export from that collection. `Projects.js` keeps the current flagship renderer and adds a smaller semantic renderer for non-featured work; CSS supplies the compact responsive presentation without new dependencies or routes.

**Tech Stack:** React 19, Create React App 5, JavaScript, CSS, React Testing Library, Jest, GitHub Pages

## Global Constraints

- Carboncopies, Algoverse, and volatility forecasting remain the only flagship projects and retain their current order.
- The new project is `featured: false` and appears under `Additional work` within the Selected Work section.
- Copy says Syed co-developed the project with a three-person team; it must not imply sole ownership.
- Visible evidence must say `8,971 terms · 384-dimensional embeddings · 5 local models · 4-query exploratory evaluation`.
- Do not claim clinical validation, diagnostic accuracy, deployment readiness, publication, or statistically robust model superiority.
- Do not use the manuscript's placeholder DOI or conference metadata.
- Do not add a route, dependency, screenshot, or live-demo claim.
- The only artifacts are the existing local paper and the supplied public Colab URL.

---

### Task 1: Add the normalized project and semantic Additional Work markup

**Files:**
- Modify: `src/App.test.js:16-34`
- Modify: `src/content/projectsData.js:200-205`
- Modify: `src/components/Projects.js:1-75`
- Add to git: `public/docs/AI_in_Healthcare___High_Risk_Project___Ludolf_J___Santupur_S_______Islam_S_-2.pdf`

**Interfaces:**
- Consumes: the existing `projects` array and `featuredProjects` export from `src/content/projectsData.js`
- Produces: `additionalProjects: Project[]`, where each item has the same normalized fields as a flagship project plus optional `team: string`
- Produces: an `AdditionalProject({ project })` React renderer used only for `featured: false` entries

- [ ] **Step 1: Write the failing rendering and artifact test**

Add this test to `src/App.test.js`:

```js
test("renders the healthcare RAG benchmark as additional work", () => {
  render(<App />);

  const work = screen.getByRole("region", { name: /selected work/i });
  const additionalWork = within(work).getByRole("region", {
    name: /additional work/i,
  });

  expect(
    within(additionalWork).getByRole("heading", {
      level: 4,
      name: /bilingual medical terminology rag benchmark/i,
    })
  ).toBeInTheDocument();
  expect(
    within(additionalWork).getByText(
      /8,971 terms · 384-dimensional embeddings · 5 local models · 4-query exploratory evaluation/i
    )
  ).toBeInTheDocument();
  expect(
    within(additionalWork).getByRole("link", { name: /read paper/i })
  ).toHaveAttribute(
    "href",
    "/docs/AI_in_Healthcare___High_Risk_Project___Ludolf_J___Santupur_S_______Islam_S_-2.pdf"
  );
  expect(
    within(additionalWork).getByRole("link", { name: /open colab/i })
  ).toHaveAttribute(
    "href",
    "https://colab.research.google.com/drive/1Ph4nrJbk3Lz8DiFKpPYKiSMPfrF5mb1W?usp=sharing"
  );
});
```

- [ ] **Step 2: Run the focused test and verify it fails**

Run:

```bash
npm test -- --watchAll=false --runInBand src/App.test.js
```

Expected: FAIL because no region named `Additional work` exists.

- [ ] **Step 3: Add the normalized content object and derived export**

Append this object to `projects` in `src/content/projectsData.js`:

```js
{
  slug: "medical-terminology-rag-benchmark",
  title: "Bilingual medical terminology RAG benchmark",
  shortTitle: "Medical terminology RAG benchmark",
  oneLineOutcome:
    "Co-developed a local RAG prototype that indexed 8,971 Chinese-English medical terms and compared five Ollama-served models through a reproducible retrieval and evaluation workflow.",
  categories: ["RAG", "LLM evaluation", "Healthcare NLP"],
  status: "Completed",
  dates: { start: "2026", end: "2026", label: "2026" },
  role: "Research engineer and co-author",
  team: "Three-person project team",
  featured: false,
  featuredOrder: null,
  claimState: "Verified against the supplied paper and Colab notebook",
  problem:
    "Explore whether local language models can use standardized bilingual terminology retrieval to answer Traditional Chinese Medicine terminology questions more consistently.",
  constraints: [
    "Public terminology data and a fixed Colab runtime",
    "Locally served open models through Ollama",
    "Four-prompt exploratory evaluation without clinician review",
  ],
  systemSummary:
    "A multilingual sentence encoder maps cleaned terminology into a FAISS index; retrieved bilingual context grounds locally served Ollama models, with Gradio for interaction and a small term-overlap benchmark for comparison.",
  architecture: [
    "Pandas cleaning over 8,971 bilingual terminology records",
    "384-dimensional MiniLM embeddings and FAISS IndexFlatL2 retrieval",
    "Five Ollama-served generators with a Gradio interface",
  ],
  contributions: [
    "Co-developed data preparation, embedding, and FAISS retrieval workflows.",
    "Integrated Ollama model comparison and the Gradio interface.",
    "Contributed to evaluation design, analysis, and manuscript writing.",
  ],
  decisions: [
    "Use one deterministic retrieval pipeline so each generator receives the same context.",
    "Label the four-prompt benchmark exploratory rather than generalizing model rankings.",
  ],
  evaluation: [
    "Term- and keyword-overlap precision, recall, and F1 across four curated prompts",
    "Retrieved-term inspection and similarity-score visualization",
  ],
  metrics: [
    "8,971 terms · 384-dimensional embeddings · 5 local models · 4-query exploratory evaluation",
  ],
  results: [
    "Produced a reproducible local workflow for comparing retrieval-grounded responses across five open models.",
  ],
  limitations: [
    "Four prompts and keyword-based scoring do not establish general model superiority.",
    "No clinician review or real-world clinical validation was performed.",
  ],
  technologies: [
    "Python",
    "Pandas",
    "Sentence Transformers",
    "FAISS",
    "Ollama",
    "Gradio",
  ],
  artifacts: [
    {
      label: "Read paper",
      href: "/docs/AI_in_Healthcare___High_Risk_Project___Ludolf_J___Santupur_S_______Islam_S_-2.pdf",
      type: "paper",
    },
    {
      label: "Open Colab",
      href: "https://colab.research.google.com/drive/1Ph4nrJbk3Lz8DiFKpPYKiSMPfrF5mb1W?usp=sharing",
      type: "source",
    },
  ],
  trace:
    "TCM terminology → multilingual embeddings → FAISS retrieval → Ollama generation → Gradio + evaluation",
  seo: {
    title: "Bilingual medical terminology RAG benchmark — Syed Islam",
    description:
      "A local RAG prototype and exploratory five-model benchmark over 8,971 Chinese-English medical terms.",
  },
},
```

Add the derived export after `featuredProjects`:

```js
export const additionalProjects = projects.filter((project) => !project.featured);
```

- [ ] **Step 4: Add semantic rendering without changing flagship presentation**

In `src/components/Projects.js`, import `additionalProjects`, label the current `.project-list` as a list named `Flagship projects`, set each flagship article to `role="listitem"`, and add:

```jsx
const AdditionalProject = ({ project }) => (
  <article className="additional-project" id={project.slug} role="listitem">
    <div className="additional-project-main">
      <div className="project-meta">
        <span>{project.categories.join(" · ")}</span>
        <span>{project.dates.label}</span>
        <span>{project.role}</span>
      </div>
      <h4>{project.title}</h4>
      <p className="project-outcome">{project.oneLineOutcome}</p>
      <p className="additional-project-evidence">
        <span>Evidence</span> {project.metrics.join(" · ")}
      </p>
      <ul className="technology-list" aria-label={`${project.shortTitle} technologies`}>
        {project.technologies.map((technology) => (
          <li key={technology}>{technology}</li>
        ))}
      </ul>
    </div>
    <div className="additional-project-actions" aria-label={`${project.shortTitle} artifacts`}>
      <span className="status status-complete">{project.status}</span>
      {project.artifacts.map((artifact) => (
        <a key={artifact.href} href={artifact.href} target="_blank" rel="noreferrer">
          {artifact.label} <span aria-hidden="true">↗</span>
        </a>
      ))}
    </div>
    <div className="system-trace">
      <span>system trace</span>
      <code>{project.trace}</code>
    </div>
  </article>
);
```

After the flagship list, render:

```jsx
<section className="additional-work" aria-labelledby="additional-work-title">
  <div className="additional-work-heading">
    <p className="section-index">SUPPORTING PROJECT</p>
    <div>
      <h3 id="additional-work-title">Additional work</h3>
      <p>Applied RAG and evaluation work that complements the flagship systems above.</p>
    </div>
  </div>
  <div className="additional-project-list" role="list" aria-label="Additional projects">
    {additionalProjects.map((project) => (
      <AdditionalProject key={project.slug} project={project} />
    ))}
  </div>
</section>
```

- [ ] **Step 5: Preserve the flagship-order test's semantic scope**

Update the existing flagship test to query the named flagship list:

```js
const work = screen.getByRole("region", { name: /selected work/i });
const flagshipProjects = within(work).getByRole("list", {
  name: /flagship projects/i,
});
const headings = within(flagshipProjects).getAllByRole("heading", { level: 3 });
```

The expected three-title array remains unchanged.

- [ ] **Step 6: Run tests and verify the content behavior passes**

Run:

```bash
npm test -- --watchAll=false --runInBand src/App.test.js
```

Expected: all six tests pass, including the unchanged three-project flagship order and the new Additional Work assertions.

- [ ] **Step 7: Commit the content and semantic markup**

```bash
git add src/App.test.js src/content/projectsData.js src/components/Projects.js public/docs/AI_in_Healthcare___High_Risk_Project___Ludolf_J___Santupur_S_______Islam_S_-2.pdf
git commit -m "Add healthcare RAG project to additional work"
```

### Task 2: Add the compact responsive presentation and verify the release

**Files:**
- Modify: `src/App.css:306-460`
- Modify: `src/App.css:691-852`

**Interfaces:**
- Consumes: `.additional-work`, `.additional-work-heading`, `.additional-project-list`, `.additional-project`, `.additional-project-main`, `.additional-project-evidence`, and `.additional-project-actions` from Task 1
- Produces: a two-column desktop supporting-project layout that collapses to one column at 720px and keeps artifact links keyboard accessible

- [ ] **Step 1: Establish the visual baseline**

Run:

```bash
npm start
```

Open the local page at desktop and mobile widths and confirm the unstyled Additional Work markup is present. Expected: the content is readable but does not yet have a distinct compact supporting-work hierarchy.

- [ ] **Step 2: Add the compact supporting-work styles**

Add after the existing project styles in `src/App.css`:

```css
.additional-work {
  margin-top: clamp(4rem, 8vw, 6.5rem);
}

.additional-work-heading {
  align-items: start;
  display: grid;
  gap: 2rem;
  grid-template-columns: minmax(145px, 0.45fr) minmax(0, 1.55fr);
  margin-bottom: 1.75rem;
}

.additional-work-heading h3 {
  font-family: var(--serif);
  font-size: clamp(1.7rem, 2.5vw, 2.25rem);
  font-weight: 400;
  margin: 0 0 0.5rem;
}

.additional-work-heading p:last-child {
  color: var(--slate);
  margin: 0;
}

.additional-project-list {
  border-top: 1px solid var(--ink);
}

.additional-project {
  border-bottom: 1px solid var(--ink);
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(150px, 0.28fr);
  padding-top: 2.25rem;
}

.additional-project-main {
  padding: 0 clamp(1.5rem, 5vw, 5rem) 2.25rem 0;
}

.additional-project-main h4 {
  font-family: var(--serif);
  font-size: clamp(1.5rem, 2.5vw, 2rem);
  font-weight: 400;
  line-height: 1.15;
  margin: 0 0 0.8rem;
}

.additional-project-evidence {
  color: var(--slate);
  font-family: var(--mono);
  font-size: 0.72rem;
  margin: 1.4rem 0 0;
}

.additional-project-evidence span {
  color: var(--cobalt);
  letter-spacing: 0.08em;
  margin-right: 0.55rem;
  text-transform: uppercase;
}

.additional-project-actions {
  align-items: flex-start;
  border-left: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-left: clamp(1rem, 2.5vw, 2rem);
}

.additional-project-actions a {
  font-size: 0.73rem;
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}
```

At `max-width: 720px`, add `.additional-work-heading` to the existing one-column selector. At `max-width: 480px`, add:

```css
.additional-project {
  grid-template-columns: 1fr;
}

.additional-project-main,
.additional-project-actions {
  grid-column: 1;
}

.additional-project-main {
  padding-right: 0;
}

.additional-project-actions {
  border-left: 0;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0 0 1.75rem;
}
```

- [ ] **Step 3: Run automated verification**

Run:

```bash
npm test -- --watchAll=false --runInBand
npm run build
git diff --check
```

Expected: six tests pass, the optimized build completes, and `git diff --check` prints no errors.

- [ ] **Step 4: Run rendered accessibility and responsive checks**

Inspect the local page at approximately 1440px, 768px, and 390px widths. Verify:

- The three flagship rows remain visually dominant.
- Additional Work is clearly subordinate and does not resemble a fourth numbered flagship.
- Both artifact links receive visible keyboard focus and open the intended URLs.
- Heading order is Selected Work `h2`, Additional Work `h3`, project title `h4`.
- No horizontal overflow, clipped trace text, or overlapping actions appear.
- Browser console contains no new errors or React warnings.

- [ ] **Step 5: Commit the presentation**

```bash
git add src/App.css
git commit -m "Style the additional work project entry"
```

### Task 3: Confirm release readiness

**Files:**
- Read: `.github/workflows/react-gh-pages.yml`
- Read: `package.json`

**Interfaces:**
- Consumes: the isolated feature-branch commits from Tasks 1 and 2
- Produces: a clean, fully verified feature branch ready for whole-branch review and integration into `master`

- [ ] **Step 1: Confirm the release diff and repository state**

Run:

```bash
git status --short
git log -5 --oneline
git diff 0badf22..HEAD --check
```

Expected: the worktree is clean; the healthcare PDF is tracked; all implementation and fix commits are present; the complete feature diff is clean.

- [ ] **Step 2: Re-run the complete release verification**

Run:

```bash
npm test -- --watchAll=false --runInBand
npm run build
```

Expected: all six tests pass and the optimized production build completes successfully.

- [ ] **Step 3: Record the release-readiness evidence**

Write the exact status, commit range, test count, build result, and remaining concerns to the Task 3 report. Do not push or merge from the isolated worktree.

Expected: `DONE` with no unresolved correctness, accessibility, responsive-layout, artifact-link, or claim-integrity concern.

## Post-review release

After the SDD whole-branch review is clean, use `superpowers:finishing-a-development-branch` to integrate the reviewed feature branch into `master`. Then:

- [ ] **Step 1: Push the reviewed `master` branch**

```bash
git push origin master
```

Expected: push succeeds and triggers `.github/workflows/react-gh-pages.yml`.

- [ ] **Step 2: Monitor the deployment workflow**

Use the public GitHub Actions API for `syedmahdi30/syedmahdi30.github.io` to identify the workflow run associated with the pushed commit. Poll until it reaches `completed`.

Expected: `status=completed` and `conclusion=success`.

- [ ] **Step 3: Verify the live release**

Fetch `https://syedmahdi30.github.io` without cache and verify the deployed bundle contains:

- `Additional work`
- `Bilingual medical terminology RAG benchmark`
- `4-query exploratory evaluation`
- the paper URL
- the Colab URL

Open both links from the live page. Expected: the paper returns HTTP 200 and the Colab URL resolves to the shared notebook.

- [ ] **Step 4: Record completion evidence**

Report the implementation commit IDs, test/build results, successful workflow run URL, live portfolio URL, and the exact credibility guardrail used in visible copy.
