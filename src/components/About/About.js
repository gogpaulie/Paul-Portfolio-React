import React from 'react';
import Technologies from './Technologies';

const About = () => {
  return (
    <div className='about' id='about'>
      <h2 className='about__title'>About Me</h2>
      <div className='about__story'>
        <p>
          I'm currently based in Indianapolis, Indiana and soon will be moving
          to Denver, Colorado. I love to build visually beautiful, accessible,
          and user friendly websites.
        </p>
        <br />
        <p>
          With the use of my skills, I create websites for artists and content
          creators.
        </p>
        <br />
        <p>Here's a few technologies I've been working with recently:</p>
      </div>
      <Technologies />
      <br />
      <p className='about__seework'>See some of my work below!</p>
    </div>
  );
};

export default About;
