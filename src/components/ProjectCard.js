// ProjectCard.js
import React, { useState } from 'react';
import { Card } from 'react-bootstrap';

const ProjectCard = ({ title, description, imgUrl, projectUrl }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="project-card-container" onClick={handleClick}>
      <div className={`project-card ${isFlipped ? 'flipped' : ''}`}>
        <div className="project-card-front">
          <Card>
            <Card.Img variant="top" src={imgUrl} alt={title} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <div className="project-link">
                <a href={projectUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                  View Project
                </a>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="project-card-back">
          <Card>
            <Card.Body>
              <Card.Text>{description}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;