import React from 'react';
import { NavHashLink } from 'react-router-hash-link';

// icons import
import CloseIcon from '../../assets/icons/menu/close.png';
import HomeIcon from '../../assets/icons/menu/home.png';
import CodeIcon from '../../assets/icons/menu/code.png';
import DescriptionIcon from '../../assets/icons/menu/book.png';
import AssignmentIndIcon from '../../assets/icons/menu/case.png';
import VideogameAssetIcon from '../../assets/icons/menu/camera.png';
import MailOutlineIcon from '../../assets/icons/menu/mail.png';



const ResNavbar = ({ open, setOpen }) => (
    <nav className="resNav">
        <div className="resNav-close">
            <img 
                src={CloseIcon}
                alt="close"
                className="menu-icon"
                onClick={() => setOpen(!open)}
            />
        </div>

        <NavHashLink 
            to="/#top"
            activeClassName="nav-link-selected"
            className="nav-link resNav-link"
            id="reslink-home"
            smooth
            onClick={() => setOpen(!open)}
        >
            <img 
                src={HomeIcon}
                alt="home"
                className="navbar-icon"
                onClick={() => setOpen(!open)}
            />
            Accueil
        </NavHashLink>

        <NavHashLink 
            to="/#portfolio"
            activeClassName="nav-link-selected"
            className="nav-link resNav-link"
            id="reslink-portfolio"
            smooth
            onClick={() => setOpen(!open)}
        >
            <img 
                src={DescriptionIcon}
                alt="book"
                className="navbar-icon"
                onClick={() => setOpen(!open)}
            />
            Portfolio
        </NavHashLink>

        <NavHashLink 
            to="/#skills"
            activeClassName="nav-link-selected"
            className="nav-link resNav-link"
            id="reslink-skills"
            smooth
            onClick={() => setOpen(!open)}
        >
            <img 
                src={CodeIcon}
                alt="snippet"
                className="navbar-icon"
                onClick={() => setOpen(!open)}
            />          
            Compétences
        </NavHashLink>

        <NavHashLink 
            to="/#career"
            activeClassName="nav-link-selected"
            className="nav-link resNav-link"
            id="reslink-career"
            smooth
            onClick={() => setOpen(!open)}
        >
            <img 
                src={AssignmentIndIcon}
                alt="clock"
                className="navbar-icon"
                onClick={() => setOpen(!open)}
            />
            Parcours
        </NavHashLink>

        <NavHashLink 
            to="/#hobbies"
            activeClassName="nav-link-selected"
            className="nav-link resNav-link"
            id="reslink-hobbies"
            smooth
            onClick={() => setOpen(!open)}
        >
            <img 
                src={VideogameAssetIcon}
                alt="joystick"
                className="navbar-icon"
                onClick={() => setOpen(!open)}
            />
            Loisirs
        </NavHashLink>

        <NavHashLink 
            to="/#contact"
            activeClassName="nav-link-selected"
            className="nav-link resNav-link"
            id="reslink-contact"
            smooth
            onClick={() => setOpen(!open)}
        >
            <img 
                src={MailOutlineIcon}
                alt="mail"
                className="navbar-icon"
                onClick={() => setOpen(!open)}
            />
            Contact
        </NavHashLink>
        
    </nav>
)

export default ResNavbar;