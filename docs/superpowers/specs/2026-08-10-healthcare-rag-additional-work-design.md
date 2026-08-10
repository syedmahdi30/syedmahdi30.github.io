# Healthcare RAG Additional Work Design

## Goal

Add the completed Chinese-English medical terminology project to the portfolio without weakening the existing three-project flagship hierarchy. Present it as evidence of practical RAG construction and evaluation while accurately reflecting its exploratory scope and Syed's shared ownership within a three-person team.

## Placement and hierarchy

- Keep Carboncopies, Algoverse, and volatility forecasting as the only flagship projects.
- Add an `Additional Work` subsection immediately after the flagship project list and within the existing Selected Work section.
- Render the healthcare project as a compact supporting entry rather than reusing the visually dominant flagship row.
- Preserve the current Selected Work introduction and flagship numbering.

## Portfolio content

### Identity

- Slug: `medical-terminology-rag-benchmark`
- Title: `Bilingual medical terminology RAG benchmark`
- Status: `Completed`
- Date: `2026`
- Role: `Research engineer and co-author`
- Team: three-person project team
- Categories: `RAG`, `LLM evaluation`, `Healthcare NLP`

### Outcome

> Co-developed a local RAG prototype that indexed 8,971 Chinese-English medical terms and compared five Ollama-served models through a reproducible retrieval and evaluation workflow.

### System and evidence

- Cleaned and normalized a public Traditional Chinese Medicine terminology dataset into 8,971 usable bilingual records.
- Encoded records as 384-dimensional vectors with `paraphrase-multilingual-MiniLM-L12-v2` and indexed them with FAISS.
- Routed retrieved context to five locally served Ollama models and exposed the workflow through a Gradio interface.
- Evaluated model responses on four curated prompts using term- and keyword-overlap precision, recall, and F1.
- Describe this as an exploratory benchmark. Do not present it as clinical validation, diagnostic software, or evidence of deployment readiness.

### Contribution language

Syed co-developed work across data preparation, retrieval, Ollama integration, the Gradio interface, evaluation, and manuscript writing. Copy must not imply sole ownership of a three-person project.

### Compact evidence line

`8,971 terms · 384-dimensional embeddings · 5 local models · 4-query exploratory evaluation`

### System trace

`TCM terminology → multilingual embeddings → FAISS retrieval → Ollama generation → Gradio + evaluation`

### Technologies

- Python
- Pandas
- Sentence Transformers
- FAISS
- Ollama
- Gradio

### Artifacts

- Paper: `/docs/AI_in_Healthcare___High_Risk_Project___Ludolf_J___Santupur_S_______Islam_S_-2.pdf`
- Colab: `https://colab.research.google.com/drive/1Ph4nrJbk3Lz8DiFKpPYKiSMPfrF5mb1W?usp=sharing`

## Content architecture

- Add the project to `src/content/projectsData.js` using the existing normalized project schema with `featured: false`.
- Export `additionalProjects`, derived from non-featured projects, rather than maintaining a second hard-coded content collection.
- Add team context as a normalized project field if the UI needs it; do not encode team details into unrelated fields.
- Omit placeholder links and unavailable artifacts.

## Component design

- Keep the existing flagship `Project` presentation unchanged.
- Add a small `AdditionalProject` presentation inside `Projects.js` with a semantic article, title, outcome, evidence line, technology list, status, and artifact links.
- Give the subsection an accessible heading so it can be navigated independently while remaining part of the Selected Work region.
- Reuse existing typography, colors, status labels, technology chips, and link behavior.
- Use a restrained two-column desktop layout that collapses to one column on narrow screens.

## Interaction and failure behavior

- The entry is static and requires no new runtime data fetching or application state.
- The paper and Colab links open in a new tab with safe `rel` attributes.
- A missing external Colab page must not affect rendering of the portfolio.
- The local paper path is already present in the public assets directory and should be linked directly.

## Testing and acceptance criteria

- Existing tests continue to verify that the same three flagship headings appear in the same order.
- Add a test confirming the Additional Work heading and healthcare project title render.
- Add assertions for the exact paper and Colab URLs.
- Add a credibility assertion that the visible copy identifies the evaluation as four-query and exploratory.
- Production build succeeds without warnings introduced by this feature.
- Desktop and mobile layouts show no horizontal overflow, clipping, or ambiguous heading hierarchy.
- Keyboard focus remains visible on both artifact links.
- No clinical-readiness, diagnostic-accuracy, publication, or individual-ownership claim appears.

## Explicit exclusions

- Do not promote this project into the flagship three.
- Do not add a new route or full case-study page in the current CRA release.
- Do not use the paper's placeholder ACM DOI or conference metadata.
- Do not claim that similarity distance is model-dependent; retrieval is shared across the compared generators.
- Do not claim statistically robust model superiority from four prompts.
- Do not add screenshots or a live demo link in this change.
