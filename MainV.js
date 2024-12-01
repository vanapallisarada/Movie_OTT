


import React, { useState } from 'react';
import './Main.css'; // assuming you have a CSS file for styling
import bgvideo from './media/bgvideo.mp4';
import Home from './Home';

function MainV() {
  const [showMainV, setShowMainV] = useState(true);

  const handleHideMainV = () => {
    setShowMainV(false);
  };

  return (
    <>
      {showMainV && (
        <div className="container-fluid">
          <div className="video-background">
            <video autoPlay muted loop>
              <source src={bgvideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="content">
              <h1>Welcome to My Website</h1>
              <p>This is some sample text for demonstration purposes.</p>
              <button onClick={handleHideMainV} class = "btn btn-warning">Go to Home</button>
            </div>
          </div>
        </div>
      )}
      <Home />
    </>
  );
}

export default MainV;

