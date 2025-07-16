import React from 'react';

const PortfolioModal = ({ project, onClose, totalProjects, currentIndex, onDotClick }) => {
    if (!project) return null;
    const { title, image, alt, description, tech, links } = project;
    return (
        <div className="portfolio-modal" onClick={onClose}>
            <div className="portfolio-modal-content" onClick={e => e.stopPropagation()}>
                <button className="portfolio-modal-close" onClick={onClose} aria-label="Fermer">&times;</button>
                <div className="portfolio-modal-body">
                    <div className="portfolio-modal-image-wrapper">
                        <img src={image} alt={alt} className="portfolio-modal-image" />
                        {/* Dots sous l'image, visible seulement sur desktop */}
                        {typeof totalProjects === 'number' && totalProjects > 1 && (
                          <div className="portfolio-modal-dots portfolio-modal-dots--desktop">
                            {Array.from({ length: totalProjects }).map((_, idx) => (
                              <button
                                key={idx}
                                className={`portfolio-modal-dot${idx === currentIndex ? ' active' : ''}`}
                                onClick={() => onDotClick(idx)}
                                aria-label={`Voir le projet ${idx + 1}`}
                                type="button"
                              />
                            ))}
                          </div>
                        )}
                    </div>
                    <div className="portfolio-modal-details">
                      <div className="portfolio-modal-details-main">
                        <h2 className="portfolio-modal-title">{title}</h2>
                        <article className="portfolio-modal-description">{description}</article>
                      </div>
                      <div className="portfolio-modal-details-side">
                        <div className="portfolio-modal-tech">
                          {tech && tech.map((t, idx) => (
                            <span key={idx} className="portfolio-modal-tech-badge"># {t}</span>
                          ))}
                        </div>
                        {links?.site && (
                          <div className="portfolio-modal-links">
                            <a href={links.site} target="_blank" rel="noopener noreferrer" className="portfolio-modal-links-open">
                              <span>Visiter le site</span>
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                                <polyline points="15 3 21 3 21 9"/>
                                <line x1="10" y1="14" x2="21" y2="3"/>
                              </svg>
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                    {/* Dots en bas, visible seulement sur mobile/tablette */}
                    {typeof totalProjects === 'number' && totalProjects > 1 && (
                      <div className="portfolio-modal-dots portfolio-modal-dots--mobile">
                        {Array.from({ length: totalProjects }).map((_, idx) => (
                          <button
                            key={idx}
                            className={`portfolio-modal-dot${idx === currentIndex ? ' active' : ''}`}
                            onClick={() => onDotClick(idx)}
                            aria-label={`Voir le projet ${idx + 1}`}
                            type="button"
                          />
                        ))}
                      </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PortfolioModal; 