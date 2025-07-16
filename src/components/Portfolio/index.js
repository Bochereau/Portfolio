import React from 'react';

import './style.scss';
import monilum from '../../assets/images/portfolio/monilum.png';
import VGC from '../../assets/images/portfolio/VGC.png';
import limitbreak from '../../assets/images/portfolio/blog.png'
import cargo from '../../assets/images/portfolio/cargo.png'
import cargopocket from '../../assets/images/portfolio/cargopocket.png'

// material ui icons
import DescriptionIcon from '../../assets/icons/menu/book.png';
import PortfolioCard from './PortfolioCard';
import PortfolioModal from './PortfolioModal';

const projects = [
  {
    title: 'Cargo-TMS',
    image: cargo,
    alt: 'Site Web Fret Solutions',
    description: `Cargo-TMS est un logiciel transport full web.\nIl permet une gestion complète des activités de transport routier de marchandises.\nSes fonctionnalités s'étendent de la saisie des commandes jusqu'à la facturation.`,
    tech: ['jQuery', 'HERE Maps', 'rubyOnRails', 'PostgreSQL'],
    links: {
      site: 'http://www.fretsolutions.fr/',
    },
  },
  {
    title: 'Cargo Pocket',
    image: cargopocket,
    alt: 'Application Android/iOS pour Cargo-TMS',
    description: `Cargo Pocket est un application mobile dédiée aux utilisateurs du logiciel Cargo-TMS.\nOn y retrouve les fonctionnalités essentielles de Cargo-TMS.\nDisponible sur Android et iOS.`,
    tech: ['React Native', 'Maps'],
    links: {
      site: null,
    },
  },
  {
    title: 'Limit Break',
    image: limitbreak,
    alt: 'Site Web Limit Break',
    description: `Limit Break est un projet personnel que j'ai réalisé pour moi-même.\nIl prend la forme d'un blog dédié aux jeux vidéo. On y retrouve divers articles traitant de jeux actuels et passés.`,
    tech: ['Vite', 'Vercel', 'API Serverless', 'MongoDB', 'Cloudinary'],
    links: {
      site: 'https://limitbreak.vercel.app/',
    },
  },
  {
    title: 'VideoGame Collection',
    image: VGC,
    alt: 'Site Web VideoGameCollection',
    description: `VideoGameCollection est un outil de gestion de collection de jeux video.\nAjouter, supprimer, modifier des listes de jeux et consoles. Il s'agit d'un projet personnel.`,
    tech: ['React', 'Redux', 'Node', 'Mongoose', 'MongoDB'],
    links: {
      site: null,
    },
  },
  {
    title: 'Monilum',
    image: monilum,
    alt: 'Site Web Monilum',
    description: `Monilum est mon projet de fin d'étude. Il s'agit d'un site qui permet la gestion de luminaires connectés.\nRéalisé en équipe de 4 développeurs en méthode Scrum/Agile.\nLe site est desormais fermé. Erreur 404...`,
    tech: ['React', 'Redux', 'Node', 'Express', 'PostgreSQL', 'Leaflet'],
    links: {
      site: null,
    },
  },
];

const Portfolio = () => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(null);

  const handleCardClick = (project) => {
    const idx = projects.findIndex(p => p === project);
    setSelectedIndex(idx);
    setModalOpen(true);
  };
  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedIndex(null);
  };
  const handlePrev = () => {
    setSelectedIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };
  const handleNext = () => {
    setSelectedIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const hasPrev = projects.length > 1;
  const hasNext = projects.length > 1;
  const selectedProject = selectedIndex !== null ? projects[selectedIndex] : null;

  return (
    <section className="separation" id="portfolio">
      <div className="portfolio">
        <h1 className="part-title">
          <img 
              src={DescriptionIcon}
              alt="menu"
              className="title-img"
          />
          Portfolio
        </h1>
        <p className="part-subtitle">Les différents projets sur lesquels j'ai travaillé.</p>
        <div className="portfolio-list">
          {projects.map((project, idx) => (
            <PortfolioCard key={idx} {...project} onClick={() => handleCardClick(project)} />
          ))}
        </div>
        <div className="portfolio-link">
          <a 
            href="https://github.com/Bochereau"
            target="_blank"
            rel="noreferrer"
          >
            <button className="link">Voir mon profil Github</button>
          </a>
        </div>
        {modalOpen && (
          <PortfolioModal
            project={selectedProject}
            onClose={handleCloseModal}
            totalProjects={projects.length}
            currentIndex={selectedIndex}
            onDotClick={setSelectedIndex}
          />
        )}
      </div>
    </section>
  );
}

export default Portfolio;