import React from 'react';
import './Hero.css'; 
import Image1 from '../../Homepage/Hero/HeroImages/Image1.jpg';

const HomePage = () => {
  return (
    <div className="HomeHeroContainer" style={{backgroundImage: `url(${Image1})`}}>

      <section className="HomeHero">
        <div className='Darkshader'></div>
      </section>

    </div>
  );
}

export default HomePage;
