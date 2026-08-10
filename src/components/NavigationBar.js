import React from "react";

const resumePath = "/docs/Syed_Resume_Current%20copy.pdf";

const NavigationBar = () => (
  <header className="site-header">
    <nav className="site-nav container" aria-label="Primary navigation">
      <a className="wordmark" href="#home" aria-label="Syed Islam, home">
        Syed Islam
      </a>
      <div className="nav-links">
        <a href="#work">Work</a>
        <a href="#experience">Experience</a>
        <a href="#about">About</a>
        <a className="nav-resume" href={resumePath} target="_blank" rel="noreferrer">
          Resume <span aria-hidden="true">↗</span>
        </a>
      </div>
    </nav>
  </header>
);

export default NavigationBar;
