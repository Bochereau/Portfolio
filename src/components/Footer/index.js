import React from 'react';
import { HashLink } from 'react-router-hash-link';

// icons
import CopyrightIcon from '../../assets/icons/copyright.png';
import ArrowUp from '../../assets/icons/upArrow.png';

import './style.scss';

const Footer = () => (
  <footer className="footer">
    <div className="footer-text">
      <div className="footer-copyright">
        <img 
            src={CopyrightIcon}
            alt="clock"
            className="footer-copyright-img"
        />
        <p>2021</p>
      </div>
      <p className="footer-separation">|</p>
      <p>Antoine Bochereau</p>
    </div>
    <div className="footer-arrow">
      <HashLink 
        to="#"
        smooth
      >
          <img 
            src={ArrowUp}
            alt="clock"
            className="footer-arrow-img"
        />
      </HashLink>
    </div>
  </footer>
)

export default Footer;