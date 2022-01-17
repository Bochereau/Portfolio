import React from 'react';

// css import
import './style.scss';

// assets import
import Profil from '../../assets/images/Bochereau.jpg';
import CV from '../../assets/pdf/CV.pdf';
import DownloadIcon from '../../assets/icons/download.png';
import Storage from '../../assets/icons/hdd.png';



const Home = () => (
  <section className="top-separation" id="home">
    <div className="home">
      <img className="home-picture" src={Profil} alt="Bochereau Antoine"/>
      <article className="home-text">
        <h2 className="home-subtitle home-subtitle--top">Bienvenue, je suis</h2>
        <h1 className="home-title">Antoine Bochereau,</h1>
        <h2 className="home-subtitle home-subtitle--bottom">un développeur fullstack JS.</h2>
        <div className="home-links">
          <div className="home-link">
            <a 
              href="mailto:antbochereau@gmail.com" 
              className="home-link-item"
            >
              {/* image of email link */}
              <svg xmlns="http://www.w3.org/2000/svg" height="35" viewBox="0 0 24 24"><path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/></svg>
            </a>
            <a 
              href="https://www.linkedin.com/in/antoine-bochereau-4508441b6/" 
              target="_blank" 
              rel="noreferrer"
              className="home-link-item"
            >
              {/* image of linkedin link */}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                height="35" 
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a 
              href="https://github.com/Bochereau" 
              target="_blank" 
              rel="noreferrer" 
              className="home-link-item"
            >
              {/* image of github link */}
              <svg 
                xmlns="http://www.w3.org/2000/svg"
                height="35" 
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
          <div>
            <a href={CV} target="_blanck" className="home-cv">
              <div className="home-cv-button-primary">
                <img 
                  src={DownloadIcon}
                  alt="télechargement"
                  className="home-cv-button-icon"
                />
                <p>Télécharger mon CV</p>
              </div>
              <div className="home-cv-button-secondary">
                <img 
                  src={Storage}
                  alt="télechargement"
                  className="home-cv-button-icon"
                />
                <p>PDF : 901 Ko</p>
              </div>
            </a>

          </div>
        </div>
        
      </article>
    </div>
  </section>
)

export default Home;