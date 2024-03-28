import React from 'react';
import '../css/ProjectCard.css'; // Stylesheet for the card

const ProjectCard = ({ project }) => {
  // Default values in case project data is not provided
  const defaultProject = {
    title: 'Project Title',
    description: 'Description of the project.',
    image: '',
    demoUrl: '#',
    codeUrl: '#'
  };

  // Merge default project with provided project data
  const currentProject = { ...defaultProject, ...project };

  return (
    <div className="project-card">
      <img src={currentProject.image} alt={currentProject.title} />
      <div className="project-info">
        <h3>{currentProject.title}</h3>
        <p>{currentProject.description}</p>
        <a href={currentProject.demoUrl} target="_blank" rel="noopener noreferrer">Demo</a>
        <a href={currentProject.codeUrl} target="_blank" rel="noopener noreferrer">Code</a>
      </div>
    </div>
  );
};

export default ProjectCard;
