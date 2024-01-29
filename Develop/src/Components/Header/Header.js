import React from 'react';
import { Link } from 'react-router-dom';
import LogoImage from '../Header/HeaderImages/Logo.png';
import "./Header.css"
import NavLinks from '../NavLinks/NavLinks'; 
import AOSInitializer from "../AOS/AOSInitializer";

const Header = () => {
  return (
    <div className="HeaderPrimary">
      <header className='headerContainer'>
        <AOSInitializer/>
        <Link to="/" className='HomeLink'     data-aos="fade-down"
              data-aos-duration="3000">
          <img src={LogoImage} alt="JE" className='HeaderLogoImage' />
        </Link>
        <NavLinks />
      </header>
    </div>
  );
}

export default Header;
