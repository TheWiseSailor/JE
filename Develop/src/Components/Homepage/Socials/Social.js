import React from 'react';
import './Social.css';
import { FaWhatsapp, FaInstagram, FaFacebook, FaEnvelope } from 'react-icons/fa';

const Social = () => {
    return (
        <div className="social-container">
            <h2>Follow Us:</h2>
            <div className="social-icons">
                <a href="https://whatsapp.com"><FaWhatsapp /></a>
                <a href="https://instagram.com"><FaInstagram /></a>
                <a href="https://facebook.com"><FaFacebook /></a>
                <a href="mailto:example@example.com"><FaEnvelope /></a>
            </div>
        </div>
    );
}

export default Social;
