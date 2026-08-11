# Chicago Crime Additional Work Design

## Goal

Add the completed Chicago crime data analysis project to the portfolio as a supporting Additional Work entry without changing the three-project flagship hierarchy. Present Syed's project leadership and broad technical contribution accurately while limiting quantitative claims to evidence preserved in the supplied repository or confirmed by Syed.

## Placement and hierarchy

- Keep Carboncopies, Algoverse, and volatility forecasting as the only flagship projects and preserve their order.
- Keep the bilingual medical terminology RAG benchmark as the first Additional Work entry.
- Add Chicago crime data analysis as the second Additional Work entry because it was completed in 2025.
- Reuse the existing compact supporting-project presentation rather than adding a route, modal, screenshot, or fourth flagship row.
- Expand the Additional Work introduction so it covers applied data engineering, geospatial analysis, and ML evaluation rather than only RAG.

## Evidence and claim boundaries

### Repository-supported evidence

The supplied `a-5` branch contains:

- A README that identifies a five-person CS 167 project team and a Chicago crime dataset containing 14 million points.
- A project specification covering ZIP-code spatial enrichment, Parquet conversion, spatial aggregation, temporal queries, spatiotemporal filtering, visualizations, and arrest prediction.
- A Scala/Spark implementation of the arrest-prediction stage using combined crime-type and description text, `Tokenizer`, `HashingTF`, `StringIndexer`, logistic regression, a seeded 80/20 split, and precision/recall evaluation.
- Commit history showing Syed authored and updated the ML implementation and repository content in March 2025.

### Owner-confirmed evidence

Syed confirmed that he led the project and contributed across spatial joins, Parquet preparation, analysis, visualization, and modeling rather than only the arrest-prediction file preserved on the branch.

### Claims to omit

- Do not publish precision, recall, compression, runtime, or accuracy values because the supplied branch does not preserve the final measured results.
- Do not call visualizations interactive; the specification describes QGIS, spreadsheet, and Python-generated outputs.
- Do not imply sole authorship; describe Syed as the project lead of a five-person course team.
- Do not imply that the public repository preserves every implemented pipeline stage or the final report.

## Portfolio content

### Identity

- Slug: `chicago-crime-data-analysis`
- Title: `Chicago crime data analysis`
- Status: `Completed`
- Date: `2025`
- Role: `Project lead and data engineer`
- Collaboration: `Led a five-person course team across data engineering, spatial analysis, visualization, and modeling.`
- Categories: `Data engineering`, `Geospatial analytics`, `Applied ML`

### Outcome

> Led a five-person team building a Spark and Scala pipeline for Chicago crime data, spanning ZIP-code spatial enrichment, Parquet preparation, spatiotemporal analysis, and arrest prediction.

### System and evidence

- Prepared Chicago crime records with normalized columns, point geometries, and ZIP codes assigned through spatial joins against Census boundaries.
- Converted prepared records to Parquet for column-oriented downstream processing.
- Produced ZIP-level spatial aggregation, date-range crime-type analysis, and rectangular spatiotemporal filtering outputs for visualization.
- Built a Spark ML pipeline that tokenized crime type and description text, generated hashed text features, indexed arrest labels, and trained logistic regression on a seeded 80/20 split.
- Evaluated the classifier with precision, recall, and training time without publishing unverified values.

### Compact evidence line

`14 million crime points · ZIP-code spatial join · Parquet pipeline · Spark ML arrest prediction`

This line describes the dataset and pipeline scope; it does not claim that 14 million points were used in every evaluation run.

### System trace

`crime records + Census boundaries → spatial ZIP enrichment → Parquet + analytics → arrest prediction`

### Technologies

- Scala
- Apache Spark
- Spark SQL
- Spark MLlib
- Beast
- Parquet
- QGIS

### Artifact

- Source: `https://github.com/syedmahdi30/cs167-final-project/tree/a-5`

No paper, report, live demo, or measured-result link is available from the supplied branch.

## Content architecture

- Add the project to `src/content/projectsData.js` with `featured: false` after the existing healthcare project.
- Replace the healthcare-specific `team` field with a reusable `collaboration` string containing the complete visible attribution sentence.
- Set healthcare `collaboration` to `Co-developed with a three-person project team.`
- Set Chicago `collaboration` to the leadership sentence defined above.
- Update `AdditionalProject` to render `project.collaboration` directly instead of constructing `Co-developed with a ${project.team}`.
- Keep `additionalProjects` derived from non-featured entries; array order determines the intended newest-to-oldest presentation.

## Component behavior

- Keep the flagship `Project` renderer unchanged.
- Reuse `AdditionalProject` for both supporting projects.
- Update the Additional Work introduction to: `Applied data, retrieval, and evaluation work that complements the flagship systems above.`
- Render the Chicago title as an `h4` within the existing Additional Work region.
- Render the source link in a new tab with the existing safe `rel` behavior.
- Render the `Completed` status with the existing completed-state styling.

## Visual and responsive behavior

- Reuse existing status, metadata, evidence, technology, artifact, and system-trace styles.
- Stack the two supporting entries vertically inside the existing list.
- Preserve borders and spacing so each entry reads independently.
- At narrow widths, keep the existing one-column action layout and prevent system-trace overflow.
- Do not add an image, bespoke card style, animation, or new dependency.

## Testing and acceptance criteria

- Existing tests continue to verify that the same three flagship headings appear in the same order.
- The Additional Work region contains both supporting projects in healthcare-then-Chicago order.
- Chicago renders with an `h4` title, project-lead role, five-person leadership attribution, exact compact evidence line, and exact repository URL.
- Healthcare retains its existing three-person collaboration wording after the schema migration.
- No unsupported numeric model result appears in visible Chicago copy.
- Tests and production build succeed without new warnings.
- `git diff --check` succeeds.
- Desktop and mobile rendering show no clipping, overlap, or horizontal overflow; if an in-app browser is unavailable, report that visual QA remains unverified rather than substituting a claim.

## Explicit exclusions

- Do not promote Chicago into the flagship three.
- Do not add a case-study route, modal, screenshot, or downloadable report.
- Do not restore the old carousel or the old long-form Chicago card copy.
- Do not claim 80% Parquet compression, interactive visualizations, or classifier metric values.
- Do not describe the work as an individual project.
