# Syed Islam Portfolio Design Specification

## Product goal

Build a recruiter-ready portfolio for LLM infrastructure, multimodal interpretability, applied ML, and software engineering roles. The site must help a technical recruiter or hiring manager understand Syed's positioning, inspect credible work, download the resume, and start a qualified conversation.

The primary conversion is a qualified interview conversation. The supporting funnel is:

`Understand positioning -> inspect flagship work -> download resume -> email Syed`

## Positioning

Primary position:

> ML systems engineer building reliable infrastructure for intelligent systems.

Supporting statement:

> I work across LLM tooling, interpretability, applied ML, and production software - turning experimental models into systems that can be evaluated, operated, and improved.

Do not present Product Manager, Data Analyst, Frontend Developer, and ML Engineer as equal identities. Product judgment and frontend experience support the ML systems story.

## Audience

1. Engineering managers and senior engineers hiring for LLM infrastructure, ML platform, applied ML, or research engineering roles.
2. Technical recruiters screening for relevant keywords and credible evidence.
3. Research collaborators and technical founders.

## Architecture and scope

This release is a conservative refresh on the existing React and Create React App stack. It remains a statically deployed, single-page GitHub Pages site.

- No new router.
- No server or contact API.
- No carousel.
- No CMS.
- Project content lives in `src/content/projectsData.js`.
- Flagship project cards link to stable external artifacts and expand to hash-addressable detail sections on the same page.
- The resume remains a static PDF in `public/docs/`.
- Existing Bootstrap dependencies may remain where they reduce migration risk, but new layout should prefer semantic HTML and focused CSS.

Dedicated `/work/[slug]` routes are reserved for a later Astro or Next.js rebuild.

## Information hierarchy

1. Quiet sticky navigation: name, Work, Experience, About, Resume.
2. Hero: fixed ML systems thesis, short supporting copy, primary work CTA, resume CTA, one optimized portrait.
3. Selected Work: Carboncopies, Algoverse, volatility forecasting.
4. Experience: two Carboncopies roles, Algoverse fellowship, and a concise selected-history block.
5. Capabilities: grouped, evidence-backed ML systems, data systems, and software systems competencies.
6. About and education: UT Austin and UC Riverside, plus a short statement connecting research and production engineering.
7. Contact: email, GitHub, LinkedIn, and resume.
8. Footer: compact identity and current year.

## Visible copy

### Navigation

- Syed Islam
- Work
- Experience
- About
- Resume

### Hero

H1:

> ML systems engineer building reliable infrastructure for intelligent systems.

Body:

> I work across LLM tooling, multimodal interpretability, applied ML, and production software - turning experimental models into systems that can be evaluated, operated, and improved.

Primary CTA: `View selected work`

Secondary CTA: `Download resume`

Utility links: GitHub and LinkedIn.

Do not use an eyebrow, badge, rotating title, typewriter text, or animated portrait.

### Selected Work introduction

Heading: `Selected work`

Body:

> Three projects spanning production RAG infrastructure, multimodal interpretability, and honest time-series evaluation.

### Experience introduction

Heading: `Experience`

Body:

> Research and engineering work across LLM infrastructure, model interpretability, APIs, data systems, and scientific software.

### Capabilities introduction

Heading: `How I work`

Body:

> I combine experimental rigor with production-minded software engineering: explicit interfaces, reproducible evaluation, and systems that other people can operate.

### About

Heading: `About`

Body:

> I am an MS Artificial Intelligence student at the University of Texas at Austin and a UC Riverside Computer Science with Business Applications graduate. My work sits between research prototypes and dependable software, with a focus on making ML systems easier to evaluate, understand, and maintain.

### Contact

Heading: `Building ML systems that need careful engineering?`

Body:

> I am interested in LLM infrastructure, applied ML, research engineering, and software engineering opportunities.

Primary CTA: `Email Syed`

Secondary CTA: `View resume`

## Flagship projects

### 1. Carboncopies - Auth-aware RAG infrastructure

- Slug: `llm-infrastructure-carboncopies`
- Status: In progress
- Role: LLM Infrastructure Intern
- Dates: June 2026-present
- Categories: LLM Infrastructure, RAG, Systems
- Summary: Designed an auth-aware conversation layer around an OpenAI-compatible RAG system for Carboncopies' internal CarbonGPT console.
- Architecture evidence: TanStack/React client, Google OAuth, owner-scoped history in Postgres, guest-only history in IndexedDB, ChromaDB retrieval, and GPU-hosted generation.
- Outcome: Delivered the first RAG console phase with live retrieval and citations while replacing a fragile Flowise interface.
- Public artifact: `https://gitlab.braingenix.org/carboncopies/CarbonGPT-Data`
- Evidence state: owner supplied and supported by the current resume. Do not claim an external SLA, customer adoption, or completed evaluation harness.

