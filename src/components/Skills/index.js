import React from 'react';

// material ui icons
import CodeIcon from '../../assets/icons/menu/code.png';

// file imports
import Tech from './Tech';
import Soft from './Soft';
import Language from './Language';

import './style.scss';


const Skills = () => (
  <section className="separation" id="skills">
    <div className="skills">
      <h1 className="part-title">
        <img 
            src={CodeIcon}
            alt="snippet"
            className="title-img"
        /> 
        Compétences
      </h1>
      <p className="part-subtitle">Retrouvez ici l'ensemble des compétences que j'ai pu acquérir tout au long de mon parcours professionnel.</p>
      <hr />
      <Tech />
      <hr />
      <Soft />
      <hr />
      <Language />
    </div>
  </section>
)


export default Skills;