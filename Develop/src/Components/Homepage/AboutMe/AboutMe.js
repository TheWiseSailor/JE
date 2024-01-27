import React from 'react';
import jairImage from './AboutMeImages/Jair.png'; 
import './AboutMe.css'; 

const AboutMeSection = () => {
  return (
    <div className='PrimaryContainer'>
    <div className="about-me-container">
  
      <div className="JairImage">
        <img src={jairImage} alt="Jair" />
      </div>
      <div className="description-container">
       
        <p className='AboutMeParagraph'>
      
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet condimentum ex. 
          Nullam vehicula, risus quis lacinia euismod, nisi urna faucibus mi, at euismod nunc justo 
          et felis. Aliquam at augue ac ex convallis lacinia. 
        </p>
      </div>
      </div>
    </div>
  );
}

export default AboutMeSection;