### 2. Algoverse - Multimodal emotion interpretability

- Slug: `algoverse-emotion-vlm`
- Status: In progress
- Role: Research Fellow, VLM Interpretability
- Dates: May 2026-September 2026
- Categories: Interpretability, Multimodal LLMs, Research
- Summary: Building an interpretability pipeline for Gemma 3 4B that uses appraisal-theoretic labels, ridge probes, and activation steering to study emotional representations in multimodal language models.
- Architecture evidence: multimodal preprocessing, TransformerLens activation extraction, ridge probes, unique-effect vectors, steering experiments, and a Qwen VLM evaluation layer.
- Research reference: Tak et al. (2025), Mechanistic Interpretability of Emotion Inference in LLMs, `https://arxiv.org/abs/2502.05489`.
- Public artifact: `https://github.com/syedmahdi30/appraisal-research-algoverse`
- Evidence state: experiments in progress. Do not publish qualitative or quantitative result claims until evaluation is frozen. Do not use “NeurIPS-grade” or “NeurIPS/EMNLP-ready.”

### 3. Volatility forecasting - Time-series benchmarking

- Slug: `volatility-forecasting-ml`
- Status: Completed
- Role: Independent researcher and engineer
- Date: 2026
- Categories: Applied ML, Time Series, Finance
- Summary: Built a reproducible pipeline for next-day forecasts of 10-day realized volatility for AAPL and MSFT using daily OHLCV features and chronological evaluation.
- Architecture evidence: Pandas and NumPy feature pipeline; naive, rolling-mean, linear, decision-tree, Random Forest, and gradient-boosting models; held-out MAE and RMSE; quarterly error analysis.
- Honest result: The naive baseline remained best for AAPL. For MSFT, Random Forest improved RMSE from 0.00207 to 0.00199, a 3.9% reduction, while MAE worsened from 0.00119 to 0.00122. Tree models were most useful during more volatile quarters, while recent realized volatility dominated feature importance.
- Paper: `/docs/Case_Studies_in_ML_Final_Project-2.pdf`
- Source: `https://github.com/syedmahdi30/CSMLFinalProject`
- Evidence state: verified against the supplied paper and test table.

## Content model

Each project object contains:

- `slug`
- `title`
- `shortTitle`
- `oneLineOutcome`
- `categories[]`
- `status`
- `dates { start, end, label }`
- `role`
- `featured`
- `featuredOrder`
- `claimState`
- `problem`
- `constraints[]`
- `systemSummary`
- `architecture[]`
- `contributions[]`
- `decisions[]`
- `evaluation[]`
- `metrics[]`
- `results[]`
- `limitations[]`
- `technologies[]`
- `artifacts[]`
- `seo { title, description }`

Unavailable artifacts are omitted rather than represented by placeholder URLs or `null` links.

## Experience content

### Carboncopies Foundation - LLM Infrastructure Intern

June 2026-present, remote.

- Architected CarbonGPT, a TypeScript/TanStack Start application that unifies a React client with an OpenAI-compatible chat API over a LangChain.js RAG agent.
- Designed Google OAuth sessions, owner-scoped Postgres history, guest-only IndexedDB history, and cross-user isolation tests.
- Delivered the first RAG console phase with live retrieval and citations, replacing a fragile Flowise interface, and authored the next-phase plan for auth, persistence, and security testing.

### Algoverse - Research Fellow, VLM Interpretability

May 2026-September 2026, remote.

- Investigating how vision-language models encode emotion and appraisal signals across text and images.
- Building a Gemma 3 multimodal interpretability pipeline with TransformerLens, ridge probes, unique-effect vectors, and targeted activation steering.
- Working in a four-person research team under weekly mentorship.

### Carboncopies Foundation - Software Engineer Intern

June 2025-August 2025, remote.

- Engineered a role-based API server for secure contributor and administrator CLI operations.
- Migrated the API server from Restbed to Oat++, improving request throughput and maintainability.
- Designed an export API for connectome data including neuron types, 3D locations, and synapse details.

## Capability groups

### ML systems

PyTorch, scikit-learn, Transformers, TransformerLens, ridge probes, activation steering, RAG, evaluation harnesses, vLLM.

### Data and infrastructure

Python, SQL, Postgres, pgvector, ChromaDB, FAISS, Apache Spark, Docker, Linux, CI/CD, geospatial processing.

### Software systems

TypeScript, JavaScript, C++, React, TanStack Start, FastAPI, REST and OpenAI-compatible APIs, OAuth, testing.

The interface may show a maximum of 8-10 items per group. Do not restore the old 23-icon inventory.

## Visual system

Direction: a systems dossier - technical, editorial, restrained, and evidence-led rather than cyberpunk or generic AI-gradient styling.

### Palette

