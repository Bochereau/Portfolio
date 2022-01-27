import React from 'react';

// downloadable content
import Opquast from '../../assets/pdf/Opquast-04.2021.pdf';
import TP from '../../assets/pdf/TP.pdf';
import CV from '../../assets/pdf/CV.pdf';
import DownloadIcon from '../../assets/icons/download.png';
import Storage from '../../assets/icons/hdd.png';

// contact icon from material ui
import MailOutlineIcon from '../../assets/icons/menu/mail.png';


import './style.scss';

const Contact = () => (
  <section className="top-separation" id="contact">
    <div className="contact">
      <h1 className="part-title">
        <img 
            src={MailOutlineIcon}
            alt="mail"
            className="title-img"
        />
        Contact
      </h1>
      <p className="part-subtitle">Toutes les informations pour me contacter et en savoir plus sur moi.</p>

      <hr />

      <div className="contact-content">
        <article className="contact-link">
            <p className="contact-link-title">
              Je serai ravi de pouvoir échanger avec vous soit par mail à 
                  <a 
                    href="mailto:antbochereau@gmail.com" 
                    className="contact-link-item"
                  >
                    antbochereau@gmail.com
                  </a>
              ou par téléphone au 
                <a
                  href="tel:+33678370472"
                  className="contact-link-item phone"
                >
                  06.78.37.04.72
                </a>
              .
            </p>
        </article>

        <article className="contact-docs">
          <p className="contact-docs-title">Vous pouvez consulter et télécharger ci-dessous mes documents professionnels :</p>
          <div className="contact-docs-dl">
            <a 
              href={CV} 
              download="CV_Antoine_Bochereau"
              className="contact-docs-dl-button cv"
            >
              <div className="contact-docs-dl-button-primary">
                <img 
                  src={DownloadIcon}
                  alt="télechargement"
                  className="contact-docs-dl-button-icon"
                />
                <p>Curriculum Vitae</p>
              </div>
              <div className="contact-docs-dl-button-secondary">
                <img 
                  src={Storage}
                  alt="télechargement"
                  className="home-cv-button-icon"
                />
                <p>PDF : 468 Ko</p>
              </div>
            </a>

            <a
              href={TP} 
              download="TP_Antoine_Bochereau"
              className="contact-docs-dl-button tp"
            >
              <div className="contact-docs-dl-button-primary">
                <img 
                  src={DownloadIcon}
                  alt="télechargement"
                  className="contact-docs-dl-button-icon"
                />
                <p>Titre Professionnel</p>
              </div>
              <div className="contact-docs-dl-button-secondary">
                <img 
                  src={Storage}
                  alt="télechargement"
                  className="home-cv-button-icon"
                />
                <p>PDF : 471 Ko</p>
              </div>
            </a>
            
            <a
              href={Opquast}
              download="Opquast_Antoine_Bochereau"
              className="contact-docs-dl-button op"
            >
              <div className="contact-docs-dl-button-primary">
                <img 
                  src={DownloadIcon}
                  alt="télechargement"
                  className="contact-docs-dl-button-icon"
                />
                <p>Certification Opquast</p>
              </div>
              <div className="contact-docs-dl-button-secondary">
                <img 
                  src={Storage}
                  alt="télechargement"
                  className="home-cv-button-icon"
                />
                <p>PDF : 253 Ko</p>
              </div>
            </a>
          </div>
        </article>

      </div>
    </div>
  </section>
)

export default Contact;