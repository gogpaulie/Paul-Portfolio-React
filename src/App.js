import React, { useEffect, useState, useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';
import { darkTheme, lightTheme, ninetiesTheme } from './utils/themeFunctions';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About/About';
import ProjectSection from './components/ProjectSection';
import FreelanceSection from './components/FreelanceSection';
import Contact from './components/Contact';
import NavbarMobileDrawer from './components/NavbarMobileDrawer';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [scrollActive, setScrollActive] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [openNav, setOpenNav] = useState(false);

  const { theme } = useContext(ThemeContext);

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
    if (theme === 'dark') {
      darkTheme();
    }
    if (theme === 'light') {
      lightTheme();
    }
    if (theme === 'nineties') {
      ninetiesTheme();
    }

    handleResize();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
  }, [theme]);

  return (
    <div className='App container' id='home'>
      <NavbarMobileDrawer open={openNav} handleOpen={handleOpen} />
      <Navbar
        scrollActive={scrollActive}
        isMobileView={isMobileView}
        handleOpen={handleOpen}
        open={openNav}
      />
      <Hero />
      <About />
      <ProjectSection />
      <FreelanceSection />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
