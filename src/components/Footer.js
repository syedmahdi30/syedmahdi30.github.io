// Footer.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Github, Linkedin, Envelope } from 'react-bootstrap-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} sm={6}>
            <div className="footer-logo">
              <h2>Syed Islam</h2>
              <p>Software Engineer & AI Enthusiast</p>
            </div>
          </Col>
          <Col xs={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a 
                href="https://github.com/syedmahdi30" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                <Github />
              </a>
              <a 
                href="https://www.linkedin.com/in/syed-islam-7580401b0/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <Linkedin />
              </a>
              <a 
                href="mailto:syedmahdi30@gmail.com"
                aria-label="Send Email"
              >
                <Envelope />
              </a>
            </div>
            <p>Copyright © {new Date().getFullYear()} Syed Islam. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;