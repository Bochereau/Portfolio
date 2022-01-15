import React from 'react';

import './style.scss';
import Header from '../Header';
import Home from '../Home';
import Portfolio from '../Portfolio';
import Skills from '../Skills';
import Career from '../Career';
import Hobbies from '../Hobbies';
import Contact from '../Contact';
import Footer from '../Footer';


class App extends React.Component {
  componentDidMount() {
    /*
    Changing Status 
    */
    // Get all sections that have an ID defined
    const sections = document.querySelectorAll("section[id]");
    // Add an event listener listening for scroll
    window.addEventListener("scroll", navHighlighter);

    function navHighlighter() {
    
      // Get current scroll position
      let scrollY = window.pageYOffset;
      
      // Now we loop through sections to get height, top and ID values for each
      sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        let sectionId = current.getAttribute("id");
      
        /*
        - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
        - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
        */

        // change status of laptop nav
       if(document.getElementById("link-" + sectionId)){
         if (
           scrollY > sectionTop &&
           scrollY <= sectionTop + sectionHeight
         ){
           document.getElementById("link-" + sectionId).classList.add("nav-link-selected");
         } else {
           document.getElementById("link-" + sectionId).classList.remove("nav-link-selected");
         }
        }

        // change status of tablet/smartphone nav
        if(document.getElementById("reslink-" + sectionId)){
          if (
            scrollY > sectionTop &&
            scrollY <= sectionTop + sectionHeight
          ){
            document.getElementById("reslink-" + sectionId).classList.add("nav-link-selected");
          } else {
            document.getElementById("reslink-" + sectionId).classList.remove("nav-link-selected");
          }
         }
      });
    }
  }
  render() {
  return(
    <div className="wrapper">
      <Header />
      <main className="app">
        <Home />
        <Portfolio />
        <Skills />
        <Career />
        <Hobbies />
        <Contact />
        <Footer />
      </main>
    </div>
)}
}
export default App;