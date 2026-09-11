import React from 'react';

export default function Employers({ goRequest }) {
  return (
    <section id="employers" className="home-section employers-section" aria-labelledby="employers-title">
      <div className="container employer-grid">
        <div><p className="eyebrow">For employers</p><h2 id="employers-title">The right people.<br />Ready for your business.</h2><p className="employer-description">From a single shift to a permanent hire, we handle recruiting, screening, and payroll so you can focus on your team.</p><button className="button button--sand" onClick={goRequest}>Request workers <span aria-hidden="true">↗</span></button></div>
        <ul className="service-list">
          <li><h3>Temporary staffing</h3><p>Extra support for busy periods and short-term coverage.</p></li>
          <li><h3>Temp-to-hire</h3><p>Work together before making a permanent commitment.</p></li>
          <li><h3>Direct placement</h3><p>Find the right person for a long-term role.</p></li>
        </ul>
      </div>
    </section>
  );
}
