import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MediaCard from '../components/Cards'

// Page for my Portfolios Structure/Content
function Portfolio() {
  return (
    <div>
      <Header />
      <div className='portfolioTitle'>
        <h3>Portfolio</h3>
      </div>
      <MediaCard />
      <Footer />
    </div>
  )
}

export default Portfolio
