
import React from 'react';
import './App.css';
;

import Header from './components/Header';
import Summary from './components/Summary';
import Experience from './components/Experience';
import Projects from './components/Projects.jsx';
import Technologies from './components/Technologies';
import Education from './components/Education';
import Certifications from './components/Certifications';

function App() {
  return (
    <div className="App">
      <Header />
      <Summary />
      <Experience />
      <Projects />
      <Technologies />
      <Education />
      <Certifications />
    </div>
  );
}

export default App;
