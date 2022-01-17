import React, { useState } from 'react';

// assets imports
import collapseArrow from '../../assets/icons/collapseArrow.png';
import expandArrow from '../../assets/icons/expandArrow.png';

import './style.scss';

const Soft = () => {
  const [open, setOpen] = useState(false);

  return (
    <article className="skills-article">
          <div className="skills-article-open">
            <h2 className="skills-article-title">
              Compétences Personnelles
            </h2>
            <button 
              className="skills-article-open-button"
              onClick={() => setOpen(!open)}
            >
              {open === false ? <img src={expandArrow} alt="fleche vers le bas"/> : <img src={collapseArrow} alt="fleche vers le haut"/>}
            </button>
          </div>
          {open === true &&
          
            <div className='soft'>
              <h3 className="skills-article-subtitle">
                Ayant un parcours atypique (anciennement dans le domaine sportif), 
                j'ai développé un certain nombre de compétences au cours de mes diverses expériences professionnelles passées.
              </h3>
              <div className="soft-box">
                <div className="skills-box">
                  <h4 className="skills-box-title">Méthodes de travail</h4>
                  <ul>
                    <li>J'aime coopérer afin de connaître et résoudre les problèmes rencontrés</li>
                    <li>Je sais parfaitement travailler en équipe et/ou en autonomie</li>
                    <li>J'ai une forte capacité d'adaptation</li>
                    <li>J'aime prendre mon temps pour faire les choses bien lorsque cela est possible</li>
                  </ul>
                </div>
              
                <div className="skills-box">
                  <h4 className="skills-box-title">Capacité d'appréciation</h4>
                  <ul>
                    <li>J'aime prendre du recul pour anticiper les problèmes à venir</li>
                    <li>J'ai une bonne capacité d'analyse</li>
                    <li>Je suis organisé</li>
                    <li>Je suis calme</li>
                    <li>Je sais faire preuve d'humilité</li>
                  </ul>
                </div>
              </div>
            </div>
          }
            
        </article>
  )
}

export default Soft;