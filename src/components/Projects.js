// Projects.js
import React from 'react';
import { Container } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProjectCard from './ProjectCard';

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
};

const projects = [
  { 
    title: "AI-Powered Portfolio Analyzer", 
    description: "Developed a machine learning model that analyzes investment portfolios and provides personalized recommendations. Built with Python, TensorFlow, and React. Features include risk assessment, performance prediction, and automated rebalancing suggestions.", 
    imgUrl: "/images/projects/portfolio-analyzer.jpg",
    projectUrl: "https://github.com/yourusername/portfolio-analyzer"
  },
  { 
    title: "Smart Campus Navigation", 
    description: "Created an interactive campus navigation system using React and Google Maps API. Includes real-time location tracking, optimized route planning, and accessibility features for students with disabilities.", 
    imgUrl: "/images/projects/campus-nav.jpg",
    projectUrl: "https://github.com/yourusername/campus-navigation"
  },
  { 
    title: "Data Visualization Dashboard", 
    description: "Built an interactive dashboard for visualizing complex datasets using D3.js and React. Features include real-time data updates, customizable charts, and export functionality for reports.", 
    imgUrl: "/images/projects/dashboard.jpg",
    projectUrl: "https://github.com/yourusername/data-dashboard"
  },
];

export const Projects = () => {
  return (
    <section className="project" id="projects">
      <Container>
        <div className="project-box">
          <h2>Projects</h2>
          <p>Here are some of the projects I've worked on. Click on a card to see more details.</p>
          <Carousel 
            responsive={responsive} 
            infinite={true} 
            className="project-slider"
            autoPlay={true}
            autoPlaySpeed={5000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {projects.map((project, index) => (
              <div key={index} className="item">
                <ProjectCard {...project} />
              </div>
            ))}
          </Carousel>
        </div>
      </Container>
    </section>
  );
};

export default Projects;