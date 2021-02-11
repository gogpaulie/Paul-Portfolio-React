import React from 'react';
import Tilt from 'react-tilt';
import githubIcon from '../assets/icons/github.svg';
import externalIcon from '../assets/icons/external-link.svg';

const Project = ({ title, image, description, tools, github, link, id }) => {
  return (
    <div className='project container'>
      <div
        className={id % 2 === 0 ? 'project__image order2' : 'project__image'}
      >
        <Tilt options={{ scale: 1, max: 15 }}>
          <a href={link} target='_blank' rel='noreferrer'>
            <img src={image} alt={title} />
          </a>
        </Tilt>
      </div>
      <div className='project__info order1'>
        <h3 className='project__info--title'>{title}</h3>
        <p className='project__info--desc'>{description}</p>
        <ul className='project__info--tools'>
          {tools.map((tool) => (
            <li className='project__info--tools-badge' key={tool}>
              {tool}
            </li>
          ))}
        </ul>
        <div className='project__info--links'>
          <a
            className='project__info--links-github'
            target='_blank'
            rel='noreferrer'
            href={github}
          >
            <img src={githubIcon} alt='see code' />
            <p>
              <span>&larr;</span> See Code
            </p>
          </a>
          <a
            className='project__info--links-live'
            target='_blank'
            rel='noreferrer'
            href={link}
          >
            <img src={externalIcon} alt='see live' />
            <p>
              <span>&larr;</span> See Live
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
