import React from 'react';

const steps = [
  { title: 'Apply in minutes', text: 'Tell us your skills, experience, and the shifts you can take.' },
  { title: 'Get verified', text: 'We handle the checks and credentials your role requires.' },
  { title: 'Start working', text: 'Get matched with an assignment and get paid weekly.' },
];

export default function HowItWorks({ goJobs }) {
  return (
    <section id="how-it-works" className="home-section how-section" aria-labelledby="how-title">
      <div className="container">
        <div className="section-heading heading-with-action">
          <div><p className="eyebrow">For job seekers</p><h2 id="how-title">Your next shift starts here.</h2></div>
          <button className="text-link" onClick={goJobs}>Browse openings <span aria-hidden="true">↗</span></button>
        </div>
        <ol className="steps-grid">
          {steps.map((step, index) => (
            <li key={step.title}><span className="step-number">0{index + 1}</span><h3>{step.title}</h3><p>{step.text}</p></li>
          ))}
        </ol>
      </div>
    </section>
  );
}
