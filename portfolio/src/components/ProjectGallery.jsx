import React from 'react';
import Project from './Project/Project';
import projectsData from './Projects.json'

const ProjectGallery = () => {
  return (
    <div className="project-gallery">
      {projectsData.map((project, index) => (
        <Project key={index} project={project} />
      ))}
    </div>
  );
};

export default ProjectGallery;
