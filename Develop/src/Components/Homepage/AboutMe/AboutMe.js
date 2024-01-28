import React from 'react';
import jairImage from './AboutMeImages/Jair.png'; 
import './AboutMe.css'; 
import AOSInitializer from "../../AOS/AOSInitializer";

const AboutMeSection = () => {
  return (


    <div className='PrimaryContainer'>
          <AOSInitializer/>
      <div className="about-me-container">
  
        <div className="JairImage1" data-aos="fade-up"
              data-aos-duration="3000">
          <img src={jairImage} alt="Jair" className='Jair'/>
        </div>
        <div className="description-container" data-aos="fade-down"
              data-aos-duration="3000">
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
