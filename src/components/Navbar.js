import React, { useContext } from 'react';
import logo from '../assets/logoTransparent.png';
import logoBlack from '../assets/logoTransparent-black.png';
import logoWebp from '../assets/logoTransparent.webp';
import ThemeToggleSwitch from './ThemeToggleSwitch';
import { ThemeContext } from '../context/ThemeContext';

const Navbar = ({ scrollActive, isMobileView, open, handleOpen }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <header>
      <nav className={scrollActive ? `nav active ${theme}` : 'nav'}>
        <div className='container'>
          <div className='nav__logo'>
            <a href='#home'>
              {theme === 'dark' ? (
                <picture>
                  <source type='image/webp' srcSet={logoWebp} />
                  <source type='image/jpeg' srcSet={logo} />
                  <img src={logo} alt='logo' />
                </picture>
              ) : theme === 'light' ? (
                <picture>
                  {/* <source type='image/webp' srcSet={logoWebp} /> */}
                  <source type='image/jpeg' srcSet={logoBlack} />
                  <img src={logoBlack} alt='logo' />
                </picture>
              ) : null}
            </a>
          </div>
          <ThemeToggleSwitch />
          {isMobileView ? (
            <i
              className={`fas fa-${open ? 'times' : 'bars'}`}
              onClick={handleOpen}
            ></i>
          ) : (
            <ul className={`${theme}`}>
              <li>
                <a className={`${theme}`} href='#home'>
                  Home
                </a>
              </li>
              <li>
                <a className={`${theme}`} href='#about'>
                  About
                </a>
              </li>
              <li>
                <a className={`${theme}`} href='#freelance'>
                  Client work
                </a>
              </li>
              <li>
                <a className={`${theme}`} href='#projects'>
                  Projects
                </a>
              </li>

              <li>
                <a className={`${theme}`} href='#contact'>
                  Contact
                </a>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
