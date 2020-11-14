import './App.css';
import Navigation from './components/Navigation';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import About from './components/pages/About';
import Contact from './components/pages/Contact';

import React, { useState, useEffect } from "react";

function App() {
  const [offsetY, setoffsetY] = useState(0);
  const handleScroll = () => setoffsetY(window.pageYOffset);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderContent = () => (
    <>
    <Router>
      <Navigation />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/projects' component={Projects} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
      </Switch>
    </Router>
    </>
    
  );

  return (
      <>
        <section className="Parallax">
          
          <div 
            className="Parallax-background" 
            style={{ transform: `translateY(${offsetY * 0.5}px)`}}
          />
          {/* <div className="Parallax-background-triangles"/> */}
          <div className="Parallax-content">{renderContent()}</div>
        </section>
      </>
  );
}

export default App;
