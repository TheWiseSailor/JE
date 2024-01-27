// App.js
import React from 'react';
import './App.css';

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

import HomePage from './Components/Homepage/Hero/Hero';
import AboutMe from './Components/Homepage/AboutMe/AboutMe';
function App() {
  return (
    <div>
      <Header />
      <Footer />

      <HomePage /> 
      <AboutMe /> 
    </div>
  );
}

export default App;
