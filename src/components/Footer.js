import React from "react";

const Footer = () => (
  <footer className="site-footer">
    <div className="container footer-grid">
      <div>
        <strong>Syed Islam</strong>
        <p>ML systems engineer</p>
      </div>
      <div className="footer-links">
        <a href="https://github.com/syedmahdi30" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/syed-islam-7580401b0/" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="mailto:syedmahdi30@gmail.com">Email</a>
      </div>
      <p>© {new Date().getFullYear()} Syed Islam</p>
    </div>
  </footer>
);

export default Footer;
