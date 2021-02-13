import React, { useEffect, useRef } from 'react';
import Lottie from 'lottie-web';
import animate from 'lottie-web';

const Spacesuit = () => {
  const container = useRef(null);
  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../spacesuit-dashboard.json'),
    });
    animate.setSpeed(0.5);
  }, []);
  return <div ref={container}></div>;
};

export default Spacesuit;
