//TODO: Add information about my projects here
import React from 'react';
import '../../App.css';
import './uCook.css'

import { Link } from 'react-router-dom';

function uCook () {
  return (
    <>
      <h1>UCook now baby</h1>
      {/* <div className="Parallax-content-heading-proj">
        <h1 className="Parallax-content-heading-text-proj">Test</h1>
        <h2 className="Parallax-content-heading-caption-proj">
          I have lost all feeling in my brain.
        </h2>
      </div> */}
      <Link id='proj-link' to='/'>
      <div className="Parallax-content-cta-proj">
        <div className="image-block" id="uCook">
          <p>
            <b> uCook TODO THIS PAGE </b>
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
      </Link>
    </>
  );
}


export default uCook;