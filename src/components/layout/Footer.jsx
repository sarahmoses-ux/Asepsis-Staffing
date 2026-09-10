import React from 'react';
import Brand from '../ui/Brand.jsx';

export default function Footer({ goHome, goJobs, goRequest, goSection }) {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div>
          <button className="brand-link" onClick={goHome} aria-label="Asepsis Staffing home"><Brand inverse /></button>
          <p>Every kind of work. One trusted staffing partner.</p>
        </div>
        <nav aria-label="Footer navigation">
          <button onClick={goJobs}>Find work</button>
          <button onClick={goRequest}>Request workers</button>
          <button onClick={() => goSection('locations')}>Locations</button>
        </nav>
      </div>
      <div className="container footer-bottom">
        <small>© 2026 Asepsis Staffing, Inc.</small>
        <small>Equal opportunity employer.</small>
      </div>
    </footer>
  );
}
