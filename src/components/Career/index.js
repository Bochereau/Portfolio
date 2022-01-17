import React from 'react';

// import section icon
import AssignmentIndIcon from '../../assets/icons/menu/case.png';

// import style
import './style.scss';

// import components
import Web from './Web';
import Sport from './Sport';
import Bac from './Bac';

const Career = () => (
  <section className="separation" id="career">
    <div className="career">
      <h1 className="part-title">
        <img 
            src={AssignmentIndIcon}
            alt="clock"
            className="title-img"
        />
        Parcours
      </h1>
      <p className="part-subtitle">Mon parcours professionnel.</p>

      <hr />
      <Web />
      <hr/>
      <Sport />
      <hr/>
      <Bac />
    </div>
  </section>
)

export default Career;