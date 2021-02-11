import React from 'react';
import Project from './Project';
import { freelance } from '../projectData';

const FreelanceSection = () => {
  return (
    <section id='freelance' className='projects freelance'>
      <h2 className='projects__title'>Website Examples</h2>
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
