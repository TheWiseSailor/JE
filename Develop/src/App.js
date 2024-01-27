// App.js
import React from 'react';
import './App.css';

import Header from './Components/Header/Header';
import HomePage from './Components/Homepage/Hero/Hero';
import AboutMe from './Components/Homepage/AboutMe/AboutMe';
function App() {
  return (
    <div>
      <Header />

      <HomePage /> 
      <AboutMe /> 
    </div>
  );
}

export default App;
