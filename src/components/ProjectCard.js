// ProjectCard.js
import React from 'react';
import { Card } from 'react-bootstrap';

const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Card className="project-card">
      <Card.Img variant="top" src={imgUrl} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;