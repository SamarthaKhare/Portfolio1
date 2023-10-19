import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero'
import Skills from './components/Skills'
import WorkEx from './components/Workex';
import Projects from './components/Projects';

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
