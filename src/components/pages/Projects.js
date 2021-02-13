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
      <div className="Parallax-content-cta-proj" id="basa">
        <p>
          <b> BASA </b>
        </p>
      </div>
      <div className="Parallax-content-cta-proj" id="uCook">
        <p>
          <b> uCook </b>
        </p>
      </div>
      <div className="Parallax-content-cta-proj" id="pianio">
        <p>
          <b> Pian.io </b>
        </p>
      </div>
    </>
  );
}


export default Projects;