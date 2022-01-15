import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';

import './style.scss';
import Navbar from './Navbar';
import ResNavbar from './ResNavbar';

import MenuIcon from '../../assets/icons/menu/menu.png';

const Header = () => {

  // show/hide navBar for clicking menu burger on tablet/mobile
  const [open, setOpen] = useState(false);

  return(
    <header className="header">
      <HashLink
          to="#"
          smooth
      >
        <h1 className="header-title">Antoine Bochereau</h1>
      </HashLink>
      
      <div className="header-menu">
        <img 
          src={MenuIcon}
          alt="menu"
          className="menu-icon"
          onClick={() => setOpen(!open)}
        />
      </div>
      <Navbar />
      {open && (<ResNavbar open={open} setOpen={setOpen}/>)}
    </header>
  )
}

export default Header;