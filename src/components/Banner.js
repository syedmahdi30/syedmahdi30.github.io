// Banner.js
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import TrackVisibility from 'react-on-screen';
import 'animate.css';

// Array of headshot images
const headshots = [
  "/images/headshot.jpg",
  "/images/headshot2.jpg",
  "/images/headshot3.jpg",
  "/images/headshot4.jpg",
  "/images/headshot6.jpg",
  "/images/headshot7.jpg",
  "/images/headshot8.jpg",
];

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [currentHeadshotIndex, setCurrentHeadshotIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const toRotate = ["Software Engineer", "Machine Learning Engineer", "Data Analyst", "Project Manager"];
  const period = 1000; // Increased to 1000ms for 1 second pause
  const [delta, setDelta] = useState(50 - Math.random() * 20);

  useEffect(() => {
    let ticker = setInterval(() => tick(), delta);
    return () => clearInterval(ticker);
  }, [text]);

  // Headshot rotation effect
  useEffect(() => {
    const headshotInterval = setInterval(() => {
      // Start the flip animation
      setIsFlipping(true);
      
      // After the flip animation completes, update the image
      setTimeout(() => {
        setCurrentHeadshotIndex((prevIndex) => 
          prevIndex === headshots.length - 1 ? 0 : prevIndex + 1
        );
        // Reset the flip state after a small delay to ensure smooth transition
        setTimeout(() => {
          setIsFlipping(false);
        }, 50);
      }, 1000); // Match this with the CSS transition duration
    }, 8000); // Change headshot every 8 seconds

    return () => clearInterval(headshotInterval);
  }, []);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period); // This will pause for 1 second before starting to delete
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(50 - Math.random() * 20); // Reset to original typing speed
    } else {
      setDelta(isDeleting ? 50 : 50 - Math.random() * 20); // Keep consistent speed for both typing and deleting
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="banner" id="home" data-aos="fade-up">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>{`Hi! I'm an Aspiring `}<span className="wrap">{text}</span></h1>
                  <p>Hi, I'm Syed Islam — a Computer Science + Business Applications Graduate from UCR and AI/ML Master's student at UT Austin, where I'll be diving deep into the future of intelligent systems.</p>
                  <button onClick={() => scrollToSection('connect')}>
                    Let's Connect <ArrowRightCircle size={25} />
                  </button>
                </div>
              }
            </TrackVisibility>
          </Col>
          <Col xs={12} md={5}>
            <div className={`headshot-container ${isFlipping ? 'flipping' : ''}`}>
              <div className="headshot-inner">
                <div className="headshot-front">
                  <img src={headshots[currentHeadshotIndex]} alt="Syed Islam" className="headshot" />
                </div>
                <div className="headshot-back">
                  <img src={headshots[(currentHeadshotIndex + 1) % headshots.length]} alt="Syed Islam" className="headshot" />
                </div>
              </div>
              <div className="headshot-border"></div>
            </div>
            <div className="about-me-section">
              <h3>About Me</h3>
              <div className="interest-card">
                <h4>Product Management</h4>
                <p>Interested in building user-focused products and collaborating with cross-functional teams to deliver meaningful solutions. Passionate about product strategy, problem-solving, and driving impact through iteration.</p>
              </div>
              <div className="interest-card">
                <h4>Machine Learning</h4>
                <p>Fascinated by the potential of AI/ML to solve real-world challenges—particularly in NLP and computer vision. Continuously learning and applying core ML concepts to projects and research.</p>
              </div>
              <div className="interest-card">
                <h4>Full Stack Development</h4>
                <p>Enjoy developing scalable, intuitive web applications using modern technologies. Comfortable working across the stack and eager to refine both front-end and back-end skills.</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;