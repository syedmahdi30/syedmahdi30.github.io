// Footer.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../assets/images/logo.svg';
import { MailchimpForm } from './MailchimpForm';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col sm={6} className="text-center">
            <div className="social-icon">
              <a href="#"><img src="path-to-linkedin-icon" alt="LinkedIn" /></a>
              {/* Add additional social links */}
            </div>
            <p>© 2025 Your Name. All Rights Reserved</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <MailchimpForm />
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;