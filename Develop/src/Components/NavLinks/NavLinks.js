import React from 'react';
import { Link } from 'react-router-dom'; 
import "./NavLinks.css";

const NavLinks = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/signup">SignUp</Link></li>
      </ul>
    </nav>
  );
}

export default NavLinks;
