import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';

// css import 
import './style.scss';

// downloadable content
import opquast from '../../assets/pdf/Opquast-04.2021.pdf';
import TP from '../../assets/pdf/TP.pdf';

// assets imports
import collapseArrow from '../../assets/icons/collapseArrow.png';
import expandArrow from '../../assets/icons/expandArrow.png';

const Web = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="career-content-open">
        <h2 className="career-content-title">
          Le Web
        </h2>
        <button 
          className="career-content-open-button"
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
              <h3 class="article-content-title">Titre Professionnel Développeur Web et Web Mobile</h3>
              <div class="article-content-subdivision">
                <time className="article-content-time" datetime="2021-05">Juillet 2021</time>
                <div className="article-content-description">
                  <p className="article-content-text">Passage du Titre Professionnel « Developpeur Web et Web Mobile »</p>
                  <p className="article-content-text">
                    Mon Titre Professionnel à télécharger &#10132;
                    <a 
                      href={TP}
                      download="TP_Antoine_Bochereau"
                      className="redirect"
                    >
                        <span>Développeur Web (PDF, 471 Ko)</span>
                    </a>
                  </p>
                  <div type="button" className="article-content-link">
                    <a href="https://www.francecompetences.fr/recherche/rncp/31114/" target="_blank" rel="noopener noreferrer">
                      <button className="link"> Voir le RNCP DWWM</button>
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
              <h3 class="article-content-title">Certification Opquast</h3>
              <div class="article-content-subdivision">
                <time className="article-content-time" datetime="2021-04">Avril 2021</time>
                <div className="article-content-description">
                  <p className="article-content-text">Passage de la certification Opquast « Maîtrise de la qualité en projet Web »</p>
                  <p className="article-content-text">
                    Obtention d'un score de 880/1000
                  </p>
                  <p className="article-content-text">
                    Ma certification à télécharger &#10132;

                    <a 
                      href={opquast}
                      download="certification Opquast Antoine Bochereau"
                      className="redirect"
                    >
                      <span>Opquast (PDF, 253 Ko)</span>
                    </a>
                  </p>
                  <div type="button" className="article-content-link">
                    <a href="https://www.opquast.com/" target="_blank" rel="noopener noreferrer">
                      <button className="link">Voir la certification Opquast</button>
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
              <h3 class="article-content-title">Projet Monilum</h3>
              <div class="article-content-subdivision">
                <time className="article-content-time" datetime="2021-02">Février 2021</time>
                <div className="article-content-description">
                  <p className="article-content-text">
                    Mon projet de fin de formation réalisé en équipe de 4 étudiants. <br/>
                    Cette première expérience a été l'occasion pour moi de prendre charge les rôles de Scrum Master et Lead Dev Front. <br />
                    En a résulté une forte monté en compétences ainsi que la prise de responsabilité induite par la gestion du journal d'équipe et l'animation les stand up meetings quotidiens.
                  </p>
                </div>
              </div>
            </div>
          </article>

          <article className="article">
            <span class="article-outer-dot">
              <span class="article-inner-dot"></span>
            </span>
            <div class="article-content">
              <h3 class="article-content-title">Formation Développeur Web et Web mobile</h3>
              <div class="article-content-subdivision">
                <time className="article-content-time" datetime="2020-09-14">Sept. 2020 - Mars 2021</time>
                <div className="article-content-description">
                  <p className="article-content-text">Suivi d'une formation de 6 mois à l'école O'clock en distanciel</p>
                  <p className="article-content-text">Socle &#10132; Spécialisation &#10132; Projet</p>
                  <div type="button" className="article-content-link">
                    <a href="https://oclock.io/formations/developpeur-web" target="_blank" rel="noopener noreferrer">
                      <button className="link">Voir la formation O'clock</button>
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
              <h3 class="article-content-title">Réorientation</h3>
              <div class="article-content-subdivision">
                <time className="article-content-time" datetime="2020">2020</time>
                <div className="article-content-description">
                  <p className="article-content-text">
                    Passionné de nouvelles technologies depuis mon enfance, en particulier de jeux vidéo, j'ai commencé à m'intéresser à la conception et au développement d'abord via le medium jeux vidéo. Puis je me suis tourné vers le Web, son histoire et ses architectures. La suite logique à été de m'engager dans une reconversion professionnelle avec comme objectif d'apprendre à développer des applications.
                  </p>
                </div>
              </div>
            </div>
          </article>
        </>
      }   
    </>
  )
}

export default Web;