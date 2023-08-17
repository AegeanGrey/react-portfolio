import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Page for Resume Structure/Content
function Resume() {
  return (
    <div>
      <Header />
      <div className='resumeTitle'>
        <h3>Resume</h3>
      </div>

      {/* <div> */}
        {/* <p>Download my resume</p> */}
      {/* </div> */}

    <div className='FlexCard'>
      <section className='Card'>
        <div className='CardContent'>
        <div className='CardTitle'>
          <h4>Coding Languages</h4>
        </div>
        <div className='CardList'>
          <ul>
            <li>CSS</li>
            <li>HTML</li>
            <li>MySQL</li>
            <li>JavaScript</li>
          </ul>
        </div>
        </div>
      </section>

      <section className='Card'>
        <div className='CardContent'>
        <div className='CardTitle'>
          <h4>Libraries & Frameworks</h4>
        </div>
        <div className='CardList'>
          <ul>
            <li>jQuery</li>
            <li>React.js</li>
            <li>Bootstrap</li>
            <li>Express.js</li>
          </ul>
        </div>
        </div>
      </section>

      <section className='Card'>
        <div className='CardContent'>
        <div className='CardTitle'>
          <h4>Database Structures</h4>
        </div>
        <div className='CardList'>
          <ul>
            <li>NoSQL</li>
            <li>MySQL</li>
            <li>MongoDB</li>
          </ul>
        </div>
        </div>
      </section>

      <section className='Card'>
        <div className='CardContent'>
        <div className='CardTitle'>
          <h4>Practices</h4>
        </div>
        <div className='CardList'>
          <ul>
            <li>DRY</li>
            <li>Agile</li>
            <li>Object-Oriented Programming</li>
          </ul>
        </div>
        </div>
      </section>
    </div>
      <Footer />
    </div>
  )
}

export default Resume
