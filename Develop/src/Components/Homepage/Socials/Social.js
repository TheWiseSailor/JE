import React from 'react';
import './Social.css';
import facebookIcon from './SocialImages/facebook.png'
import mailIcon from './SocialImages/mail.png';
import phoneIcon from './SocialImages/phone.png';
import instagramIcon from './SocialImages/instagram.png';
import AOSInitializer from "../../AOS/AOSInitializer";

const Social = () => {
  const handleCall = () => {
    window.location.href = 'tel:+19802958480'; 
};
    return (
        <div className="social-container">
                    <AOSInitializer/>
          <div className='SocialContactContainer'data-aos="fade-up"
              data-aos-duration="3000">
            <h2>Contact Me!</h2>
            <div className="social-icons">
                
            <a href="https://www.instagram.com/jairescalona22/" target="_blank" rel="noopener noreferrer">
                    <img src={instagramIcon} alt="Instagram" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=100093069174673" target="_blank" rel="noopener noreferrer">
            
                    <img src={facebookIcon} alt="Facebook" />
                </a>
                <a href="mailto:jairescalona22@gmail.com" target="_blank" rel="noopener noreferrer">
                    <img src={mailIcon} alt="Email" />
                </a>
                <a href="tel:+19802958480" onClick={handleCall}>
                    <img src={phoneIcon} alt="Phone" />
                </a>
                </div>
            </div>
        </div>
    );
}

export default Social;
