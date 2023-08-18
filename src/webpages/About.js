import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ocean from '../assets/images/ocean.jpg';

// Page for Information about me w/ Structure/Content
function About() {
  return (
    <div>
      <Header />
      <section className="border">
            <div className="card-header">
              <h3>About Me</h3>
              <p>My name is Todd, and I built this website that you're seeing from scratch!</p>
              <p>As an active learner in coding languages, I aspire to freelance my skillset and developing interactive experiences that can inspire others.</p>
              <p>I consider myself as a creative, always pushing for new ways to learn and adapt in order to thrive in a given environment by shifting perspective.</p>
              <p>When I'm not in the ocean impersonating dolphins you can find me creating music, building computers, or learning game development!</p>
            </div>
            <img src={ocean} alt="Man attempting to be as graceful as a dolphin rising from the ocean" />
        </section>
      <Footer />
    </div>
  )
}

export default About
