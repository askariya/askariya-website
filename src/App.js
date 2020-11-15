import './App.css';
import Navigation from './components/Navigation';
import React, { useState, useEffect } from "react";
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import About from './components/pages/About';
import Contact from './components/pages/Contact';

// import ReactCSSTransitionGroup from 'react-transition-group'; // ES6

function App() {
  const [offsetY, setoffsetY] = useState(0);
  const handleScroll = () => setoffsetY(window.pageYOffset);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [bGroundImage, setBGroundImage] = useState(() => { 
    console.log("run App useState");
    
    return "images/test-para.jpg"
  
  });

  // why doesn't this work?!?!?!
  function setBackground(url) {
    setBGroundImage(url);
    console.log(document.getElementsByClassName("Parallax-background")[0].style.backgroundImage);
    // document.getElementsByClassName("Parallax-background")[0].style.backgroundImage = "url('images/test-para.jpg')";
    // console.log(document.getElementsByClassName("Parallax-background")[0].style.backgroundImage);
  }

  const renderContent = () => (
    <>
    <Router>
      <Navigation onChangeTab={setBackground} />
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
        <span>{bGroundImage}</span>
        <button onClick={() => setBackground("images/hotel.jpg")}> CLICK ME </button>
        <section className="Parallax">
          
          <div 
            className="Parallax-background" 
            style={{ transform: `translateY(-${offsetY * 0.5}px)`}}
          />
          {/*TODO find an image that can reverse move here <div className="Parallax-background-triangles"/> */}
          <div className="Parallax-content">{renderContent()}</div>
        </section>
      </>
  );
}

export default App;
