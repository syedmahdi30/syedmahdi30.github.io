import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Github, Linkedin, Envelope } from 'react-bootstrap-icons';

const logo = "/images/logo.png"; // You should add your logo to public/images

const NavigationBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => setActiveLink(value);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Navbar expand="lg" className={`${scrolled ? "scrolled" : ""} sticky-top`} style={{ zIndex: 1000 }}>
      <Container>
        <Navbar.Brand style={{ cursor: 'pointer' }} onClick={() => { onUpdateActiveLink('home'); scrollToSection('home'); }}>
          <img src={logo} alt="Logo" className="navbar-logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto navbar" data-aos="fade-in">
            <Nav.Link 
              className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => { onUpdateActiveLink('home'); scrollToSection('home'); }}
            >
              Home
            </Nav.Link>
            <Nav.Link 
              className={activeLink === 'experience' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => { onUpdateActiveLink('experience'); scrollToSection('experience'); }}
            >
              Experience
            </Nav.Link>
            <Nav.Link 
              className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => { onUpdateActiveLink('projects'); scrollToSection('projects'); }}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://github.com/syedmahdi30" target="_blank" rel="noopener noreferrer">
                <Github size={25} />
              </a>
              <a href="https://www.linkedin.com/in/syed-islam-7580401b0/" target="_blank" rel="noopener noreferrer">
                <Linkedin size={25} />
              </a>
              <a href="mailto:syedmahdi30@gmail.com">
                <Envelope size={25} />
              </a>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;