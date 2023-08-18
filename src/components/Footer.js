import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="footContain">
        <div className='Icons'>
          <a href='https://github.com/AegeanGrey?tab=repositories' rel='noopener noreferrer' target='_blank'><i className="fa-brands fa-square-github"></i></a>
          <a href='https://www.linkedin.com/in/todd-dharni-37160120b/' rel='noopener noreferrer' target='_blank'><i className="fa-brands fa-linkedin"></i></a>
          <a href='https://instagram.com/juanthetoasterstrudel?igshid=OGQ5ZDc2ODk2ZA==' rel='noopener noreferrer' target='_blank'><i className="fa-brands fa-instagram"></i></a>
        </div>
        <div className='Credit'>
          <h6>Background Video provided by Vecteezy</h6>
          <h6>© 2023 Developed & Designed by Todd Dharni</h6>
        </div>
      </div>
    </footer>
  );
}

export default Footer
