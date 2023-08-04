import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import united from '../assets/images/project-united.jpg';
import notes from '../assets/images/note-taker.jpg';

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
            </div>
        </section>
      <Footer />
    </div>
  )
}

export default Portfolio
