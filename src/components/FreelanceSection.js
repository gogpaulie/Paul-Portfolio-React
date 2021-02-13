import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import Project from './Project';
import { freelance } from '../projectData';

const FreelanceSection = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <section id='freelance' className='projects freelance'>
      <h2 className={`projects__title ${theme}`}>Website Examples</h2>
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
