import React from 'react';
import '../../App.css';
import './uCook.css'
import ucook_recipe from '../../images/ucook-recipe.png';

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
      <Link id='back-button-link' to='/projects'>
        <button class="back-button" onclick="history.back()">Back</button>
      </Link>
      <img id="ucook-recipe" class="centred-img" src={ucook_recipe}/>
      <div className="Parallax-content-cta-ucook">
        <div className="text-block-ucook">
          <h2>Description</h2>
          <p>
            uCook is a prototype for a cooking instructor app that allows you to cook multiple recipes in parallel.
          </p> 
          <p>
            It's a prototype in the sense that there is very little back-end logic to the functionality it provides, 
            rather it's a demonstration of a UI for a potential user based on researched use-cases.
            All of the system's basic functionality has been implemented in WPF in a hardcoded manner.
          </p>
          <p>
            A user is able to:
            <ul>
              <li>view recipes</li>
              <li>add recipes to a collection of favourites</li>
              <li>share recipes</li>
              <li>cook one or more recipes at a time</li>
            </ul>
          </p> 
        </div>
      </div>
      <div className="Parallax-content-cta-ucook" id="red-background">
        <div className="text-block-ucook">
          <h2>Demonstration</h2>
          <p>
            I created the video below to provide a detailed explanation of the features of the app.
          </p> 
          <div class="videoWrapper">
            <iframe src="https://drive.google.com/file/d/1X8JIyClKA5A4L0m8Zb7Tk7_Sdj0CfDnu/preview" width="100%" height="auto"></iframe>
          </div>
        </div>
      </div>
      <div className="Parallax-content-cta-ucook">
        <div className="text-block-ucook">
          <h2>Development Languages & Tools</h2>
          <p>
            The following languages and software were used in the development of the app:
          </p>
          <ul>
              <li>WPF</li>
              <li>C#</li>
              <li>Visual Studio</li>
            </ul>
        </div>
      </div>
      <div className="Parallax-content-cta-ucook" id="red-background">
        <div className="text-block-ucook">
          <h2>Links</h2>
          <p>
            Below are some links to content pertaining to this project:
          </p>
          <ul>
              <li>www.google.com</li>
              <li>www.woogle.com</li>
              <li>www.moogle.com</li>
            </ul>
        </div>
      </div>
    </>
  );
}


export default uCook;