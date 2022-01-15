import React from 'react';

import AssignmentIndIcon from '../../assets/icons/menu/clock.png';

import './style.scss';
import Web from './Web';
import Sport from './Sport';
import Bac from './Bac';

const Career = () => (
  <section className="separation" id="career">
    <div className="career">
      <h1 className="career-title">
        <img 
            src={AssignmentIndIcon}
            alt="clock"
            className="title-img"
        />
        Parcours
      </h1>
      <p className="career-description">Mon parcours professionnel.</p>

      <hr />

      <div className="career-content">
        <div className="career-content-box">
          <Web />
        </div>
        <hr/>
        <div className="career-content-box">
          <Sport />
        </div>
        <hr/>
        <div className="career-content-box">
          <Bac />
        </div>
      </div>
    </div>
  </section>
)

export default Career;