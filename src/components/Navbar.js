import logo from '../assets/logoTransparent.png';

const Navbar = ({ scrollActive, isMobileView, open, handleOpen }) => {
  return (
    <header>
      <nav className={scrollActive ? 'nav active' : 'nav'}>
        <div className='container'>
          <div className='nav__logo'>
            <a href='#home'>
              <img src={logo} alt='logo' />
            </a>
          </div>
          {isMobileView ? (
            <i
              class={`fas fa-${open ? 'times' : 'bars'}`}
              onClick={handleOpen}
            ></i>
          ) : (
            <ul>
              <li>
                <a href='#home'>Home</a>
              </li>
              <li>
                <a href='#projects'>Projects</a>
              </li>
              <li>
                <a href='#freelance'>Services</a>
              </li>
              <li>
                <a href='#contact'>Contact</a>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
