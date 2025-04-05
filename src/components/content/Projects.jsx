import React from 'react';
import Project from './Project.jsx';

export default function Projects({ projectList }) {
  return (
    <ul className="projects">
      {projectList.map((project, index) => (
        <li className="project" key={index}>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <Project
              img={project.img}
              alt={project.alt}
              title={project.title}
              description={project.description}
            />
          </a>
        </li>
      ))}
    </ul>
  );
}
