import React from 'react';
import { Link } from 'react-router-dom';
import './Project.css';

const Project = ({ project }) => {
  return (
    <div className="project">
      <h3>{project.title}</h3>
      <p>
        <a href={project.deployedVersion} target="_blank" rel="noopener noreferrer">Deployed Version</a>
      </p>
      <p>
       <a href={project.githubRepo} target="_blank" rel="noopener noreferrer">GitHub Repository</a>
      </p>
      <img src={project.screenshot} alt={project.title} />
    </div>
  );
};

export default Project;
