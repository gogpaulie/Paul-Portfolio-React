import React from 'react';

const NavbarMobileDrawer = ({ open }) => {
  return (
    <div id='nav-mobile' className={open ? 'drawer open' : 'drawer'}>
      <ul className='drawer__list'>
        <li className='drawer__list--link'>
          <a href='#home' className='current'>
            Home
          </a>
        </li>
        <li className='drawer__list--link'>
          <a href='#about'>About</a>
        </li>
        <li className='drawer__list--link'>
          <a href='#work'>Sevices</a>
        </li>
        <li className='drawer__list--link'>
          <a href='#contact'>Contact</a>
        </li>
      </ul>
      <div className='drawer__social-media'>
        <a href='#!'>
          <i className='fab fa-twitter'></i>
        </a>
        <a href='#!'>
          <i className='fab fa-twitch'></i>
        </a>
        <a href='#!'>
          <i className='fab fa-youtube'></i>
        </a>
      </div>
    </div>
  );
};

export default NavbarMobileDrawer;
