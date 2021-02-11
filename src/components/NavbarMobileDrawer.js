import React from 'react';

const NavbarMobileDrawer = ({ open, handleOpen }) => {
  return (
    <div id='nav-mobile' className={open ? 'drawer open' : 'drawer'}>
      <ul className='drawer__list'>
        <li className='drawer__list--link'>
          <a href='#home' className='current' onClick={handleOpen}>
            Home
          </a>
        </li>
        <li className='drawer__list--link'>
          <a href='#about' className='current' onClick={handleOpen}>
            About
          </a>
        </li>
        <li className='drawer__list--link'>
          <a href='#projects' onClick={handleOpen}>
            Projects
          </a>
        </li>
        <li className='drawer__list--link'>
          <a href='#freelance' onClick={handleOpen}>
            Sevices
          </a>
        </li>
        <li className='drawer__list--link'>
          <a href='#contact' onClick={handleOpen}>
            Contact
          </a>
        </li>
      </ul>
      <div className='drawer__social-media'>
        <a
          href='https://www.linkedin.com/in/paul-polihronakis-91999a30'
          target='_blank'
          rel='noreferrer'
        >
          <i className='fab fa-linkedin'></i>
        </a>
        <a href='https://github.com/gogpaulie' target='_blank' rel='noreferrer'>
          <i className='fab fa-github'></i>
        </a>
        <a
          href='https://twitter.com/Polihronakis'
          target='_blank'
          rel='noreferrer'
        >
          <i className='fab fa-twitter'></i>
        </a>
      </div>
    </div>
  );
};

export default NavbarMobileDrawer;
