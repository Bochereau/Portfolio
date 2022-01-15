import React, { useState } from 'react';

// assets imports
import collapseArrow from '../../assets/icons/collapseArrow.png';
import expandArrow from '../../assets/icons/expandArrow.png';
import bolt from '../../assets/icons/bolt.png';

import './style.scss';

const Tech = () => {
  const [open, setOpen] = useState(false);

  return (
    <article className="skills-article">
          <div className="skills-article-open">
            <h2 className="skills-article-title">
              Développement Web et Web mobile
            </h2>
            <button 
              className="skills-article-open-button"
              onClick={() => setOpen(!open)}
            >
              {open === false ? <img src={expandArrow} alt="fleche vers le bas"/> : <img src={collapseArrow} alt="fleche vers le haut"/>}
            </button>
          </div>
          {open &&
            <div className="dev">

              <p className="dev-title">
                Passionné de nouvelles technologies depuis mon enfance, en particulier de jeux vidéo, j'ai commencé à m'intéresser à la <em className="em">conception</em> et au <em className="em">développement</em> d'abord via le medium jeux vidéo. <br />
                Puis je me suis tourné vers le <em className="em"></em>Web, son histoire et ses architectures. Je me suis alors engagé dans une <em className="em">reconversion professionnelle</em> en 2019 via une formation en téléprésentiel avec l'<em className="em">école O'clock</em> pour apprendre à crée des applications.  <br />
                Depuis la fin de cette formation j'ai cherché à <em className="em">monter en compétences</em>, de manière autodidacte, en réalisant des <em className="em">projets personnels</em>.
              </p>

              <div className="dev-content">
                <div className="dev-school">
                  <h4 className="dev-school-title">Formation</h4>
                  <div className="dev-school-info">
                    <p className="dev-school-info-title">Ecole O'clock</p>
                    <time className="dev-school-info-time">6 mois - 798 heures</time>
                  </div>
                  <ul className="dev-school-description">
                    <li className="dev-school-content">
                      <h4 className="dev-school-content-title">
                        Le Socle - 476 heures de cours.
                      </h4>
                      <div className="dev-school-tech">
                        <img src={bolt} alt="éclair"/>
                        <ul>
                          <li className="dev-school-tech-item"> HTML / CSS / PHP / Javascript</li>
                          <li className="dev-school-tech-item"> MySQL / API / JSON / AJAX</li>
                          <li className="dev-school-tech-item"> POO / MVC / Design Pattern</li>
                          <li className="dev-school-tech-item"> ORM / Eloquent / ACL / CSRF</li>
                        </ul>
                      </div>
                    </li>

                    <li className="dev-school-content">
                      <h4 className="dev-school-content-title">La Spécialisation - React - 168 heures.</h4>
                      <div className="dev-school-tech">
                        <img src={bolt} alt="éclair"/>
                        <ul>
                          <li className="dev-school-tech-item"> React / Redux / Hooks / Axios</li>
                          <li className="dev-school-tech-item"> Socket / SASS / Chai / Enzyme</li>
                        </ul>
                      </div>
                    </li>

                    <li className="dev-school-content">
                      <h4 className="dev-school-content-title">Le Projet - Monilum - 154 heures.</h4>
                      <div className="dev-school-tech">
                        <img src={bolt} alt="éclair"/>
                        <ul>
                          <li className="dev-school-tech-item"> Git / Github / Bitbucket</li>
                          <li className="dev-school-tech-item"> Méthode Scrum et Agile</li>
                          <li className="dev-school-tech-item"> Leaflet / TypeScript / Node / PostgreSQL</li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="dev-exp">
                  <h4 className="dev-exp-title">Et ensuite ?</h4>

                  <div className="dev-exp-info">
                    <p className="dev-exp-info-title">Opquast</p>
                  </div>
                  <ul className="dev-exp-description">
                    <li className="dev-exp-content">
                      <h4 className="dev-exp-content-title">
                        Démarche Qualité Web
                      </h4>
                      <div className="dev-exp-tech">
                        <img src={bolt} alt="éclair"/>
                        <ul>
                          <li className="dev-exp-tech-item">Bonne pratique / Accessibilité</li>
                          <li className="dev-exp-tech-item">VPTCS / UI - UX</li>
                          <li className="dev-exp-tech-item">Qualité web / écoconception</li>
                        </ul>
                      </div>
                    </li>
                  </ul>

                  <div className="dev-exp-info">
                    <p className="dev-exp-info-title">Projets Personnels</p>
                  </div>
                  <ul className="dev-exp-description">
                    <li className="dev-exp-content">
                      <h4 className="dev-exp-content-title">
                        VideoGameCollection
                      </h4>
                      <div className="dev-exp-tech">
                        <img src={bolt} alt="éclair"/>
                        <ul>
                          <li className="dev-exp-tech-item">React / Redux / Sass / </li>
                          <li className="dev-exp-tech-item">Node.js / MongoDB / Mongoose</li>
                          <li className="dev-exp-tech-item">CRUD / Login &#10132; Hash + Salt </li>
                          <li className="dev-exp-tech-item"> </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>

              </div>
            </div>
          }
        </article>
  )
}

export default Tech;