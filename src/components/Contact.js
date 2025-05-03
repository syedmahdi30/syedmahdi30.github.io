import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Contact = () => {
  const [formDetails, setFormDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState({ success: false, message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ success: false, message: 'Sending...' });

    try {
      const apiBase = 'https://syed-personal-portfolia.onrender.com';
      const response = await fetch(`${apiBase}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(formDetails),
      });

      const result = await response.json();
      
      if (response.ok) {
        setStatus({ success: true, message: 'Message sent successfully' });
        setFormDetails({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: ''
        });
      } else {
        setStatus({ success: false, message: result.message || 'Something went wrong' });
      }
    } catch (error) {
      setStatus({ success: false, message: 'Something went wrong' });
    }
  };

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  return (
    <section className="contact" id="connect" data-aos="fade-up">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <div className="contact-info">
              <h2>Get In Touch</h2>
              <p>I'm always interested in hearing about new opportunities, projects, and collaborations.</p>
              <div className="contact-details">
                <p><strong>Email:</strong> syedmahdi30@gmail.com</p>
                <p><strong>Location:</strong> Reseda, CA</p>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="contact-form">
              <form onSubmit={handleSubmit}>
                <Row>
                  <Col sm={6} className="px-1">
                    <input
                      type="text"
                      value={formDetails.firstName}
                      placeholder="First Name"
                      onChange={(e) => onFormUpdate('firstName', e.target.value)}
                      className="form-control"
                    />
                  </Col>
                  <Col sm={6} className="px-1">
                    <input
                      type="text"
                      value={formDetails.lastName}
                      placeholder="Last Name"
                      onChange={(e) => onFormUpdate('lastName', e.target.value)}
                      className="form-control"
                    />
                  </Col>
                  <Col sm={6} className="px-1">
                    <input
                      type="email"
                      value={formDetails.email}
                      placeholder="Email Address"
                      onChange={(e) => onFormUpdate('email', e.target.value)}
                      className="form-control"
                    />
                  </Col>
                  <Col sm={6} className="px-1">
                    <input
                      type="tel"
                      value={formDetails.phone}
                      placeholder="Phone No."
                      onChange={(e) => onFormUpdate('phone', e.target.value)}
                      className="form-control"
                    />
                  </Col>
                  <Col className="px-1">
                    <textarea
                      rows="6"
                      value={formDetails.message}
                      placeholder="Message"
                      onChange={(e) => onFormUpdate('message', e.target.value)}
                      className="form-control"
                    ></textarea>
                  </Col>
                  <Col className="px-1">
                    <button type="submit" className="submit-btn">
                      Send Message
                    </button>
                  </Col>
                </Row>
              </form>
              {status.message && (
                <div className={`status ${status.success ? 'success' : 'error'}`}>
                  {status.message}
                </div>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact; 