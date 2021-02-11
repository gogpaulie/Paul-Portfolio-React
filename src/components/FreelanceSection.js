import React from 'react';
import Project from './Project';
import { freelance } from '../projectData';

const FreelanceSection = () => {
  return (
    <section id='freeland' className='projects'>
      <h2 className='projects__title'>My Freelance Work</h2>
      {freelance.map((p) => (
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

export default FreelanceSection;
