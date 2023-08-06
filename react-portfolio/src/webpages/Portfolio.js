import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import united from '../assets/images/project-united.jpg';
import notes from '../assets/images/note-taker.jpg';
import cabinet from '../assets/images/cabinet-keeper.jpg';
import password from '../assets/images/password-generator.png';
import readme from '../assets/images/document-info.png';
import lead from '../assets/images/lead-generation.png';

// Page for my Portfolios Structure/Content
function Portfolio() {
  return (
    <div>
      <Header />
        <section>
          <h3 className="center">Portfolio</h3>
            <div className="portfolio">

                <article className="card">
                    <div className="card-header">
                      <h4>Project United</h4>
                      <p>A group project in support of LGBTQ+ communities within Utah</p>
                    </div>
                  <a href="https://project-united.herokuapp.com" rel='noopener noreferrer' target="_blank"><img src={united} alt="Simple formatted text that says Project United with purple background" /></a>
                </article>

                <article className="card">
                    <div className="card-header">
                        <h4>Note Taker</h4>
                        <p>Established Routing and HTTP Requests/Responses</p>
                    </div>
                    <a href="https://noteynotes-a2993dbf9bbe.herokuapp.com" rel='noopener noreferrer' target="_blank"><img src={notes} alt="Simple formatted text that says Note Taker with a baby blue background" /></a>
                </article>

                <article class="card">
                    <div class="card-header">
                        <h4>Cabinet Keeper</h4>
                        <p>Displays recipes based on user listed ingredients</p>
                    </div>
                    <a href="https://aegeangrey.github.io/team-waffles/" rel='noopener noreferrer' target="_blank"><img src={cabinet} alt="" /></a>
                </article>
                
                <article class="card">
                    <div class="card-header">
                        <h4>Password Generator</h4>
                        <p>Built JavaScript</p>
                    </div>
                    <a href="https://aegeangrey.github.io/password-generator/" rel='noopener noreferrer' target="_blank"><img src={password} alt="" /></a>
                </article>

                <article class="card">
                    <div class="card-header">
                        <h4>README Generator</h4>
                        <p>Creates README File for projects</p>
                    </div>
                    <a href="https://github.com/AegeanGrey/readme-generator" rel='noopener noreferrer' target="_blank"><img src={readme} alt="Sketch of a file with document" /></a>
                </article>

                <article class="card">
                    <div class="card-header">
                        <h4>Horiseon</h4>
                        <p>Provided Semantic HTML</p>
                    </div>
                    <a href="https://aegeangrey.github.io/horiseon-mock-up/" rel='noopener noreferrer' target="_blank"><img src={lead} alt="Gear being processed into currency" /></a>
                </article>
            
            </div>
        </section>
      <Footer />
    </div>
  )
}

export default Portfolio
