import React from 'react';
import './assets/style/App.css';
import ocean from './assets/video/vecteezy-ocean.mp4';

function Homepage() {
  return (
    <div className="Homepage">
      <video src={ocean} autoPlay loop muted />
    </div>
  );
}

export default Homepage;
