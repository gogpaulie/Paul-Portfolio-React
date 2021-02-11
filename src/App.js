import React, { useEffect, useState } from 'react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectSection from './components/ProjectSection';
import FreelanceSection from './components/FreelanceSection';
import Contact from './components/Contact';
import NavbarMobileDrawer from './components/NavbarMobileDrawer';
import './App.css';

function App() {
  const [scrollActive, setScrollActive] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [openNav, setOpenNav] = useState(false);

  function handleScroll() {
    if (window.scrollY > 50) {
      setScrollActive(true);
    } else {
      setScrollActive(false);
    }
  }

  function handleResize() {
    if (window.innerWidth <= 990) {
      setIsMobileView(true);
    } else {
      setIsMobileView(false);
    }
  }

  function handleOpen() {
    setOpenNav(!openNav);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
  });

  return (
    <div className='App container' id='home'>
      <NavbarMobileDrawer open={openNav} />
      <Navbar
        scrollActive={scrollActive}
        isMobileView={isMobileView}
        handleOpen={handleOpen}
        open={openNav}
      />
      <Hero />
      <ProjectSection />
      <FreelanceSection />
      <Contact />
    </div>
  );
}

export default App;
