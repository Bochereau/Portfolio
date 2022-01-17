import React from 'react';
// import Roll from 'react-reveal/Roll';

// icons
import VideogameAssetIcon from '../../assets/icons/menu/camera.png';

// hoobies icons
import Swimming from '../../assets/icons/hobbies/swimming.png';
import Family from '../../assets/icons/hobbies/family.png';
import Gaming from '../../assets/icons/hobbies/play.png';
import Read from '../../assets/icons/hobbies/read.png';
import Movie from '../../assets/icons/hobbies/movie.png';

import './style.scss';

const Hobbies = () => (
  <section className="separation" id="hobbies">
    <div className="hobbies">

      <h1 className="part-title">
        <img 
            src={VideogameAssetIcon}
            alt="joystick"
            className="title-img"
        />
        Loisirs
      </h1>
      <p className="part-subtitle">Mes principaux centres d'intérets.</p>

      <hr />

      <div className="hobbies-list">
        <div className="hobbies-item family">
          <article className="hobbies-article">
            <img 
                src={Family}
                alt="family"
                className="hobbies-img"
            />
            <h3 className="hobbies-article-title">Famille</h3>
          </article>
        </div>
  
        <div className="hobbies-item swimming">
          <article className="hobbies-article">
            <img 
                src={Swimming}
                alt="swimming"
                className="hobbies-img"
            />
            <h3 className="hobbies-article-title">Natation</h3>
          </article>
        </div>
       
        <div className="hobbies-item videogame">
          <article className="hobbies-article">
            <img 
                src={Gaming}
                alt="gaming"
                className="hobbies-img"
            />
            <h3 className="hobbies-article-title">Jeux vidéo</h3>
          </article>
        </div>
     
        <div className="hobbies-item booking">
          <article className="hobbies-article">
            <img 
                src={Read}
                alt="joystick"
                className="hobbies-img"
            />
            <h3 className="hobbies-article-title">Lecture</h3>
          </article>
        </div>
     
        <div className="hobbies-item movies">
          <article className="hobbies-article">
            <img 
                src={Movie}
                alt="joystick"
                className="hobbies-img"
            />
            <h3 className="hobbies-article-title">Films</h3>
          </article>
        </div>
      
      </div>

    </div>
  </section>
)

export default Hobbies;