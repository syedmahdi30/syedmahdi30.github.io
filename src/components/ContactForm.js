// ContactForm.js
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Envelope, Send } from 'react-bootstrap-icons';

export const ContactForm = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send Message');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({ ...formDetails, [category]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText('Sending...');
    
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDetails),
      });

      const result = await response.json();
      
      if (result.success) {
        setStatus({ success: true, message: result.message });
        setFormDetails(formInitialDetails);
      } else {
        setStatus({ success: false, message: result.message });
      }
    } catch (error) {
      setStatus({ success: false, message: 'Error sending message. Please try again later.' });
    } finally {
      setButtonText('Send Message');
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <div className="contact-info">
              <h2>Get In Touch</h2>
              <p>Feel free to reach out to me for any opportunities or just to say hello!</p>
              <div className="contact-details">
                <p><Envelope /> syedmahdi30@gmail.com</p>
                <p>📍 Los Angeles, California</p>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <Form onSubmit={handleSubmit} className="contact-form">
              <Row>
                <Col sm={6} className="px-1">
                  <Form.Control
                    type="text"
                    placeholder="First Name"
                    value={formDetails.firstName}
                    onChange={(e) => onFormUpdate('firstName', e.target.value)}
                    required
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <Form.Control
                    type="text"
                    placeholder="Last Name"
                    value={formDetails.lastName}
                    onChange={(e) => onFormUpdate('lastName', e.target.value)}
                    required
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <Form.Control
                    type="email"
                    placeholder="Email Address"
                    value={formDetails.email}
                    onChange={(e) => onFormUpdate('email', e.target.value)}
                    required
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <Form.Control
                    type="tel"
                    placeholder="Phone No."
                    value={formDetails.phone}
                    onChange={(e) => onFormUpdate('phone', e.target.value)}
                  />
                </Col>
                <Col className="px-1">
                  <Form.Control
                    as="textarea"
                    rows={6}
                    placeholder="Message"
                    value={formDetails.message}
                    onChange={(e) => onFormUpdate('message', e.target.value)}
                    required
                  />
                </Col>
                <Col className="px-1">
                  <Button type="submit" className="submit-btn">
                    {buttonText} <Send className="ms-2" />
                  </Button>
                </Col>
                {status.message && (
                  <Col className="px-1">
                    <p className={status.success ? "success" : "danger"}>{status.message}</p>
                  </Col>
                )}
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactForm;