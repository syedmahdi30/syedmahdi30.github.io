import React from "react";

const Banner = () => (
  <section className="hero" id="home" aria-labelledby="hero-title">
    <div className="container hero-grid">
      <div className="hero-copy">
        <p className="section-index" aria-hidden="true">00 / POSITIONING</p>
        <h1 id="hero-title">
          ML systems engineer building reliable infrastructure for intelligent systems.
        </h1>
        <p className="hero-deck">
          I work across LLM tooling, multimodal interpretability, applied ML, and
          production software—turning experimental models into systems that can be
          evaluated, operated, and improved.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#work">View selected work</a>
          <a
            className="button button-secondary"
            href="/docs/Syed_Resume_Current%20copy.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Download resume
          </a>
        </div>
        <div className="utility-links" aria-label="Social profiles">
          <a href="https://github.com/syedmahdi30" target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href="https://www.linkedin.com/in/syed-islam-7580401b0/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
        </div>
      </div>
      <figure className="portrait-frame">
        <img
          src="/images/headshot-optimized.jpg"
          alt="Syed Islam"
          width="1200"
          height="1500"
          decoding="async"
          fetchPriority="high"
        />
        <figcaption>Based in California · MS Artificial Intelligence, UT Austin</figcaption>
      </figure>
    </div>
  </section>
);

export default Banner;
