// Projects.js
import React from 'react';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
const projImg1 = "https://source.unsplash.com/300x200/?code,website";
const projImg2 = "https://source.unsplash.com/300x200/?design,app";
const projImg3 = "https://source.unsplash.com/300x200/?uiux,development";

const projects = [
  { title: "Project One", description: "Description for project one", imgUrl: projImg1 },
  { title: "Project Two", description: "Description for project two", imgUrl: projImg2 },
  { title: "Project Three", description: "Description for project three", imgUrl: projImg3 },
];

export const Projects = () => {
  return (
    <section className="project" id="projects">
      <Container>
        <h2>Projects</h2>
        <Tab.Container id="projects-tabs" defaultActiveKey="first">
          <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center">
            <Nav.Item>
              <Nav.Link eventKey="first">Tab One</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Tab Two</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third">Tab Three</Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <Row>
                {projects.map((project, index) => (
                  <Col key={index} sm={6} md={4}>
                    <ProjectCard {...project} />
                  </Col>
                ))}
              </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              {/* Additional content for Tab Two */}
            </Tab.Pane>
            <Tab.Pane eventKey="third">
              {/* Additional content for Tab Three */}
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </Container>
    </section>
  );
};

export default Projects;