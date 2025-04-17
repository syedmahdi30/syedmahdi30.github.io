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
    title: "Project One", 
    description: "A detailed description of project one. This project demonstrates my skills in web development and showcases innovative solutions to real-world problems.", 
    imgUrl: "https://source.unsplash.com/300x200/?code,website",
    projectUrl: "https://github.com/yourusername/project1"
  },
  { 
    title: "Project Two", 
    description: "Description for project two. This project highlights my expertise in UI/UX design and frontend development.", 
    imgUrl: "https://source.unsplash.com/300x200/?design,app",
    projectUrl: "https://github.com/yourusername/project2"
  },
  { 
    title: "Project Three", 
    description: "Description for project three. This project showcases my backend development skills and database management capabilities.", 
    imgUrl: "https://source.unsplash.com/300x200/?uiux,development",
    projectUrl: "https://github.com/yourusername/project3"
  },
];

export const Projects = () => {
  return (
    <section className="project" id="projects">
      <Container>
        <div className="project-box">
          <h2>Projects</h2>
          <p>Here are some of the projects I've worked on. Click on a card to see more details.</p>
          <Carousel responsive={responsive} infinite={true} className="project-slider">
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