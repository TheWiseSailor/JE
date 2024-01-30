import React from 'react';
import './Hero.css'; 
import Image1 from '../../Homepage/Hero/HeroImages/Image1.jpg';

const HomePage = () => {
  return (
    <div className="HomeHeroContainer" style={{backgroundImage: `url(${Image1})`}}>

      <section className="HomeHero">
        <div className='Darkshader'></div>
        <div className="TextContainer">
          <h1>JE.CO</h1>
          <p>Discover you next product here!</p>
        </div>
      </section>

    </div>
  );
}

export default HomePage;
