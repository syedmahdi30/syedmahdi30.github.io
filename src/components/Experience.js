import React from "react";

const experiences = [
  {
    organization: "Carboncopies Foundation",
    role: "LLM Infrastructure Intern",
    dates: "June 2026–present",
    bullets: [
      "Architected CarbonGPT, a TypeScript/TanStack Start application unifying a React client with an OpenAI-compatible chat API over a LangChain.js RAG agent.",
      "Designed Google OAuth sessions, owner-scoped Postgres history, guest-only IndexedDB history, and cross-user isolation tests.",
      "Delivered live retrieval and citations while replacing a fragile Flowise interface.",
    ],
  },
  {
    organization: "Algoverse",
    role: "Research Fellow, VLM Interpretability",
    dates: "May–September 2026",
    bullets: [
      "Investigating how vision-language models encode emotion and appraisal signals across text and images.",
      "Building a Gemma 3 multimodal pipeline with TransformerLens, ridge probes, unique-effect vectors, and targeted activation steering.",
      "Working in a four-person research team under weekly mentorship.",
    ],
  },
  {
    organization: "Carboncopies Foundation",
    role: "Software Engineer Intern",
    dates: "June–August 2025",
    bullets: [
      "Engineered a role-based API server for secure contributor and administrator CLI operations.",
      "Migrated the API server from Restbed to Oat++, improving request throughput and maintainability.",
      "Designed an export API for connectome data including neuron types, 3D locations, and synapse details.",
    ],
  },
];

const capabilityGroups = [
  {
    title: "ML systems",
    items: ["PyTorch", "scikit-learn", "Transformers", "TransformerLens", "RAG", "activation steering", "evaluation", "vLLM"],
  },
  {
    title: "Data & infrastructure",
    items: ["Python", "SQL", "Postgres", "pgvector", "ChromaDB", "Apache Spark", "Docker", "Linux"],
  },
  {
    title: "Software systems",
    items: ["TypeScript", "C++", "React", "TanStack Start", "FastAPI", "REST APIs", "OAuth", "testing"],
  },
];

const Experience = () => (
  <>
    <section className="section experience-section" id="experience" aria-labelledby="experience-title">
      <div className="container">
        <div className="section-heading">
          <p className="section-index">02 / EXPERIENCE</p>
          <div>
            <h2 id="experience-title">Experience</h2>
            <p>Research and engineering work across LLM infrastructure, model interpretability, APIs, data systems, and scientific software.</p>
          </div>
        </div>
        <div className="timeline">
          {experiences.map((experience) => (
            <article className="timeline-item" key={`${experience.organization}-${experience.role}`}>
              <div className="timeline-marker" aria-hidden="true" />
              <div className="timeline-date">{experience.dates}</div>
              <div className="timeline-content">
                <p className="organization">{experience.organization}</p>
                <h3>{experience.role}</h3>
                <ul>{experience.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
    <section className="section capabilities-section" aria-labelledby="capabilities-title">
      <div className="container">
        <div className="section-heading">
          <p className="section-index">03 / CAPABILITIES</p>
          <div>
            <h2 id="capabilities-title">How I work</h2>
            <p>I combine experimental rigor with production-minded software engineering: explicit interfaces, reproducible evaluation, and systems that other people can operate.</p>
          </div>
        </div>
        <div className="capability-grid">
          {capabilityGroups.map((group) => (
            <div className="capability-group" key={group.title}>
              <h3>{group.title}</h3>
              <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Experience;
