import React from 'react';

const PortfolioCard = ({ title, image, alt, onClick }) => (
  <div className="portfolio-card" onClick={onClick} tabIndex={0} role="button">
    <h3 className="portfolio-card-title">{title}</h3>
    <img className="portfolio-card-image" src={image} alt={alt} />
    <div className="portfolio-card-overlay-bg" />
    <span className="portfolio-card-more-center">En savoir +</span>
  </div>
);

export default PortfolioCard; 