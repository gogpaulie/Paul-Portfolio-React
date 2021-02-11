import logo from '../assets/logoTransparent.png';
import logoWebp from '../assets/logoTransparent.webp';

const Navbar = ({ scrollActive, isMobileView, open, handleOpen }) => {
  return (
    <header>
      <nav className={scrollActive ? 'nav active' : 'nav'}>
        <div className='container'>
          <div className='nav__logo'>
            <a href='#home'>
              <picture>
                <source type='image/webp' srcSet={logoWebp} />
                <source type='image/jpeg' srcSet={logo} />
                <img src={logo} alt='logo' />
              </picture>
            </a>
          </div>
          {isMobileView ? (
            <i
              className={`fas fa-${open ? 'times' : 'bars'}`}
              onClick={handleOpen}
            ></i>
          ) : (
            <ul>
              <li>
                <a href='#home'>Home</a>
              </li>
              <li>
                <a href='#about'>About</a>
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
