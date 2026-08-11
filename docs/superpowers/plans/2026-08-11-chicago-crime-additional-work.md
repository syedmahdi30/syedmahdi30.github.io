# Chicago Crime Additional Work Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add Chicago crime data analysis as the second supporting project with accurate leadership attribution, evidence-bounded copy, and no change to the flagship hierarchy.

**Architecture:** Extend the normalized `projects` collection with one `featured: false` entry, migrate supporting-project attribution from a constructed `team` phrase to a complete `collaboration` string, and reuse the existing `AdditionalProject` renderer. Preserve all existing layout and styling unless rendered QA demonstrates a regression.

**Tech Stack:** React 19, Create React App 5, JavaScript, CSS, React Testing Library, Jest, GitHub Pages

## Global Constraints

- Carboncopies, Algoverse, and volatility forecasting remain the only flagship projects and retain their current order.
- Healthcare remains the first Additional Work entry; Chicago is second.
- Describe Syed as project lead of a five-person course team, not as the sole author.
- Do not publish precision, recall, compression, runtime, or accuracy values.
- Do not call the visualizations interactive or imply that the public branch preserves every pipeline stage.
- Do not add a route, modal, screenshot, image, dependency, or new visual treatment.
- Preserve the user-owned untracked `REPO_OVERVIEW_FOR_LLM.md` and `graphify-out/` artifacts.

---

### Task 1: Add the normalized project and collaboration-aware rendering

**Files:**
- Modify: `src/App.test.js:30-76`
- Modify: `src/content/projectsData.js:200-286`
- Modify: `src/components/Projects.js:55-118`

**Interfaces:**
- Consumes: the existing `projects`, `featuredProjects`, and `additionalProjects` exports
- Produces: a second non-featured project with `collaboration: string`
- Produces: an `AdditionalProject` renderer that displays `project.collaboration` verbatim

- [ ] **Step 1: Write the failing supporting-project tests**

Replace the existing healthcare-only test with these two tests:

```js
test("renders supporting projects in newest-to-oldest order", () => {
  render(<App />);

  const work = screen.getByRole("region", { name: /selected work/i });
  const additionalWork = within(work).getByRole("region", {
    name: /additional work/i,
  });
  const additionalProjects = within(additionalWork).getByRole("list", {
    name: /additional projects/i,
  });
  const headings = within(additionalProjects).getAllByRole("heading", {
    level: 4,
  });

  expect(headings.map((heading) => heading.textContent)).toEqual([
    "Bilingual medical terminology RAG benchmark",
    "Chicago crime data analysis",
  ]);
  expect(
    within(additionalWork).getByText(
      "Co-developed with a three-person project team."
    )
  ).toBeInTheDocument();
});

test("renders Chicago crime analysis with leadership and bounded evidence", () => {
  render(<App />);

  const work = screen.getByRole("region", { name: /selected work/i });
  const additionalWork = within(work).getByRole("region", {
    name: /additional work/i,
  });

  expect(
    within(additionalWork).getByRole("heading", {
      level: 4,
      name: /chicago crime data analysis/i,
    })
  ).toBeInTheDocument();
  expect(
    within(additionalWork).getByText("Project lead and data engineer")
  ).toBeInTheDocument();
  expect(
    within(additionalWork).getByText(
      "Led a five-person course team across data engineering, spatial analysis, visualization, and modeling."
    )
  ).toBeInTheDocument();
  expect(
    within(additionalWork).getByText(
      "14 million crime points · ZIP-code spatial join · Parquet pipeline · Spark ML arrest prediction"
    )
  ).toBeInTheDocument();
  expect(
    within(additionalWork).getByRole("link", { name: /view source/i })
  ).toHaveAttribute(
    "href",
    "https://github.com/syedmahdi30/cs167-final-project/tree/a-5"
  );
  expect(within(additionalWork).queryByText(/80% compression/i)).not.toBeInTheDocument();
  expect(within(additionalWork).queryByText(/precision:\s*\d/i)).not.toBeInTheDocument();
  expect(within(additionalWork).queryByText(/recall:\s*\d/i)).not.toBeInTheDocument();
});
```

Keep the existing healthcare evidence and artifact assertions in a separate test named `renders the healthcare RAG benchmark with bounded evidence`:

