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
];

export const featuredProjects = projects
  .filter((project) => project.featured)
  .sort((a, b) => a.featuredOrder - b.featuredOrder);
