import React from 'react';
import './Header.css'; // Make sure to create Footer.css file for styling
function Footer() {
  return (
    <footer className="amazon__footer">
      <div className="amazon__footer__container">
        <div className="amazon__footer__section">
          <h4>Get to Know Us</h4>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Press Releases</li>
            {/* Add more links as needed */}
          </ul>
        </div>
        <div className="amazon__footer__section">
          <h4>Make Money with Us</h4>
          <ul>
            <li>Sell on Amazon</li>
            <li>Sell under Amazon Accelerator</li>
            <li>Become an Affiliate</li>
            {/* Add more links as needed */}
          </ul>
        </div>
        <div className="amazon__footer__section">
          <h4>Amazon Payment Products</h4>
          <ul>
            <li>Amazon Business Card</li>
            <li>Shop with Points</li>
            <li>Reload Your Balance</li>
            {/* Add more links as needed */}
          </ul>
        </div>
        {/* Add more sections as needed */}
      </div>
      <div className="amazon__footer__language">
        <div className="language__selector">
    
        </div>
        <div className="amazon__logo">
         
          <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Amazon Logo" height="80px" width="110px" />
        </div>
      </div>
      <div className="amazon__footer__legal">
        <p>© {new Date().getFullYear()} Amazon.com, Inc. or its affiliates</p>
        {/* Add legal information and disclaimer here */}
      </div>


    </footer>
  );
}

export default Footer;
