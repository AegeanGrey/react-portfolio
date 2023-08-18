import React from 'react';
import './assets/style/App.css';
import ocean from './assets/video/vecteezy-ocean.mp4';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './webpages/About';
import Portfolio from './webpages/Portfolio';
import Resume from './webpages/Resume';
import Contact from './webpages/Contact';

// Creates the initial application and routing to associated pages within the URL
function App() {
  return (
    <div className="Homepage">
      <video src={ocean} autoPlay loop muted />
      <BrowserRouter>
        <Routes>
          {/* About/About Me is registered as the default page on load */}
          <Route index element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
