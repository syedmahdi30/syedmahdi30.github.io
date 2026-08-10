import React from "react";
import { additionalProjects, featuredProjects } from "../content/projectsData";

const Project = ({ project, index }) => (
  <article className="project-row" id={project.slug} role="listitem">
    <div className="project-number" aria-hidden="true">0{index + 1}</div>
    <div className="project-main">
      <div className="project-meta">
        <span>{project.categories.join(" · ")}</span>
        <span>{project.dates.label}</span>
      </div>
      <h3>{project.title}</h3>
      <p className="project-outcome">{project.oneLineOutcome}</p>
      <div className="project-details-grid">
        <div>
          <h4>System</h4>
          <p>{project.systemSummary}</p>
        </div>
        <div>
          <h4>Evidence</h4>
          {project.metrics.length > 0 ? (
            <ul className="metric-list">
              {project.metrics.map((metric) => <li key={metric}>{metric}</li>)}
            </ul>
          ) : (
            <p>{project.claimState}</p>
          )}
        </div>
      </div>
      <ul className="technology-list" aria-label={`${project.shortTitle} technologies`}>
        {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
      </ul>
    </div>
    <div className="project-actions" aria-label={`${project.shortTitle} artifacts`}>
      <span className={`status status-${project.status === "Completed" ? "complete" : "progress"}`}>
        {project.status}
      </span>
      {project.artifacts.map((artifact) => (
        <a
          key={artifact.href}
          href={artifact.href}
          target="_blank"
          rel="noreferrer"
        >
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

const Projects = () => (
  <section className="section work-section" id="work" aria-labelledby="work-title">
    <div className="container">
      <div className="section-heading">
        <p className="section-index">01 / SELECTED WORK</p>
        <div>
          <h2 id="work-title">Selected work</h2>
          <p>Three projects spanning production RAG infrastructure, multimodal interpretability, and honest time-series evaluation.</p>
        </div>
      </div>
      <div className="project-list" role="list" aria-label="Flagship projects">
        {featuredProjects.map((project, index) => (
          <Project key={project.slug} project={project} index={index} />
        ))}
      </div>
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
    </div>
  </section>
);

export default Projects;
