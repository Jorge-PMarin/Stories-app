import { GiHamburgerMenu as MenuIcon } from 'react-icons/gi';
import logo from './logo.png';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const activeStyle = {
    textDecoration: 'underline'
  };
  const handleIsActive = (isActive) => {
    return isActive ? activeStyle : undefined;
  };

  return (
    <nav className='navbar'>
      <div className='navbar__container'>
        <Link to='/' className='navbar__logo link'>
          <img src={logo} alt='brand' />
          <span>Ustory</span>
        </Link>

        <div className='navbar__collapse'>
          <ul className='navbar__nav'>
            <li className='navbar__item'>
              <NavLink
                to='/about'
                style={({ isActive }) => handleIsActive(isActive)}
                className='navbar__link'
              >
                About us
              </NavLink>
            </li>
            <li className='navbar__item'>
              <NavLink
                to='/how-to-start'
                style={({ isActive }) => handleIsActive(isActive)}
                className='navbar__link'
              >
                How To start
              </NavLink>
            </li>
            <li className='navbar__item'>
              <NavLink
                to='/write'
                style={({ isActive }) => handleIsActive(isActive)}
                className='navbar__link'
              >
                Write
              </NavLink>
            </li>
          </ul>
        </div>

        <div className='navbar__buttons'>
          <button className='navbar__sign-in'>Sign In</button>
          <button className='navbar__get-started'>Get started</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
