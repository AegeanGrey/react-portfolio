import React from 'react';
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <h1>Todd Dharni</h1>
        <div className='headerContent'>
            <ul>
              <li><Link className='link' to="/about">About Me</Link></li>
              <li><Link className='link' to="/portfolio">Portfolio</Link></li>
              <li><Link className='link' to="/resume">Resume</Link></li>
              <li><Link className='link' to="/contact">Contact</Link></li>
            </ul>
        </div>
    </header>
  );
}

export default Header
