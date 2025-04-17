// Banner.js
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import TrackVisibility from 'react-on-screen';
import 'animate.css';

const headerImg = "https://via.placeholder.com/500x500?text=Header";
const headshot = "/images/headshot.jpg"; // Make sure to add your headshot image to the public/images folder

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const toRotate = ["Software Engineer", "Web Developer", "AI Engineer", "Data Analyst", "Project Manager"];
  const period = 1000;
  const [delta, setDelta] = useState(150 - Math.random() * 50);

  useEffect(() => {
    let ticker = setInterval(() => tick(), delta);
    return () => clearInterval(ticker);
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    } else {
      setDelta(isDeleting ? delta / 2 : delta);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>{`Hi! I'm an Aspiring `}<span className="wrap">{text}</span></h1>
                  <p>Hi, I'm Syed Islam — a 4th-year Computer Science + Business Applications student at UCR and soon-to-be AI/ML Master's student at UT Austin, where I'll be diving deep into the future of intelligent systems.</p>
                  <button onClick={() => console.log('Connect clicked')}>
                    Let's Connect <ArrowRightCircle size={25} />
                  </button>
                </div>
              }
            </TrackVisibility>
          </Col>
          <Col xs={12} md={5}>
            <div className="headshot-container">
              <img src={headshot} alt="Syed Islam" className="headshot" />
              <div className="headshot-border"></div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;