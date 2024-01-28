import React from 'react';
import { Link } from 'react-router-dom'; 
import "./NavLinks.css";
import AOSInitializer from "../AOS/AOSInitializer";
const NavLinks = () => {
  return (
    <nav>
          <AOSInitializer/>

      <ul>
        <li   data-aos="fade-up"
              data-aos-duration="3000"><Link to="/product">Products</Link></li>
        <li  data-aos="fade-down"
              data-aos-duration="3000"><Link to="/contact">Contact</Link></li>
        <li  data-aos="fade-up"
              data-aos-duration="3000"><Link to="/signup">SignUp</Link></li>
      </ul>
    </nav>
  );
}

export default NavLinks;
