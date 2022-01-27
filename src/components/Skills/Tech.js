import React, { useState } from 'react';

// assets imports
import collapseArrow from '../../assets/icons/collapseArrow.png';
import boxandArrow from '../../assets/icons/expandArrow.png';
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
              {open === false ? <img src={boxandArrow} alt="fleche vers le bas"/> : <img src={collapseArrow} alt="fleche vers le haut"/>}
            </button>
          </div>
          {open &&
            <div className="dev">

              <p className="skills-article-subtitle">
                Passionné de nouvelles technologies depuis mon enfance, en particulier de jeux vidéo, j'ai commencé à m'intéresser à la <em className="em">conception</em> et au <em className="em">développement</em> d'abord via le medium jeux vidéo. <br />
                Puis je me suis tourné vers le <em className="em"></em>Web, son histoire et ses architectures. Je me suis alors engagé dans une <em className="em">reconversion professionnelle</em> en 2019 via une formation en téléprésentiel avec l'<em className="em">école O'clock</em> pour apprendre à crée des applications.  <br />
                Depuis la fin de cette formation j'ai cherché à <em className="em">monter en compétences</em>, de manière autodidacte, en réalisant des <em className="em">projets personnels</em>.
              </p>

              <div className="dev-box">
                <div className="skills-box">
                  <h4 className="skills-box-title">Formation</h4>
                  <div className="dev-box-info">
                    <p className="dev-box-info-title">Ecole O'clock</p>
                    <time className="dev-box-info-time">6 mois - 798 heures</time>
                  </div>
                  <ul className="dev-box-description">
                    <li className="dev-box-content">
                      <h4 className="dev-box-content-title">
                        Le Socle - 476 heures de cours.
                      </h4>
                      <div className="dev-box-tech">
                        <img src={bolt} alt="éclair"/>
                        <ul>
                          <li className="dev-box-tech-item"> HTML / CSS / PHP / Javascript</li>
                          <li className="dev-box-tech-item"> MySQL / API / JSON / AJAX</li>
                          <li className="dev-box-tech-item"> POO / MVC / Design Pattern</li>
                          <li className="dev-box-tech-item"> ORM / Eloquent / ACL / CSRF</li>
                        </ul>
                      </div>
                    </li>

                    <li className="dev-box-content">
                      <h4 className="dev-box-content-title">La Spécialisation - React - 168 heures.</h4>
                      <div className="dev-box-tech">
                        <img src={bolt} alt="éclair"/>
                        <ul>
                          <li className="dev-box-tech-item"> React / Redux / Hooks / Axios</li>
                          <li className="dev-box-tech-item"> Socket / SASS / Chai / Enzyme</li>
                        </ul>
                      </div>
                    </li>

                    <li className="dev-box-content">
                      <h4 className="dev-box-content-title">Le Projet - Monilum - 154 heures.</h4>
                      <div className="dev-box-tech">
                        <img src={bolt} alt="éclair"/>
                        <ul>
                          <li className="dev-box-tech-item"> Git / Github / Bitbucket</li>
                          <li className="dev-box-tech-item"> Méthode Scrum et Agile</li>
                          <li className="dev-box-tech-item"> Leaflet / TypeScript / Node / PostgreSQL</li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="skills-box exp">
                  <h4 className="skills-box-title">Et ensuite ?</h4>

                  <div className="dev-box-info">
                    <p className="dev-box-info-title">Opquast</p>
                  </div>
                  <ul className="dev-box-description">
                    <li className="dev-box-box">
                      <h4 className="dev-box-content-title">
                        Démarche Qualité Web
                      </h4>
                      <div className="dev-box-tech">
                        <img src={bolt} alt="éclair"/>
                        <ul>
                          <li className="dev-box-tech-item">Bonne pratique / Accessibilité</li>
                          <li className="dev-box-tech-item">VPTCS / UI - UX</li>
                          <li className="dev-box-tech-item">Qualité web / écoconception</li>
                        </ul>
                      </div>
                    </li>
                  </ul>

                  <div className="dev-box-info">
                    <p className="dev-box-info-title">Projets Personnels</p>
                  </div>
                  <ul className="dev-box-description">
                    <li className="dev-box-box">
                      <h4 className="dev-box-content-title">
                        VideoGameCollection
                      </h4>
                      <div className="dev-box-tech">
                        <img src={bolt} alt="éclair"/>
                        <ul>
                          <li className="dev-box-tech-item">Front : React / Redux / Sass</li>
                          <li className="dev-box-tech-item">Back : Node.js / MongoDB / Mongoose</li>
                          <li className="dev-box-tech-item">CRUD / Login &#10132; Hash + Salt </li>
                        </ul>
                      </div>
                    </li>
                    <li className="dev-box-box">
                      <h4 className="dev-box-content-title">
                        Limit Break
                      </h4>
                      <div className="dev-box-tech">
                        <img src={bolt} alt="éclair"/>
                        <ul>
                          <li className="dev-box-tech-item">Front : React / Redux / React-router </li>
                          <li className="dev-box-tech-item">Back : Strapi / PostgreSQL</li>
                          <li className="dev-box-tech-item">Cloudinary (stockage d'images) </li>
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