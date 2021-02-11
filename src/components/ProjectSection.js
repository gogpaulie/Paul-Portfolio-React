import React from 'react';
import Project from './Project';
import { projects } from '../projectData';

const ProjectSection = () => {
  return (
    <section id='projects' className='projects'>
      <h2 className='projects__title'>My Portfolio Projects</h2>
      {projects.map((p) => (
        <Project
          key={p.id}
          id={p.id}
          title={p.title}
          image={p.image}
          description={p.description}
          tools={p.tools}
          link={p.link}
          github={p.github}
        />
      ))}
    </section>
  );
};

export default ProjectSection;
