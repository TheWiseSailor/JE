import React, { useEffect, useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolledToBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;
      setShowFooter(isScrolledToBottom);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <footer className={`footer ${showFooter ? 'visible' : ''}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <p className="font-weight-bold">Copyright © 2023 All rights reserved | JE.CO</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
