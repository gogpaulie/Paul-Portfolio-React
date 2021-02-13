import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import Spacesuit from './Animations/Spacesuit';
import Mario from './Animations/Mario';
import Laptop from './Animations/Laptop';

const Hero = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section className='Hero patterns'>
      <div className='Hero__animation'>
        <div className='Hero__animation--container'>
          {theme === 'dark' && <Spacesuit />}
          {theme === 'light' && <Laptop />}
          {theme === 'nineties' && <Mario />}
        </div>
      </div>
      <div className='Hero__heading'>
        <h1 className='Hero__heading--name'>Hello. I’m Paul</h1>
        <p className='Hero__heading--desc'>
          I have a passion for developing user-friendly, accessible and
          responsive websites. I never stop learning and for me, each new
          project is another adventure.{' '}
        </p>
        <a
          className='cta-btn cta-btn--hero'
          href='https://pdfhost.io/v/F4f.rV8L2_ppresumefig0221minpdf.pdf'
          target='_blank'
          rel='noreferrer'
        >
          View Resume <span>&rarr;</span>
        </a>
      </div>
    </section>
  );
};

export default Hero;
