// Header.js
import React from 'react';
import LogoImage from '../Header/HeaderImages/Logo.png';
import "./Header.css"
import NavLinks from '../NavLinks/NavLinks'; 

const Header = () => {
  return (
    <div className='HeaderPrimary'>
    <header className='headerContainer'>

      <img src={LogoImage} alt="JE" className='HeaderLogoImage' />
      <NavLinks />

    </header>
    </div>
  );
}

export default Header;