export const projects = [
  {
    slug: "llm-infrastructure-carboncopies",
    title: "Carboncopies: Auth-aware RAG infrastructure",
    shortTitle: "Auth-aware RAG infrastructure",
    oneLineOutcome:
      "Designed an auth-aware conversation layer around an OpenAI-compatible RAG system for Carboncopies’ internal CarbonGPT console.",
    categories: ["LLM infrastructure", "RAG", "Systems"],
    status: "In progress",
    dates: { start: "2026-06", end: null, label: "June 2026–present" },
    role: "LLM Infrastructure Intern",
    featured: true,
    featuredOrder: 1,
    claimState: "Owner-supplied and résumé-supported",
    problem:
      "CarbonGPT needed a dependable boundary between guest and authenticated conversations without breaking its OpenAI-compatible surface.",
    constraints: [
      "Preserve the OpenAI-compatible chat contract",
      "Keep guest data local and authenticated history owner-scoped",
      "Fit the existing retrieval and GPU generation topology",
    ],
    systemSummary:
      "A TanStack/React console coordinates identity-aware history, retrieval, citations, and generation through a single chat interface.",
    architecture: [
      "TanStack/React client and Google OAuth",
      "Owner-scoped Postgres history and guest-only IndexedDB history",
      "ChromaDB retrieval and GPU-hosted generation",
    ],
    contributions: [
      "Architected the TypeScript/TanStack Start application and OpenAI-compatible chat surface.",
      "Designed auth sessions, storage boundaries, and cross-user isolation tests.",
      "Delivered live retrieval and citations while replacing a fragile Flowise interface.",
    ],
    decisions: [
      "Use one compatible API surface so clients and evaluation tooling remain replaceable.",
      "Make persistence an explicit consequence of authentication state.",
    ],
    evaluation: [
      "Cross-user isolation tests",
      "Retrieval and citation behavior in the first console phase",
    ],
    metrics: [],
    results: [
      "Delivered the first RAG console phase with live retrieval and citations.",
    ],
    limitations: [
      "Internal system; no public SLA or external adoption claim.",
      "The formal evaluation harness is planned work.",
    ],
    technologies: ["TypeScript", "TanStack Start", "Postgres", "IndexedDB", "ChromaDB", "OAuth"],
    artifacts: [
      {
        label: "View project materials",
        href: "https://gitlab.braingenix.org/carboncopies/CarbonGPT-Data",
        type: "source",
      },
    ],
    trace: "identity → owner-scoped history → retrieval → cited generation",
    seo: {
      title: "Auth-aware RAG infrastructure — Syed Islam",
      description: "An identity-aware conversation layer for CarbonGPT’s OpenAI-compatible RAG console.",
    },
  },
  {
    slug: "algoverse-emotion-vlm",
    title: "Algoverse: Multimodal emotion interpretability",
    shortTitle: "Multimodal emotion interpretability",
    oneLineOutcome:
      "Building an interpretability pipeline for Gemma 3 4B using appraisal-theoretic labels, ridge probes, and activation steering.",
    categories: ["Interpretability", "Multimodal LLMs", "Research"],
    status: "In progress",
    dates: { start: "2026-05", end: "2026-09", label: "May–September 2026" },
    role: "Research Fellow, VLM Interpretability",
    featured: true,
    featuredOrder: 2,
    claimState: "Experiments in progress; results withheld until evaluation is frozen",
    problem:
      "Multimodal models can describe emotion, but their internal appraisal representations and controllability remain difficult to inspect.",
    constraints: [
      "Work with a fixed Gemma 3 4B multimodal checkpoint",
      "Operate within fellowship-scale compute and time",
      "Keep the experiment modular and reproducible",
    ],
    systemSummary:
      "Appraisal-labeled stimuli flow through Gemma 3 activation extraction, linear probing, unique-effect analysis, steering, and independent VLM evaluation.",
    architecture: [
      "Gemma 3 4B through TransformerLens TransformerBridge",
      "Ridge probes and unique-effect vectors over hidden states",
      "Targeted activation steering with Qwen VLM evaluation",
    ],
    contributions: [
      "Implemented multimodal preprocessing, label alignment, and activation extraction.",
      "Built ridge-probe and unique-effect-vector analysis modules.",
      "Designed steering experiments and the external judge integration.",
    ],
    decisions: [
      "Favor linear probes for interpretable, layer-by-layer comparisons.",
      "Separate the verifier model from the model under study.",
    ],
    evaluation: [
      "Probe R² and correlation across layers and token positions",
      "Steering effect, localization, and preservation of unrelated content",
    ],
    metrics: [],
    results: [],
    limitations: [
      "Evaluation is not yet frozen, so no outcome claim is published.",
      "Linear methods may miss nonlinear representation structure.",
    ],
    technologies: ["Python", "PyTorch", "TransformerLens", "Gemma 3", "Qwen VLM", "Ridge regression"],
    artifacts: [
      {
        label: "View research repository",
        href: "https://github.com/syedmahdi30/appraisal-research-algoverse",
        type: "source",
      },
      {
        label: "Read Tak et al. (2025)",
        href: "https://arxiv.org/abs/2502.05489",
        type: "reference",
      },
    ],
    trace: "stimuli + appraisals → activations → probes → steering → external evaluation",
    seo: {
      title: "Multimodal emotion interpretability — Syed Islam",
      description: "Probing and steering appraisal-theoretic emotion representations in Gemma 3 multimodal.",
    },
  },
  {
    slug: "volatility-forecasting-ml",
    title: "Volatility forecasting: Short-horizon benchmarking",
    shortTitle: "Short-horizon volatility benchmarking",
    oneLineOutcome:
      "Built a reproducible next-day volatility benchmark and reported where tree models did—and did not—improve on a strong naive baseline.",
    categories: ["Applied ML", "Time series", "Finance"],
    status: "Completed",
    dates: { start: "2026", end: "2026", label: "2026" },
    role: "Independent researcher and engineer",
    featured: true,
    featuredOrder: 3,
    claimState: "Verified against the supplied paper and held-out test table",
    problem:
      "Test whether daily OHLCV features and tree-based models improve next-day forecasts of 10-day realized volatility for AAPL and MSFT.",
    constraints: [
      "Daily OHLCV data only",
      "Two large-cap equities and a short research timeline",
      "Chronological evaluation required to avoid leakage",
    ],
    systemSummary:
      "A reproducible Pandas and scikit-learn pipeline engineers lagged market features, trains baseline and tree models, and evaluates held-out forecasts by MAE, RMSE, and quarter.",
    architecture: [
      "Pandas/NumPy feature and target construction",
      "Naive, linear, tree, Random Forest, and gradient-boosting models",
      "Chronological split with held-out MAE/RMSE and quarterly analysis",
    ],
    contributions: [
      "Designed the research question, data pipeline, models, and evaluation protocol.",
      "Implemented reproducible features and time-aware splits.",
      "Authored the IEEE-style report and limitations analysis.",
    ],
    decisions: [
      "Retain the recent-volatility baseline as a serious benchmark.",
      "Report mixed results rather than aggregate away asset-level differences.",
    ],
    evaluation: [
      "MAE and RMSE on the final held-out period",
      "Quarterly error analysis during changing volatility regimes",
    ],
    metrics: [
      "AAPL: naive baseline best · MSFT RF: 3.9% lower RMSE",
      "MSFT RF RMSE: 0.00199 vs. naive 0.00207",
      "MSFT RF MAE: 0.00122 vs. naive 0.00119",
    ],
    results: [
      "The naive baseline remained best on AAPL.",
      "Random Forest reduced MSFT RMSE by 3.9%, while slightly worsening MAE.",
    ],
    limitations: [
      "Two stocks, one target horizon, and no intraday or options data.",
      "Forecasting study only; no transaction-cost-aware trading evaluation.",
    ],
    technologies: ["Python", "Pandas", "NumPy", "scikit-learn", "LaTeX"],
    artifacts: [
      {
        label: "View source",
        href: "https://github.com/syedmahdi30/CSMLFinalProject",
        type: "source",
      },
      {
        label: "Read paper",
        href: "/docs/Case_Studies_in_ML_Final_Project-2.pdf",
        type: "paper",
      },
    ],
    trace: "OHLCV → leakage-safe features → chronological split → benchmark comparison",
    seo: {
      title: "Short-horizon volatility benchmarking — Syed Islam",
      description: "An honest benchmark of naive and tree models for next-day realized-volatility forecasting.",
    },
  },
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
    collaboration: "Co-developed with a three-person project team.",
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
];

export const featuredProjects = projects
  .filter((project) => project.featured)
  .sort((a, b) => a.featuredOrder - b.featuredOrder);

export const additionalProjects = projects.filter((project) => !project.featured);
