// ContactForm.js
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export const ContactForm = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({ ...formDetails, [category]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText('Sending...');
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formDetails),
    });
    setButtonText('Send');
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code === 200) {
      setStatus({ success: true, message: 'Message sent successfully' });
    } else {
      setStatus({ success: false, message: 'Something went wrong, please try again later.' });
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={require('../assets/images/contact-img.svg').default} alt="Contact Us" />
          </Col>
          <Col md={6}>
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col sm={6}>
                  <Form.Control
                    type="text"
                    placeholder="First Name"
                    value={formDetails.firstName}
                    onChange={(e) => onFormUpdate('firstName', e.target.value)}
                  />
                </Col>
                <Col sm={6}>
                  <Form.Control
                    type="text"
                    placeholder="Last Name"
                    value={formDetails.lastName}
                    onChange={(e) => onFormUpdate('lastName', e.target.value)}
                  />
                </Col>
                <Col sm={6}>
                  <Form.Control
                    type="email"
                    placeholder="Email Address"
                    value={formDetails.email}
                    onChange={(e) => onFormUpdate('email', e.target.value)}
                  />
                </Col>
                <Col sm={6}>
                  <Form.Control
                    type="tel"
                    placeholder="Phone No."
                    value={formDetails.phone}
                    onChange={(e) => onFormUpdate('phone', e.target.value)}
                  />
                </Col>
                <Col>
                  <Form.Control
                    as="textarea"
                    rows={6}
                    placeholder="Message"
                    value={formDetails.message}
                    onChange={(e) => onFormUpdate('message', e.target.value)}
                  />
                </Col>
                <Col>
                  <Button type="submit">{buttonText}</Button>
                </Col>
                {status.message && (
                  <Col>
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