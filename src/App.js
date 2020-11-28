import './App.css';
import Navigation from './components/Navigation';
import Container from "./components/Container";
import React, { useState, useEffect } from "react";
import {BrowserRouter as Router } from 'react-router-dom';

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
    <Router basename="askariya-website">
      <Navigation onChangeTab={setBackground} />
      <Container />
    </Router>
    </>
    
  );

  return (
      <>
        {/* <span>{bGroundImage}</span>
        <button onClick={() => setBackground("images/hotel.jpg")}> CLICK ME </button> */}
        <section className="Parallax">
          
          <div 
            className="Parallax-background" 
            style={{ transform: `translateY(-${offsetY * 0.8}px)`}}
          />
          {/*TODO find an image that can reverse move here <div className="Parallax-background-triangles"/> */}
          <div className="Parallax-content">{renderContent()}</div>
        </section>
      </>
  );
}

export default App;
