import React from 'react';
import { Link } from 'react-router-dom';
import LogoImage from '../Header/HeaderImages/Logo.png';
import "./Header.css"
import NavLinks from '../NavLinks/NavLinks'; 

const Header = () => {
  return (
    <div className="HeaderPrimary">
      <header className='headerContainer'>
        <Link to="/" className='HomeLink'>
          <img src={LogoImage} alt="JE" className='HeaderLogoImage' />
        </Link>
        <NavLinks />
      </header>
    </div>
  );
}

export default Header;
