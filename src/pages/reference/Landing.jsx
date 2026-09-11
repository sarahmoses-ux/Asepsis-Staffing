import React from 'react';
import LandingView from './LandingView.jsx';

const COPY = {
  Workers: {
    headline: 'Work this week. Paid this Friday.',
    subhead: 'One application puts you in front of every Asepsis practice — healthcare, skilled trades, technical trades, professional, and international roles. No resume needed for most openings.',
    ctaLabel: 'Apply now',
    ctaNote: 'Takes about four minutes',
    proof: [
      { k: '48', v: 'branches — apply online or walk in' },
      { k: 'Friday', v: 'pay, every week, direct deposit or pay card' },
      { k: '125,000+', v: 'workers placed since 2009' }
    ],
    steps: [
      { n: '01', t: 'Apply in minutes', d: 'Tell us your licences, the shifts you can take, and how you want to be paid.' },
      { n: '02', t: 'Get verified', d: 'We handle I-9 and E-Verify, the background check, and any licence verification.' },
      { n: '03', t: 'Start working', d: 'Clock in on your first assignment and get paid weekly from day one.' }
    ],
    closeHead: 'Your next shift is already open.',
    closeNote: 'Openings across all five specialisms, in 48 markets, updated through the day.'
  },
  Employers: {
    headline: 'Workers on site this week — screened, insured, on our payroll.',
    subhead: 'One staffing partner for nurses, tradespeople, technicians, and office staff. Compliance, workers\u2019 comp, and payroll stay with us until you convert them.',
    ctaLabel: 'Request workers',
    ctaNote: 'A recruiter responds within two hours',
    proof: [
      { k: '92%', v: 'of urgent requests filled inside 24 hours' },
      { k: '24/7', v: 'dispatch line, answered by a person' },
      { k: '5', v: 'dedicated specialisms, one account manager' }
    ],
    steps: [
      { n: '01', t: 'Tell us what you need', d: 'Role, headcount, shift, and site — plus the screening your industry requires.' },
      { n: '02', t: 'We source and screen', d: 'MVR, drug screens, credential and licence verification, E-Verify on every hire.' },
      { n: '03', t: 'You approve, they start', d: 'Approve candidates in the portal and we confirm start dates the same day.' }
    ],
    closeHead: 'Need coverage this week?',
    closeNote: 'Same-day staffing runs through the dispatch line; longer builds go to your local branch team.'
  }
};

export default class Landing extends React.Component {
  render() { return <LandingView {...this.renderVals()} />; }
  renderVals() {
    const c = COPY[this.props.audience ?? 'Workers'] || COPY.Workers;
    return {
      goCta: () => { location.href = './index.html#' + (this.props.audience === 'Employers' ? 'request' : 'apply'); },
      phone: this.props.dispatchPhone ?? '(888) 555-0142',
      headline: c.headline,
      subhead: c.subhead,
      ctaLabel: c.ctaLabel,
      ctaNote: c.ctaNote,
      proof: this.props.showProof === false ? [] : c.proof,
      steps: c.steps,
      closeHead: c.closeHead,
      closeNote: c.closeNote
    };
  }
}

