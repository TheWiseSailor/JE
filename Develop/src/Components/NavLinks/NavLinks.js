import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import "./NavLinks.css";
import AOSInitializer from "../AOS/AOSInitializer";
import LogoImage from '../Header/HeaderImages/Logo.png';

const NavLinks = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <div className='HeaderPosition'>
             <AOSInitializer />
    <Navbar className='HeaderPrimary' expand="lg">

             <Link to="/" className='HomeLink'     data-aos="fade-down"
              data-aos-duration="3000">
          <img src={LogoImage} alt="JE" className='HeaderLogoImage' />
        </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} className='HamburgerMenu' />
      <Navbar.Collapse id="basic-navbar-nav" className={expanded ? 'show' : ''}>
        <Nav className="mr-auto">
 
          <Nav.Link as={Link} to="/product"data-aos="fade-up"
              data-aos-duration="3000">Products</Nav.Link>
          
          <Nav.Link as={Link} to="/contact"data-aos="fade-down"
              data-aos-duration="3000">Contact</Nav.Link>
          <Nav.Link as={Link} to="/signup"data-aos="fade-up"
              data-aos-duration="3000">SignUp</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    

    </Navbar>
          </div>
  );
}

export default NavLinks;
