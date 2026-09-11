import React, { useEffect, useRef, useState } from 'react';
import Brand from '../ui/Brand.jsx';

export default function Header({ screen, goHome, goJobs, goRequest, goApply, goWorker, goEmployer, goSection, savedCount }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const accountRef = useRef(null);
  useEffect(() => {
    const close = (event) => {
      if (event.type === 'keydown' && event.key !== 'Escape') return;
      if (event.type === 'keydown' || !accountRef.current?.contains(event.target)) setAccountOpen(false);
      if (event.type === 'keydown') setMenuOpen(false);
    };
    document.addEventListener('pointerdown', close);
    document.addEventListener('keydown', close);
    return () => { document.removeEventListener('pointerdown', close); document.removeEventListener('keydown', close); };
  }, []);
  useEffect(() => { setMenuOpen(false); setAccountOpen(false); }, [screen]);
  const navigate = (action) => () => { action(); setMenuOpen(false); setAccountOpen(false); };

  return (
    <header className="site-header">
      <div className="container header-inner">
        <button className="brand-link" onClick={navigate(goHome)} aria-label="Asepsis Staffing home"><Brand /></button>
        <nav id="primary-navigation" className={`primary-nav${menuOpen ? ' is-open' : ''}`} aria-label="Main navigation">
          <button onClick={navigate(goJobs)} aria-current={['jobs', 'detail'].includes(screen) ? 'page' : undefined}>Find work</button>
          <button onClick={navigate(goRequest)} aria-current={screen === 'request' ? 'page' : undefined}>For employers</button>
          <button onClick={navigate(() => goSection('how-it-works'))}>How it works</button>
        </nav>
        <div className="header-actions">
          <div className="account" ref={accountRef}>
            <button className="account-toggle" onClick={() => setAccountOpen(!accountOpen)} aria-expanded={accountOpen} aria-controls="account-links">Account <span aria-hidden="true">⌄</span></button>
            {accountOpen && (
              <div className="account-panel" id="account-links">
                <button onClick={navigate(goWorker)}>Worker dashboard</button>
                <button onClick={navigate(goEmployer)}>Employer portal</button>
                <button onClick={navigate(goWorker)}>Saved jobs <span>{savedCount}</span></button>
              </div>
            )}
          </div>
          <button className="button button--primary header-apply" onClick={navigate(goApply)}>Apply now</button>
          <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-controls="primary-navigation" aria-expanded={menuOpen} aria-label="Menu">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><path d={menuOpen ? 'M6 6l12 12M6 18L18 6' : 'M4 7h16M4 12h16M4 17h16'} /></svg>
          </button>
        </div>
      </div>
    </header>
  );
}
