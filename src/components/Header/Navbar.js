import React from 'react';
import { NavHashLink } from 'react-router-hash-link';

const Navbar = () => (
  <nav className="nav">
    <NavHashLink
      to="/#"
      activeClassName="nav-link-selected"
      className="nav-link"
      id="link-home"
      smooth
    >
      Accueil
    </NavHashLink>

    <NavHashLink 
      to="/#portfolio"
      activeClassName="nav-link-selected"
      className="nav-link"
      id="link-portfolio"
      smooth
    >
      Portfolio
    </NavHashLink>

    <NavHashLink 
      to="/#skills"
      activeClassName="nav-link-selected"
      className="nav-link"
      id="link-skills"
      smooth
    >
      Compétences
    </NavHashLink>

    <NavHashLink 
      to="/#career"
      activeClassName="nav-link-selected"
      className="nav-link"
      id="link-career"
      smooth
    >
      Parcours
    </NavHashLink>

    <NavHashLink 
      to="/#hobbies"
      activeClassName="nav-link-selected"
      className="nav-link"
      id="link-hobbies"
      smooth
    >
      Loisirs
    </NavHashLink>
    
    <NavHashLink 
      to="/#contact"
      activeClassName="nav-link-selected"
      className="nav-link"
      id="link-contact"
      smooth
    >
      Contact
    </NavHashLink>
  </nav>
)

export default Navbar;