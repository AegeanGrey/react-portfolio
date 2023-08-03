import React from 'react';
import '../assets/style/App.css';
import ocean from '../assets/video/vecteezy-ocean.mp4';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Homepage() {
  return (
    <div className="Homepage">
      <video src={ocean} autoPlay loop muted />
      <Header />
      <Footer />
    </div>
  );
}

export default Homepage;
