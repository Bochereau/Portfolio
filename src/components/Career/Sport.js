import React, { useState } from 'react';

import './style.scss';

// assets imports
import collapseArrow from '../../assets/icons/collapseArrow.png';
import expandArrow from '../../assets/icons/expandArrow.png';

const Sport = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className='career-box'>
      <div className="career-box-open">
        <h2 className="career-box-title">
        Les métiers du Sport
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
              <h3 class="article-content-title">Maître-Nageur Sauveteur (MNS)</h3>
              <div class="article-content-subdivision">
                <time className="article-content-time" datetime="2014">2014 - 2020</time>
                <div className="article-content-description">
                  <p className="article-content-text">Employeur :</p>
                  <div type="button" className="article-content-link">
                    <a href="https://www.nge-nantes.fr/" target="_blank" rel="noopener noreferrer">
                      <button className="link">Nantes Metropole Gestion Equipement (44)</button>
                    </a>
                  </div>
                </div>
              </div>
              <div class="article-content-subdivision">
                <time className="article-content-time" datetime="2012">2012 - 2014</time>
                <div className="article-content-description">
                  <p className="article-content-text">Employeur :</p> 
                  <div type="button" className="article-content-link">
                    <a href="https://metropole.nantes.fr/" target="_blank" rel="noopener noreferrer">
                      <button className="link">Ville de Nantes (44)</button>
                    </a>
                  </div>
                </div>
              </div>
              <div class="article-content-missions">
                <h4>Missions :</h4>
                <div>
                  <ul>
                    <li>Assurer la surveillance et la sécurité de différents publics</li>
                    <li>Organiser et mettre en oeuvre des séances adaptées au public encadré</li>
                    <li>Séances de natation (enfants, adultes, scolaire), aquagym, bébés nageurs, aquaphobie</li>
                  </ul>
                </div>
              </div>
            </div>
          </article>

          <article className="article">
            <span class="article-outer-dot">
              <span class="article-inner-dot"></span>
            </span>
            <div class="article-content">
              <h3 class="article-content-title"> Diplôme : Licence professionnelle AGOAPS, option Activités Aquatiques</h3>
              <div class="article-content-subdivision">
                <time className="article-content-time" datetime="2012">2012</time>
                <div className="article-content-description">
                  <p className="article-content-text">La validation de cette Licence professionnelle donne le titre de Maître-Nageur Sauveteur</p>
                  <div type="button" className="article-content-link">
                    <a href="https://staps.univ-nantes.fr/fr/formation-initiale/licence-professionnelle-animation-gestion-et-organisation-des-activites-physiques-et-sportives" target="_blank" rel="noopener noreferrer">
                      <button className="link">UFR STAPS de Nantes (44)</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </article>

          <article className="article">
            <span class="article-outer-dot">
              <span class="article-inner-dot"></span>
            </span>
            <div class="article-content">
              <h3 class="article-content-title">Diplôme : DEUG STAPS animateur-technicien des activités physiques pour tous</h3>
              <div class="article-content-subdivision">
                <time className="article-content-time" datetime="2011">2011</time>
                <div className="article-content-description">
                  <p className="article-content-text">Validation de la deuxième année de Licence STAPS.</p>
                  <div type="button" className="article-content-link">
                    <a href="https://staps.univ-nantes.fr/" target="_blank" rel="noopener noreferrer">
                      <button className="link">UFR STAPS de Nantes (44)</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </article>

          <article className="article">
            <span class="article-outer-dot">
              <span class="article-inner-dot"></span>
            </span>
            <div class="article-content">
              <h3 class="article-content-title">Diplôme : Premier Secours en Equipe nv.1 (PSE1)</h3>
              <div class="article-content-subdivision">
                <time className="article-content-time" datetime="2010">2010</time>
                <div className="article-content-description">
                  <p className="article-content-text">J'ai passé mon diplôme de secourisme en équipe afin de pouvoir travailler en surveillance des baignades.</p>
                  <div type="button" className="article-content-link">
                    <a href="https://www.ud-premiers-secours.fr/" target="_blank" rel="noopener noreferrer">
                      <button className="link">UDPS 44</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </>
      }
    </div>
  )
}

export default Sport;