```js
test("renders the healthcare RAG benchmark with bounded evidence", () => {
  render(<App />);

  const work = screen.getByRole("region", { name: /selected work/i });
  const additionalWork = within(work).getByRole("region", {
    name: /additional work/i,
  });

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

- [ ] **Step 2: Run the focused tests and verify the Chicago contract fails**

Run:

```bash
CI=true npm test -- --watchAll=false --runInBand src/App.test.js
```

Expected: FAIL because Chicago is absent and the healthcare collaboration sentence lacks the final period stored in the future normalized field.

- [ ] **Step 3: Migrate healthcare attribution to `collaboration`**

In `src/content/projectsData.js`, replace:

```js
team: "three-person project team",
```

with:

```js
collaboration: "Co-developed with a three-person project team.",
```

- [ ] **Step 4: Add the Chicago project object after healthcare**

Append this object to `projects` after the healthcare entry:

```js
{
  slug: "chicago-crime-data-analysis",
  title: "Chicago crime data analysis",
  shortTitle: "Chicago crime data analysis",
  oneLineOutcome:
    "Led a five-person team building a Spark and Scala pipeline for Chicago crime data, spanning ZIP-code spatial enrichment, Parquet preparation, spatiotemporal analysis, and arrest prediction.",
  categories: ["Data engineering", "Geospatial analytics", "Applied ML"],
  status: "Completed",
  dates: { start: "2025", end: "2025", label: "2025" },
  role: "Project lead and data engineer",
  collaboration:
    "Led a five-person course team across data engineering, spatial analysis, visualization, and modeling.",
  featured: false,
  featuredOrder: null,
  claimState:
    "Repository-supported scope with owner-confirmed leadership and cross-pipeline contribution",
  problem:
    "Turn a large public crime dataset into a reusable pipeline for geographic, temporal, and predictive analysis.",
  constraints: [
    "A 14-million-point source dataset with smaller development samples",
    "Spatial enrichment against Census ZIP-code boundaries",
    "Course-scale compute, delivery time, and five-person coordination",
  ],
  systemSummary:
    "A Spark and Scala pipeline enriches crime records through spatial ZIP-code joins, stores prepared data in Parquet, produces geographic and temporal analyses, and trains an arrest classifier from crime text features.",
  architecture: [
    "Spark DataFrames, Spark SQL, and Beast spatial joins",
    "Parquet preparation with ZIP-level and spatiotemporal outputs",
    "Spark ML text features and logistic-regression arrest prediction",
  ],
  contributions: [
    "Led a five-person team across planning, integration, and delivery.",
    "Contributed to spatial joins, Parquet preparation, analysis, and visualization.",
    "Implemented and refined the Spark ML arrest-prediction pipeline.",
  ],
  decisions: [
    "Use Parquet as the shared columnar boundary between preparation and analysis stages.",
    "Combine crime type and description text before hashed-feature classification.",
    "Use a seeded 80/20 split so model comparisons remain reproducible.",
  ],
  evaluation: [
    "ZIP-level, temporal, and rectangular spatiotemporal analysis outputs",
    "Held-out classifier precision, recall, and training-time measurement",
  ],
  metrics: [
    "14 million crime points · ZIP-code spatial join · Parquet pipeline · Spark ML arrest prediction",
  ],
  results: [
    "Delivered an integrated workflow spanning data preparation, geospatial analysis, visualization, and predictive modeling.",
  ],
  limitations: [
    "The public branch preserves the assignment scope and arrest-model implementation, but not the final report or measured metric values.",
    "Arrest prediction uses only crime type and description text and should not be interpreted as an operational decision system.",
  ],
  technologies: [
    "Scala",
    "Apache Spark",
    "Spark SQL",
    "Spark MLlib",
    "Beast",
    "Parquet",
    "QGIS",
  ],
  artifacts: [
    {
      label: "View source",
      href: "https://github.com/syedmahdi30/cs167-final-project/tree/a-5",
      type: "source",
    },
  ],
  trace:
    "crime records + Census boundaries → spatial ZIP enrichment → Parquet + analytics → arrest prediction",
  seo: {
    title: "Chicago crime data analysis — Syed Islam",
    description:
      "A Spark and Scala pipeline for geospatial crime analysis, Parquet processing, and arrest prediction.",
  },
},
```

- [ ] **Step 5: Render complete collaboration copy and broaden the section introduction**

In `src/components/Projects.js`, replace:

```jsx
<p className="additional-project-team">Co-developed with a {project.team}</p>
```

with:

```jsx
<p className="additional-project-team">{project.collaboration}</p>
```

Replace:

```jsx
<p>Applied RAG and evaluation work that complements the flagship systems above.</p>
```

with:

```jsx
<p>Applied data, retrieval, and evaluation work that complements the flagship systems above.</p>
```

- [ ] **Step 6: Run the focused tests and verify they pass**

Run:

```bash
CI=true npm test -- --watchAll=false --runInBand src/App.test.js
```

Expected: all eight homepage tests pass, including unchanged flagship order, both supporting projects, healthcare evidence, and Chicago claim boundaries.

- [ ] **Step 7: Commit the tested feature**

```bash
git add src/App.test.js src/content/projectsData.js src/components/Projects.js
git commit -m "Add Chicago crime analysis to additional work"
```

### Task 2: Verify responsive behavior and release readiness

**Files:**
- No planned source modifications

**Interfaces:**
- Consumes: the two-entry Additional Work list from Task 1
- Produces: automated and rendered evidence that the release remains correct and responsive

- [ ] **Step 1: Run the complete automated verification**

Run:

```bash
CI=true npm test -- --watchAll=false --runInBand
npm run build
git diff --check HEAD~1..HEAD
```

Expected: all eight tests pass, the optimized production build compiles successfully, and the feature diff has no whitespace errors.

- [ ] **Step 2: Verify the rendered Additional Work flow**

Use the in-app Browser when available. The flow under test is:

`homepage loads → Additional work renders healthcare then Chicago → Chicago source action is keyboard reachable → narrow viewport preserves readable evidence and trace text`

Check approximately 1440px and 390px widths for:

- unchanged dominance and order of the three flagship rows;
- healthcare followed by Chicago under Additional Work;
- readable collaboration, evidence, technologies, and system trace;
- visible keyboard focus on `View source`;
- no clipping, overlap, horizontal overflow, framework overlay, or relevant console warning/error.

If the Browser runtime is unavailable, record rendered QA as unverified and do not claim these visual checks passed.

- [ ] **Step 3: Confirm the committed scope**

Run:

```bash
git status --short
git log -3 --oneline
git diff --name-only d61a64c..HEAD
git diff --check d61a64c..HEAD
```

Expected:

- Only the known user-owned untracked artifacts remain in `git status`.
- The committed range contains the design spec, implementation plan, project data, component copy, and tests.
- No CSS, dependency, workflow, image, or generated build file changed.

- [ ] **Step 4: Record completion evidence**

Report the feature commit, test count, build result, rendered-QA status, exact leadership attribution, evidence line, repository URL, and preserved flagship order.
