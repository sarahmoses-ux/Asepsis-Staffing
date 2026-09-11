import React from 'react';

export default function SpecialismPhotos({ practiceCards }) {
  return (
<div className="hero-photos" aria-label="Our staffing specialisms">
          {practiceCards.map((practice) => (
            <figure key={practice.name}>
              <img src={practice.img} alt={practice.alt} width="400" height="400" />
              <figcaption>{practice.name}</figcaption>
            </figure>
          ))}
        </div>
  );
}
