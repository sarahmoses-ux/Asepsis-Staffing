import React from 'react';
import Hero from './Hero.jsx';
import Practices from './Practices.jsx';
import HowItWorks from './HowItWorks.jsx';
import Employers from './Employers.jsx';
import Locations from './Locations.jsx';
import '../../styles/home.css';

export default function HomePage(values) {
  return (
    <div className="home-page">
      <Hero {...values} />
      <Practices practiceCards={values.practiceCards} />
      <HowItWorks goApply={values.goApply} />
      <Employers goRequest={values.goRequest} />
      <Locations locations={values.locations} dispatch={values.dispatch} />
    </div>
  );
}
