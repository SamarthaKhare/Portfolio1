import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero'
import Skills from './components/Skills'
import WorkEx from './components/Workex';
import Projects from './components/Projects';
// wait until window, stylesheets, images, links, and other media assets are loaded
{
  document.addEventListener("DOMContentLoaded", function (event) {

    // wait until window, stylesheets, images, links, and other media assets are loaded
    window.onload = function () {

      document.getElementById("root").style.display = "block";


    };
  });
}

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Skills />
      <WorkEx />
      <Projects />
    </div>
  )
}

export default App
