import React from 'react';

export default function Locations({ locations, dispatch }) {
  return (
    <section id="locations" className="home-section locations-section" aria-labelledby="locations-title">
      <div className="container locations-grid">
        <div><p className="eyebrow">Local people. Local knowledge.</p><h2 id="locations-title">48 branches, coast to coast.</h2><p>Walk in Monday–Friday, 8am–5pm.<br />For urgent staffing, call our 24/7 dispatch line.</p><a className="text-link" href={`tel:${dispatch.replace(/[^+\d]/g, '')}`}>{dispatch}</a></div>
        <details className="locations-list"><summary>Explore our locations <span aria-hidden="true">+</span></summary><ul>{locations.map((location) => <li key={location.city}><span>{location.city}</span><span>{location.st}</span></li>)}</ul></details>
      </div>
    </section>
  );
}
