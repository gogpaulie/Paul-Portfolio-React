import React, { useEffect, useRef } from 'react';
import Lottie from 'lottie-web';
import animate from 'lottie-web';

const Hero = () => {
  const container = useRef(null);

  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('./spacesuit-dashboard.json'),
    });
    animate.setSpeed(0.5);
  }, []);

  return (
    <section className='Hero patterns'>
      <div className='Hero__animation'>
        <div className='Hero__animation--container' ref={container}></div>
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
          href='https://pdfhost.io/v/ALzjQ.adV_ppresumefig0221minpdf.pdf'
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
