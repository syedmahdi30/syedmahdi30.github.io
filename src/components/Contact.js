import React from "react";

const Contact = () => (
  <section className="contact-section" id="contact" aria-labelledby="contact-title">
    <div className="container contact-grid">
      <div>
        <p className="section-index">05 / CONTACT</p>
        <h2 id="contact-title">Building ML systems that need careful engineering?</h2>
        <p>I am interested in LLM infrastructure, applied ML, research engineering, and software engineering opportunities.</p>
      </div>
      <div className="contact-actions">
        <a className="button button-inverse" href="mailto:syedmahdi30@gmail.com">Email Syed</a>
        <a className="text-link" href="/docs/Syed_Resume_Current%20copy.pdf" target="_blank" rel="noreferrer">View resume ↗</a>
      </div>
    </div>
  </section>
);

export default Contact;
