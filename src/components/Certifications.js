// Certifications.js
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// Import your certification images or badges
const cert1 = "https://source.unsplash.com/300x200/?certificate";
const cert2 = "https://source.unsplash.com/300x200/?diploma";
const cert3 = "https://source.unsplash.com/300x200/?achievement";

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
};

export const Certifications = () => {
  return (
    <section className="certifications" id="certifications">
      <div className="container">
        <div className="certifications-box">
          <h2>Certifications</h2>
          <p>Here are some of the certifications I've earned along my learning journey.</p>
          <Carousel responsive={responsive} infinite={true} className="certifications-slider">
            <div className="item">
              <img src={cert1} alt="Certification 1" />
              <h5>Frontend Development - Meta</h5>
            </div>
            <div className="item">
              <img src={cert2} alt="Certification 2" />
              <h5>React Specialization - Coursera</h5>
            </div>
            <div className="item">
              <img src={cert3} alt="Certification 3" />
              <h5>UI/UX Design - Google</h5>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};
// Add the Certifications component to the App.js file to render it on the website.
export default Certifications;