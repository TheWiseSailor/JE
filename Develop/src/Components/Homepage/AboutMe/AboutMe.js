import React from 'react';
import jairImage from './AboutMeImages/Jair.png'; 
import './AboutMe.css'; 

const AboutMeSection = () => {
  return (
    <div className='PrimaryContainer'>
      <div className="about-me-container">
  
        <div className="JairImage1">
          <img src={jairImage} alt="Jair" className='Jair'/>
        </div>
        <div className="description-container">
          <p className='AboutMeParagraph font-weight-bold'> 
            My name is Jair Escalona, I’m originally from Venezuela located in South America! Beautiful country.

            I’m a Pastor, Professor and a Musician. I love to spend time making connections with people to guide them to Christ and also help them to use their abilities for His kingdom.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMeSection;
