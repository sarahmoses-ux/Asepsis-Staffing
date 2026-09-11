import React from 'react';

export default function Hero({ practiceCards, search, zip, onSearch, onZip, runSearch, goRequest }) {
  return (
    <section className="home-hero" aria-labelledby="home-title">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Healthcare / Trades / Professional</p>
          <h1 id="home-title">Every kind of work.<br />One trusted staffing partner.</h1>
          <p className="hero-description">Healthcare, trades, and professional roles. Find your next opportunity or the people your team needs.</p>
          <form className="job-search" onSubmit={(event) => { event.preventDefault(); runSearch(); }} aria-label="Search jobs">
            <label><span className="sr-only">Job title, trade, or licence</span><input value={search} onChange={onSearch} placeholder="Job title, trade, or licence" /></label>
            <label><span className="sr-only">City or state</span><input value={zip} onChange={onZip} placeholder="City or state" /></label>
            <button className="button button--primary" type="submit">Search jobs</button>
          </form>
          <button className="hero-employer-link" onClick={goRequest}>Hiring? Request workers <span aria-hidden="true">↗</span></button>
        </div>
        <div className="hero-photos" aria-label="Our four staffing practices">
          {practiceCards.map((practice) => (
            <figure key={practice.name}>
              <img src={practice.img} alt={practice.alt} width="400" height="400" />
              <figcaption>{practice.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
