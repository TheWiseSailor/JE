import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"
import NavLinks from '../NavLinks/NavLinks'; 
import AOSInitializer from "../AOS/AOSInitializer";

const Header = () => {
  return (
    <div >
      <header >
        <AOSInitializer/>

        <NavLinks />
      </header>
    </div>
  );
}

export default Header;
