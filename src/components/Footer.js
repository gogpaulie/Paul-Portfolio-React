import React from 'react';

const Footer = () => {
  return (
    <footer className='footer'>
      <p>&copy; Polihronakis Design {new Date().getFullYear()}</p>
      <p>
        Check out the code for this site{' '}
        <a href='https://github.com/gogpaulie/Paul-Portfolio-React'>here</a>
      </p>
    </footer>
  );
};

export default Footer;