- Paper: `#F7F8FA`
- White: `#FFFFFF`
- Ink: `#101827`
- Muted slate: `#596579`
- Cobalt: `#315CFF`
- Signal teal: `#087F73`
- Border: `#D8DEE8`
- Dark system panel: `#111827`

### Typography

- Display and section headings: Newsreader or a comparable restrained editorial serif with fallback to Georgia.
- Body and controls: IBM Plex Sans with system sans-serif fallback.
- Technical labels and system traces: IBM Plex Mono with monospace fallback.

External font requests should not block rendering. Prefer locally safe fallbacks in this release if adding font files would expand scope.

### Layout

- Maximum content width: 1180px.
- Reading width: 680-760px.
- Desktop grid: 12 columns with generous gutters.
- Section spacing: fluid 80-128px desktop, 56-80px mobile.
- First viewport: text-led hero occupying roughly two-thirds of the width with a single portrait frame on the right.
- Selected Work uses one dominant Carboncopies row followed by two balanced supporting project panels. It must not look like a generic equal-card grid.
- Experience uses an open timeline/list rather than boxed cards.
- Capabilities use three textual columns separated by rules.

### Signature element

Each flagship project includes a compact system trace:

`problem/input -> system or intervention -> evaluation -> observed outcome`

This is structural content, not decorative pseudo-code.

### Motion

- One restrained hero/page-entry reveal using opacity and transform only.
- Subtle link, button, and project-row hover feedback.
- No autoplay, typewriter effect, portrait flipping, repeated scroll animation, or `transition: all`.
- All nonessential motion is disabled by `prefers-reduced-motion: reduce`.

## Accessibility requirements

- WCAG 2.2 AA target.
- Semantic `header`, `nav`, `main`, `section`, and `footer` landmarks.
- One H1 and logical heading hierarchy.
- Skip-to-content link.
- Real links for navigation and real buttons for actions.
- Visible `:focus-visible` states.
- Descriptive portrait alternative text and empty alternatives for decorative graphics.
- Decorative icons use `aria-hidden="true"`.
- Minimum 44 by 44 CSS-pixel touch targets where practical.
- Text contrast of at least 4.5:1.
- Page remains usable at 200% zoom.
- No horizontal overflow at 320px.

## Responsive requirements

Verify at 320, 375, 768, 1024, and 1440px.

- Hero becomes a single column below tablet width, with portrait after CTAs.
- Selected Work becomes a readable vertical sequence without hiding content.
- All important information remains visible without hover.
- Technical labels wrap or scroll safely.
- Body text remains at least 16px with a comfortable line length.
- Navigation collapses without trapping focus or obscuring page anchors.

## Image requirements

- Use only `public/images/headshot.jpg` as the portrait source.
- Produce an optimized WebP derivative no larger than 1600px on its longest displayed dimension.
- Target portrait payload below 250KB where quality permits.
- Set explicit image width and height.
- Use `fetchPriority="high"` for the hero portrait and lazy loading for below-fold images.
- Do not use the other eight rotating headshots.

## Metadata and discovery

- Title: `Syed Islam - ML Systems Engineer`
- Description: `Portfolio of Syed Islam, an ML systems engineer working across LLM infrastructure, multimodal interpretability, applied machine learning, and production software.`
- Canonical: `https://syedmahdi30.github.io/`
- Open Graph and Twitter summary metadata.
- Resume link: `/docs/Syed_Resume_Current%20copy.pdf` for this release.
- Correct manifest name and short name.
- Theme color matches the light page background.
- Person JSON-LD with name, URL, role description, alumni and education references, and same-as links.

## Contact and analytics

Contact uses `mailto:syedmahdi30@gmail.com`; do not mount or operate the existing Express/Nodemailer backend.

If analytics is added, use a privacy-conscious provider and track only:

- selected project opened
- resume downloaded
- project source opened
- email clicked
- LinkedIn clicked

Analytics is optional for this release and must not block launch.

## Testing and acceptance criteria

- Build exits successfully.
- Tests cover hero positioning, all three flagship projects, accurate volatility result text, resume link, and contact link.
- Axe reports no serious or critical violations on the homepage.
- Keyboard users can reach every navigation and CTA target with visible focus.
- Browser console has no relevant errors or warnings.
- Desktop and mobile screenshots have no clipping, overlap, missing assets, or unwanted horizontal scrolling.
- `prefers-reduced-motion` removes nonessential animation.
- The first viewport identifies Syed's role, specialty, flagship-work action, and resume action without scrolling.
- No unsupported project result appears in visible copy.

## Explicit exclusions

- No case-study router in the CRA release.
- No custom contact form or backend deployment.
- No certification carousel.
- No NMT project.
- No emotion-classifier project.
- No placeholder source, paper, demo, image, or case-study URLs.
- No invented metrics, client adoption, publication status, or research findings.
