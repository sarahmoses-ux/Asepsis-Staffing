import SpecialismPhotos from '../../components/ui/SpecialismPhotos.jsx';
import React from 'react';

export default function Hero({ practiceCards, search, zip, onSearch, onZip, runSearch, goRequest }) {
  return (
    <section className="home-hero" aria-labelledby="home-title">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Local and international opportunities</p>
          <h1 id="home-title">Every kind of work.<br />One trusted staffing partner.</h1>
          <p className="hero-description">Explore local, remote, and international opportunities across healthcare, trades, and professional roles.</p>
          <form className="job-search" onSubmit={(event) => { event.preventDefault(); runSearch(); }} aria-label="Search jobs">
            <label><span className="sr-only">Job title, trade, or licence</span><input value={search} onChange={onSearch} placeholder="Job title, trade, or licence" /></label>
            <label><span className="sr-only">City or state</span><input value={zip} onChange={onZip} placeholder="City or state" /></label>
            <button className="button button--primary" type="submit">Search jobs</button>
          </form>
          <button className="hero-employer-link" onClick={goRequest}>Hiring? Request workers <span aria-hidden="true">↗</span></button>
        </div>
        <SpecialismPhotos practiceCards={practiceCards} />
      </div>
    </section>
  );
}
