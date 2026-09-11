import React from 'react';

export default function Practices({ practiceCards }) {
  return (
    <section className="home-section" aria-labelledby="practices-title">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Our specialisms</p>
          <h2 id="practices-title">Four practices. A world of opportunity.</h2>
        </div>
        <div className="practice-grid">
          {practiceCards.map((practice, index) => (
            <button className="practice-card" key={practice.name} onClick={practice.go} aria-label={`Browse ${practice.name} jobs`}>
              <span className="practice-number">0{index + 1}</span>
              <h3>{practice.name}</h3>
              <p>{practice.tags}</p>
              <span className="practice-link">Explore jobs <span aria-hidden="true">↗</span></span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
