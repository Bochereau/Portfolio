import React, { useState } from 'react';

// assets imports
import collapseArrow from '../../assets/icons/collapseArrow.png';
import expandArrow from '../../assets/icons/expandArrow.png';

import './style.scss';

const Language = () => {
  const [open, setOpen] = useState(false);

  return (
    <article className="skills-article">
      <div className="skills-article-open">
        <h2 className="skills-article-title">
          Compétences Linguistiques
        </h2>
        <button 
          className="skills-article-open-button"
          onClick={() => setOpen(!open)}
        >
          {open === false ? <img src={expandArrow} alt="fleche vers le bas"/> : <img src={collapseArrow} alt="fleche vers le haut"/>}
        </button>
      </div>
      {open === true &&
        <div className="language">

          <div className="language-percent">

            <div className="language-percent-french">
              <svg>
                <circle cx="70" cy="70" r="60"></circle>
                <circle cx="70" cy="70" r="60"></circle>
              </svg>
              <div className="language-percent-content">
                <h4>Français</h4>
                <p>100 %</p>
              </div>
            </div>
            <p className="language-description">J'ai une parfaite maîtrise du français qui est ma langue maternelle.</p>
          </div>

          <div className="language-percent">
            <div className="language-percent-english">
              <svg>
                <circle cx="70" cy="70" r="60"></circle>
                <circle cx="70" cy="70" r="60"></circle>
              </svg>
              <div className="language-percent-content">
                <h4>Anglais</h4>
                <p>70 %</p>
              </div>
            </div>
            <p className="language-description"> Je lis et comprends très bien l'anglais, mais je ne le parle pas couramment.</p>

          </div>
        </div>
      }
    </article>
  )
}

export default Language;