//TODO make an introduction here
import React from 'react';
import '../../App.css';
import Hero from '../Hero';

function Home () {
  return (
    <>
      <div className="Parallax-content-heading">
        <h1 className="Parallax-content-heading-text">Test</h1>
        <h2 className="Parallax-content-heading-caption">
          Your one-stop source of Web Development tricks
        </h2>
      </div>
      <div className="Parallax-content-cta">
        <p>
          <b>1. Like the video.</b> Because it helps me and my channel
        </p>
        <p>
          <b>2. Like the video.</b> To see more content like that!
        </p>
        <p>
          <b>3. Follow the Github link.</b> And play with this code yourself!
        </p>
      </div>
      <Hero />
    </>
  );
}


export default Home;