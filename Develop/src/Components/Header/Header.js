// Header.js
import React, { useState, useEffect } from 'react';
import LogoImage from '../Header/HeaderImages/Logo.png';
import "./Header.css"
import NavLinks from '../NavLinks/NavLinks'; 

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`HeaderPrimary ${isSticky ? 'sticky' : ''}`}>
    <header className='headerContainer'>

      <img src={LogoImage} alt="JE" className='HeaderLogoImage' />
      <NavLinks />

    </header>
    </div>
  );
}

export default Header;
