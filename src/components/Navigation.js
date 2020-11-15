import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import logo_test from '../images/atlanta-flames.png'; // with import

function Navigation({onChangeTab}) {
  
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <img className="logo-img" alt="atlanta-logo" src={logo_test}/>
          </Link>
          <div className='menu-icon' onClick={handleClick}>

          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={() => onChangeTab("images/hotel.jpg")}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/projects' className='nav-links' onClick={() => onChangeTab("images/hotel.jpg")}>
                Projects
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/about' className='nav-links' onClick={() => onChangeTab("images/hotel.jpg")}>
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/contact' className='nav-links' onClick={() => onChangeTab("images/hotel.jpg")}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
        
    </>
  );
}

export default Navigation
