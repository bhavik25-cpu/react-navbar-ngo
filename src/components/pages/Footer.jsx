// Footer.jsx
import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="foot" itemscope itemtype="https://schema.org/NGO">
          <span itemprop="name" style={{ color: "white", fontFamily: "raleway", fontSize: "14px" }}>NGO Foundation</span>
          <div itemprop="address" itemscope itemtype="https://schema.org/PostalAddress">
            <p style={{ color: "white", fontFamily: "raleway", fontSize: "14px" }}>
              <span itemprop="streetAddress">303 6/16, 3rd Floor, MUMBAI</span>
              <span itemprop="addressLocality">New Delhi</span> - <span itemprop="postalCode">401107 </span>
              <span itemprop="addressRegion">Mumbai</span>, <span itemprop="addressCountry">India</span>
              <br /><br />
              Contact Us: Tel:<span itemprop="telephone"><a href="tel:+91-11-43123700" title="Click to Call" style={{ color: "white", fontFamily: "raleway", fontSize: "14px" }}>+91 9167254066</a></span> | E-mail: <span itemprop="email"><a href="mailto:info@smilefoundationindia.org" style={{ color: "white", fontFamily: "raleway", fontSize: "14px" }}>bhavikdoshi25@gmail.com</a></span>
            </p>
          </div>
        </div>
        <div className="social-icons">
          <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
        </div>
      </div>
      <br/>
      <div className="copyright">
        <p>
          <FontAwesomeIcon icon={faCopyright}/>
          <span> 2024 NGO Foundation. All rights reserved.</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
