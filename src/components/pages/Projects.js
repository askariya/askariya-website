//TODO: Add information about my projects here
import React from 'react';
import '../../App.css';
import './Projects.css'

function Projects () {
  return (
    <>
      <h1>Projects now baby</h1>
      {/* <div className="Parallax-content-heading-proj">
        <h1 className="Parallax-content-heading-text-proj">Test</h1>
        <h2 className="Parallax-content-heading-caption-proj">
          I have lost all feeling in my brain.
        </h2>
      </div> */}
      <div className="Parallax-content-cta-proj">
        <div className="image-block" id="basa">
          <p>
            <b> BASA </b>
          </p>
        </div>
        <div className="text-block">
          <p>
            BASA is a DBMS that was created to deal with a mock-airline's basic transactions in a reliable and logical manner.
          </p>
          <p> 
            It was implemented as a website to provide a user interface for the different types of users that need to access and 
            alter information concerning the airline and its components.
          </p> 
          <br/>
          <p> 
            Click on this tile to find out more!
          </p> 
        </div>
      </div>
      <div className="Parallax-content-cta-proj">
        <div className="image-block" id="uCook">
          <p>
            <b> uCook </b>
          </p>
        </div>
        <div className="text-block">
          <p>
            uCook is a prototype for a cooking instructor app that allows you to cook multiple recipes in parallel.
          </p> 
          <p>
            It's a prototype in the sense that there is very little back-end logic to the functionality it provides, 
            rather it's a demonstration of a UI for a potential user based on researched use-cases.
          </p> 
          <br/>
          <p> 
            Click on this tile to find out more!
          </p> 
        </div>
      </div>
      <div className="Parallax-content-cta-proj">
        <div className="image-block" id="pianio">
          <p>
            <b> Pian.io </b>
          </p>
        </div>
        <div className="text-block">
          <p>
            Pian.io is a single-page entertainment website where users can interact with a piano keyboard to create simple music compositions. 
            The interface is designed to be usable for both skilled musicians and novices alike.
          </p>
          <p>
            Users are able to create music through an online platform and collaborate with each other to generate musical compositions.
          </p>
          <br/>
          <p> 
            Click on this tile to find out more!
          </p> 
        </div>
      </div>
    </>
  );
}


export default Projects;