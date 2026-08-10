import React from "react";

const About = () => (
  <section className="section about-section" id="about" aria-labelledby="about-title">
    <div className="container about-grid">
      <p className="section-index">04 / ABOUT</p>
      <div>
        <h2 id="about-title">About</h2>
        <p className="about-lead">I am an MS Artificial Intelligence student at the University of Texas at Austin and a UC Riverside Computer Science with Business Applications graduate. My work sits between research prototypes and dependable software, with a focus on making ML systems easier to evaluate, understand, and maintain.</p>
        <div className="education-grid">
          <div>
            <span>Graduate</span>
            <strong>University of Texas at Austin</strong>
            <p>MS, Artificial Intelligence</p>
          </div>
          <div>
            <span>Undergraduate</span>
            <strong>University of California, Riverside</strong>
            <p>BS, Computer Science with Business Applications</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
