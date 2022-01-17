import React, { useState} from 'react';

import './style.scss';

// assets imports
import collapseArrow from '../../assets/icons/collapseArrow.png';
import expandArrow from '../../assets/icons/expandArrow.png';

const Bac = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className='career-box'>
      <div className="career-box-open">
        <h2 className="career-box-title">
          Lycée
        </h2>
        <button 
          className="career-box-open-button"
          onClick={() => setOpen(!open)}
        >
          {open === false ? <img src={expandArrow} alt="fleche vers le bas"/> : <img src={collapseArrow} alt="fleche vers le haut"/>}
        </button>
      </div>

      {open && 
        <>
          <article className="article">
            <span class="article-outer-dot">
              <span class="article-inner-dot"></span>
            </span>
            
            <div class="article-content">
              <h3 class="article-content-title">Baccalauréat S</h3>
              <div class="article-content-subdivision">
                <time className="article-content-time" datetime="2007">2007</time>
                <div className="article-content-description">
                  <p className="article-content-text">Obtention du Bac S spécialité Maths (mention assez bien)</p>
                  <button disabled className="article-content-place">Lycée Jeanne d'Arc Angers (49)</button>
                </div>
              </div>
            </div>

          </article>
        </>
      }
    </div>
  )
}

export default Bac;