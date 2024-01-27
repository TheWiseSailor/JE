// NavLinks.js
import React from 'react';
import "./NavLinks.css"
const NavLinks = () => {
  return (
    <nav>
      <ul>
      <li><a href="/products">Products</a></li>
        <li><a href="/about">Contact</a></li>
        <li><a href="/contact">SignUp</a></li>
      </ul>
    </nav>
  );
}

export default NavLinks;