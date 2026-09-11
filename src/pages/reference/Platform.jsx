import { V, PRACTICE_LIST, JOBS } from '../../data/demo.js';
import { SPECIALISMS, matchesSpecialism } from '../../data/specialisms.js';
import React from 'react';
import PlatformView from './PlatformView.jsx';


const MARKET = [
  { k: '$212B', v: 'US temporary staffing revenue', n: 'Illustrative — sized across all of our specialisms.' },
  { k: '20,000+', v: 'staffing firms in the US', n: 'Highly fragmented; most operate a single vertical in a single metro.' },
  { k: '<2%', v: 'held by any single mid-market firm', n: 'No regional operator has consolidated multi-vertical demand.' }
];
const MODEL = [
  { name: 'Healthcare', share: '34%', margin: '22% gross margin', note: 'Per diem and 13-week travel contracts. Credential-gated, highest bill rate, stickiest client relationships.', w: '34%' },
  { name: 'Skilled Trades', share: '41%', margin: '17% gross margin', note: 'Warehouse, manufacturing, construction. Highest volume and fastest fill; the engine of branch utilisation.', w: '41%' },
  { name: 'Technical Trades', share: '15%', margin: '26% gross margin', note: 'Licensed electricians, HVAC, diesel techs. Scarce supply, premium rates, low churn.', w: '15%' },
  { name: 'Professional', share: '10%', margin: '31% gross margin', note: 'Accounting, admin, HR. Temp-to-hire and direct placement carry conversion fees.', w: '10%' }
];
const RETENTION = [
  { k: '68%', v: 'of workers take a second assignment', n: 'Within 90 days of their first placement ending.' },
  { k: '3.4', v: 'assignments per worker, per year', n: 'One application, five specialisms to redeploy into.' },
  { k: '11 days', v: 'median bench time between assignments', n: 'Multi-vertical redeployment cuts idle time roughly in half.' },
  { k: '92%', v: 'of urgent requests filled inside 24 hours', n: 'Local branch bench plus the 24/7 dispatch line.' }
];


const HANDLED = [
  { title: 'Weekly pay', note: 'Direct deposit or pay card every Friday.' },
  { title: 'E-Verify & I-9', note: 'Completed once, at any branch or online.' },
  { title: 'Credential verification', note: 'Licenses and certifications confirmed for you.' },
  { title: "Workers' comp", note: 'Full coverage while you are on assignment.' }
];

const APPLY_STEPS = [
  { n: '1', title: 'About you', note: 'Name, contact, and your ZIP code' },
  { n: '2', title: 'Work eligibility', note: 'I-9, E-Verify, and screening consent' },
  { n: '3', title: 'Credentials & availability', note: 'Licenses, shifts, and pay setup' },
  { n: '4', title: 'Review & submit', note: 'One recruiter reviews everything' }
];
const CRED_OPTIONS = ['RN license', 'LPN license', 'CNA certification', 'BLS', 'ACLS', 'EPA 608', 'Journeyman electrician', 'ASE T-series', 'OSHA-10 / 30', 'Forklift certification', 'CDL', 'None yet'];
const AVAIL = ['1st shift', '2nd shift', 'Nights', 'Weekends', 'Per diem / pick-up', 'Travel contracts'];

const MY_SHIFTS = [
  { day: 'Mon', date: 'Sep 14', role: 'Warehouse Associate', site: 'Regional Distribution Center', time: '6:00a – 2:30p', status: 'Confirmed', tone: 'ok' },
  { day: 'Tue', date: 'Sep 15', role: 'Warehouse Associate', site: 'Regional Distribution Center', time: '6:00a – 2:30p', status: 'Confirmed', tone: 'ok' },
  { day: 'Wed', date: 'Sep 16', role: 'Warehouse Associate', site: 'Regional Distribution Center', time: '6:00a – 2:30p', status: 'Confirmed', tone: 'ok' },
  { day: 'Sat', date: 'Sep 19', role: 'Overtime — inbound dock', site: 'Regional Distribution Center', time: '6:00a – 12:00p', status: 'Open — voluntary', tone: 'open' }
];
const MY_CREDS = [
  { name: 'I-9 & E-Verify', detail: 'Verified at Columbus branch', status: 'Verified', tone: 'ok' },
  { name: 'Background check', detail: 'Cleared Aug 28, 2026', status: 'Cleared', tone: 'ok' },
  { name: 'Forklift certification', detail: 'Expires Nov 2, 2026', status: 'Expires in 8 wks', tone: 'warn' },
  { name: 'OSHA-10', detail: 'Not started — required for site work', status: 'Action needed', tone: 'bad' }
];
const MY_PAY = [
  { week: 'Week of Sep 1', hours: '40.0 hrs', gross: '$812.00', status: 'Paid Fri Sep 5' },
  { week: 'Week of Aug 25', hours: '42.5 hrs', gross: '$873.75', status: 'Paid Fri Aug 29' },
  { week: 'Week of Aug 18', hours: '40.0 hrs', gross: '$812.00', status: 'Paid Fri Aug 22' }
];
const REQUESTS = [
  { id: 'R-2841', role: 'Warehouse Associate / Forklift', practice: 'Skilled Trades', tier: 'Temp-to-Hire', site: 'Columbus, OH', need: 24, filled: 21, status: 'Filling', tone: 'warn', opened: 'Sep 2' },
  { id: 'R-2836', role: 'Registered Nurse, ICU', practice: 'Healthcare', tier: 'Travel', site: 'Dallas, TX', need: 4, filled: 4, status: 'Filled', tone: 'ok', opened: 'Aug 28' },
  { id: 'R-2829', role: 'Diesel Technician', practice: 'Technical Trades', tier: 'Temp-to-Hire', site: 'Phoenix, AZ', need: 2, filled: 1, status: 'Interviewing', tone: 'warn', opened: 'Aug 24' },
  { id: 'R-2818', role: 'HR Coordinator', practice: 'Professional', tier: 'Temp-to-Hire', site: 'Dallas, TX', need: 1, filled: 0, status: 'Sourcing', tone: 'info', opened: 'Aug 19' },
  { id: 'R-2807', role: 'General Laborer', practice: 'Skilled Trades', tier: 'Temporary', site: 'Charlotte, NC', need: 8, filled: 8, status: 'Filled', tone: 'ok', opened: 'Aug 11' }
];
const CANDIDATES = [
  { name: 'Renata Silva', role: 'Diesel Technician', creds: 'ASE T2, T4 · 6 yrs heavy-duty', rate: '$32 / hr', req: 'R-2829', initials: 'RS' },
  { name: 'Andre Whitcomb', role: 'Warehouse Associate', creds: 'Forklift certified · sit-down + reach', rate: '$20 / hr', req: 'R-2841', initials: 'AW' },
  { name: 'Priya Raman', role: 'HR Coordinator', creds: 'Workday · 4 yrs HR support', rate: '$27 / hr', req: 'R-2818', initials: 'PR' }
];
const ON_ASSIGN = [
  { name: 'DeShawn Carter', role: 'Forklift Operator', site: 'Columbus, OH', hours: '40.0', week: 'Week 6 of 12' },
  { name: 'Maria Santos', role: 'RN, ICU — Travel', site: 'Dallas, TX', hours: '36.0', week: 'Week 3 of 13' },
  { name: 'Miguel Reyes', role: 'HVAC Technician', site: 'Charlotte, NC', hours: '44.5', week: 'Converted Sep 1' },
  { name: 'Angela Whitfield', role: 'Staff Accountant', site: 'Phoenix, AZ', hours: '40.0', week: 'Week 9 of 12' }
];
const EMP_REQS = ['Background check', 'Drug screen (10-panel)', 'E-Verify / I-9', 'License & credential verification', 'OSHA-10 / 30', 'Motor vehicle record', 'Forklift certification', 'Steel-toe boots on site'];
const TIERS = [
  { name: 'Temporary', note: 'Short-notice coverage for absences or surges.' },
  { name: 'Temp-to-Hire', note: 'Trial on our payroll, then convert to yours.' },
  { name: 'Direct Placement', note: 'Full-cycle search for a permanent hire.' },
  { name: 'Per Diem & Travel', note: 'Credentialed clinical staff, single shifts to 13 weeks.' }
];

const TYPES = ['Temporary', 'Temp-to-hire', 'Direct placement', 'Per diem', 'Travel contract'];
const SHIFTS = ['1st shift', '2nd shift', 'Nights', 'Days', 'All shifts', 'Hybrid'];

export default class Platform extends React.Component {
  render() { return <PlatformView {...this.renderVals()} />; }
  state = {
    screen: 'home', vertical: 'All practices', types: [], shifts: [], noExpOnly: false,
    search: '', zip: '', sort: 'Newest', selectedId: 1, saved: [2, 8],
    step: 0, submitted: false,
    form: { first: '', last: '', phone: '', email: '', zip: '', heard: 'Referred by a friend', eligible: 'Yes', over18: true, consent: false, creds: ['BLS'], practices: ['Healthcare'], avail: ['Nights'], start: 'Within a week', transport: 'Own vehicle', payMethod: 'Direct deposit', resume: '' },
    req: { practice: 'Skilled Trades', role: '', headcount: '6', tier: 'Temp-to-Hire', start: '', duration: '90 days', shift: '1st shift', site: '', cityState: '', reqs: ['Background check', 'E-Verify / I-9'], contact: '', company: 'Cardinal Logistics', email: '', phone: '', notes: '', urgent: false },
    reqSubmitted: false,
    claimed: []
  };

  componentDidMount() {
    const v = this.props.openPractice;
    if (v && v !== 'All practices') this.setState({ vertical: v });
  }

  set = (patch) => this.setState(patch);
  go = (screen) => () => { this.setState({ screen: screen }); window.scrollTo(0, 0); };

  openJob = (id) => () => { this.setState({ screen: 'detail', selectedId: id }); window.scrollTo(0, 0); };

  toggleSave = (id) => (e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    const saved = this.state.saved;
    this.setState({ saved: saved.indexOf(id) > -1 ? saved.filter(function (s) { return s !== id; }) : saved.concat([id]) });
  };

  toggleIn = (key, val) => () => {
    const arr = this.state[key];
    const patch = {};
    patch[key] = arr.indexOf(val) > -1 ? arr.filter(function (a) { return a !== val; }) : arr.concat([val]);
    this.setState(patch);
  };

  filtered() {
    const s = this.state;
    const q = s.search.trim().toLowerCase();
    const z = s.zip.trim().toLowerCase();
    let out = JOBS.filter((j) => {
      if (s.vertical !== 'All practices' && !matchesSpecialism(j, s.vertical)) return false;
      if (s.types.length && s.types.indexOf(j.type) === -1) return false;
      if (s.shifts.length && s.shifts.indexOf(j.shift) === -1) return false;
      if (s.noExpOnly && !j.noExp) return false;
      if (q && (j.title + ' ' + j.company + ' ' + j.credLine + ' ' + j.vertical).toLowerCase().indexOf(q) === -1) return false;
      if (z && j.location.toLowerCase().indexOf(z) === -1) return false;
      return true;
    });
    if (s.sort === 'Highest pay') out = out.slice().sort(function (a, b) { return b.payRank - a.payRank; });
    else if (s.sort === 'Nearest branch') out = out.slice().sort(function (a, b) { return a.city.localeCompare(b.city); });
    else out = out.slice().sort(function (a, b) { return a.age - b.age; });
    return out;
  }

  jobRow = (j) => {
    const v = V[j.vertical];
    const isSaved = this.state.saved.indexOf(j.id) > -1;
    return {
      id: j.id, title: j.title, company: j.company, location: j.location, vertical: j.vertical,
      type: j.type, shift: j.shift, pay: j.pay, posted: j.posted, urgent: j.urgent, credLine: j.credLine,
      initials: j.company.split(' ').slice(0, 2).map(function (w) { return w[0]; }).join(''),
      bar: { position: 'absolute', left: 0, top: 0, bottom: 0, width: '4px', background: v.color },
      logo: { width: '46px', height: '46px', borderRadius: '10px', background: v.bg, color: v.color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 },
      pillStyle: { display: 'inline-block', fontSize: '11px', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: v.color, background: v.bg, padding: '4px 9px', borderRadius: '100px' },
      open: this.openJob(j.id),
      save: this.toggleSave(j.id),
      saveLabel: isSaved ? 'Saved' : 'Save',
      saveStyle: { whiteSpace: 'nowrap', border: '1.5px solid ' + (isSaved ? '#22262E' : '#E4E4E9'), color: '#22262E', padding: '9px 14px', borderRadius: '8px', fontSize: '13px', fontWeight: 600, background: isSaved ? '#F4F4F6' : '#fff' }
    };
  };

  onForm = (e) => {
    const f = Object.assign({}, this.state.form);
    f[e.target.dataset.field] = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    this.setState({ form: f });
  };
  onReqField = (e) => {
    const r = Object.assign({}, this.state.req);
    r[e.target.dataset.field] = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    this.setState({ req: r });
  };
  toggleForm = (key, val) => () => {
    const f = Object.assign({}, this.state.form);
    const arr = f[key];
    f[key] = arr.indexOf(val) > -1 ? arr.filter(function (a) { return a !== val; }) : arr.concat([val]);
    this.setState({ form: f });
  };
  toggleReqItem = (val) => () => {
    const r = Object.assign({}, this.state.req);
    r.reqs = r.reqs.indexOf(val) > -1 ? r.reqs.filter(function (a) { return a !== val; }) : r.reqs.concat([val]);
    this.setState({ req: r });
  };
  setReq = (key, val) => () => {
    const r = Object.assign({}, this.state.req);
    r[key] = val;
    this.setState({ req: r });
  };
  setForm = (key, val) => () => {
    const f = Object.assign({}, this.state.form);
    f[key] = val;
    this.setState({ form: f });
  };
  stepTo = (n) => () => { this.setState({ step: n }); window.scrollTo(0, 0); };

  tone(t) {
    const map = { ok: ['#3D6B57', '#EAF1ED'], warn: ['#A8825F', '#F6EFE7'], bad: ['#8C3A44', '#F6EBEC'], info: ['#3A4A63', '#ECEEF3'], open: ['#3A4A63', '#ECEEF3'] };
    const c = map[t] || map.info;
    return { display: 'inline-block', fontSize: '11.5px', fontWeight: 700, color: c[0], background: c[1], padding: '5px 10px', borderRadius: '100px', whiteSpace: 'nowrap' };
  }

  renderVals() {
    const s = this.state;
    const list = this.filtered();
    const job = JOBS.filter(function (j) { return j.id === s.selectedId; })[0] || JOBS[0];
    const jv = V[job.vertical];

    const navDefs = [
      { label: 'Home', screen: 'home' },
      { label: 'Find work', screen: 'jobs' },
      { label: 'My dashboard', screen: 'worker' },
      { label: 'Request workers', screen: 'request' },
      { label: 'Employer portal', screen: 'employer' },
      { label: 'Company', screen: 'traction' }
    ];
    const active = { home: 'home', jobs: 'jobs', detail: 'jobs', apply: 'jobs', worker: 'worker', request: 'request', employer: 'employer', traction: 'traction' }[s.screen];

    const counts = {};
    Object.keys(V).forEach(function (k) { counts[k] = JOBS.filter(function (j) { return matchesSpecialism(j, k); }).length; });

    const chip = (on) => ({ whiteSpace: 'nowrap', padding: '7px 12px', borderRadius: '100px', fontSize: '12.5px', fontWeight: 600, border: '1px solid ' + (on ? '#22262E' : '#E4E4E9'), background: on ? '#22262E' : '#fff', color: on ? '#fff' : '#5D6472' });

    return {
      dispatch: this.props.dispatchPhone ?? '(888) 555-0142',
      showRail: this.props.showOnboardingRail ?? true,
      isJobs: s.screen === 'jobs',
      isDetail: s.screen === 'detail',
      isApply: s.screen === 'apply',
      isWorker: s.screen === 'worker',
      isRequest: s.screen === 'request',
      isEmployer: s.screen === 'employer',
      isTraction: s.screen === 'traction',
      isHome: s.screen === 'home',
      goHome: this.go('home'),
      practiceCards: SPECIALISMS.map((p) => ({
        name: p.name, desc: p.desc, tags: p.tags, img: V[p.name].img, alt: V[p.name].alt,
        count: JOBS.filter(function (j) { return matchesSpecialism(j, p.name); }).length + ' open now',
        go: () => { this.setState({ screen: 'jobs', vertical: p.name }); window.scrollTo(0, 0); },
        pillStyle: { display: 'inline-block', fontSize: '11px', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: V[p.name].color, background: V[p.name].bg, padding: '5px 10px', borderRadius: '100px', whiteSpace: 'nowrap' },
        isHealthcare: p.name === 'Healthcare', isSkilled: p.name === 'Skilled Trades', isTechnical: p.name === 'Technical Trades', isProfessional: p.name === 'Professional', isInternational: p.name === 'International'
      })),
      tiers: TIERS,
      locations: [
        { city: 'Dallas', st: 'TX' }, { city: 'Columbus', st: 'OH' }, { city: 'Charlotte', st: 'NC' }, { city: 'Phoenix', st: 'AZ' },
        { city: 'Atlanta', st: 'GA' }, { city: 'Sacramento', st: 'CA' }, { city: 'Indianapolis', st: 'IN' }, { city: 'Tampa', st: 'FL' }
      ],
      goTraction: this.go('traction'),
      marketStats: MARKET,
      modelRows: [...MODEL, { name: 'International', share: 'Remote and sponsored', margin: 'Cross-practice opportunities', note: 'Connects remote roles and internationally sponsored assignments across our specialisms.', w: '0%' }].map((m) => ({ name: m.name, share: m.share, margin: m.margin, note: m.note,
        barStyle: { width: m.w, height: '100%', background: V[m.name].color, borderRadius: '100px' },
        dot: { width: '9px', height: '9px', borderRadius: '3px', background: V[m.name].color, flexShrink: 0 } })),
      retentionStats: RETENTION,
      goJobs: this.go('jobs'),
      goApply: this.go('apply'),
      navItems: navDefs.map((n) => ({
        label: n.label, go: this.go(n.screen),
        style: { padding: '9px 13px', borderRadius: '8px', fontSize: '14px', fontWeight: active === n.screen ? 600 : 500, color: active === n.screen ? '#171A20' : '#5D6472', background: active === n.screen ? '#F4F4F6' : 'transparent', whiteSpace: 'nowrap' }
      })),
      search: s.search, zip: s.zip, sort: s.sort,
      onSearch: (e) => this.set({ search: e.target.value }),
      onZip: (e) => this.set({ zip: e.target.value }),
      onSort: (e) => this.set({ sort: e.target.value }),
      noExpOnly: s.noExpOnly,
      toggleNoExp: () => this.set({ noExpOnly: !s.noExpOnly }),
      clearFilters: () => this.set({ vertical: 'All practices', types: [], shifts: [], noExpOnly: false, search: '', zip: '' }),
      verticalOptions: ['All practices'].concat(Object.keys(V)).map((name) => {
        const on = s.vertical === name;
        const c = V[name] ? V[name].color : '#8B92A0';
        return {
          name: name, count: name === 'All practices' ? JOBS.length : counts[name],
          go: () => this.set({ vertical: name }),
          dot: { width: '8px', height: '8px', borderRadius: '3px', background: c, flexShrink: 0 },
          style: { whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px', padding: '9px 10px', borderRadius: '9px', fontSize: '13.5px', fontWeight: on ? 600 : 500, color: on ? '#171A20' : '#5D6472', background: on ? '#F4F4F6' : 'transparent', width: '100%', textAlign: 'left' }
        };
      }),
      typeOptions: TYPES.map((t) => ({ name: t, on: s.types.indexOf(t) > -1, go: this.toggleIn('types', t) })),
      shiftOptions: SHIFTS.map((sh) => ({ name: sh, go: this.toggleIn('shifts', sh), style: chip(s.shifts.indexOf(sh) > -1) })),
      resultCount: list.length,
      filterSummary: s.vertical === 'All practices' ? 'across all five specialisms' : 'in ' + s.vertical,
      visibleJobs: list.map(this.jobRow),
      noResults: list.length === 0,
      job: {
        title: job.title, company: job.company, location: job.location, vertical: job.vertical, type: job.type,
        shift: job.shift, pay: job.pay, start: job.start, desc: job.desc, duties: job.duties, reqs: job.reqs,
        onboarding: job.onboarding, openings: job.openings, branch: job.branch, recruiter: job.recruiter,
        recruiterInitials: job.recruiter.split(' ').map(function (w) { return w[0]; }).join(''),
        isHealthcare: job.vertical === 'Healthcare',
        isSkilled: job.vertical === 'Skilled Trades',
        isTechnical: job.vertical === 'Technical Trades',
        isProfessional: job.vertical === 'Professional',
        pillStyle: { display: 'inline-block', fontSize: '11px', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: jv.color, background: jv.bg, padding: '5px 10px', borderRadius: '100px' }
      },
      handledItems: HANDLED,
      similarJobs: JOBS.filter(function (j) { return j.vertical === job.vertical && j.id !== job.id; }).slice(0, 3).map((j) => ({ title: j.title, location: j.location, pay: j.pay, open: this.openJob(j.id) })),
      saveCurrent: this.toggleSave(job.id),
      currentSaveLabel: s.saved.indexOf(job.id) > -1 ? 'Saved to your list' : 'Save for later',

      f: s.form,
      onForm: this.onForm,
      submitted: s.submitted,
      notSubmitted: !s.submitted,
      applySteps: APPLY_STEPS.map((st, i) => ({
        n: st.n, title: st.title, note: st.note, go: this.stepTo(i),
        style: { display: 'flex', gap: '13px', padding: '13px 14px', borderRadius: '11px', width: '100%', textAlign: 'left', background: i === s.step ? '#fff' : 'transparent', border: '1px solid ' + (i === s.step ? '#E4E4E9' : 'transparent') },
        numStyle: { width: '30px', height: '30px', borderRadius: '50%', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Fraunces',serif", fontSize: '14px', fontWeight: 600, background: i < s.step ? '#3D6B57' : i === s.step ? '#22262E' : '#E9E9EE', color: i <= s.step ? '#fff' : '#8B92A0' },
        titleStyle: { fontSize: '14.5px', fontWeight: 600, color: i === s.step ? '#171A20' : '#5D6472' }
      })),
      notLastStep: s.step < 3,
      step1: s.step === 0, step2: s.step === 1, step3: s.step === 2, step4: s.step === 3,
      stepLabel: 'Step ' + (s.step + 1) + ' of 4',
      applyJobTitle: job.title,
      applyJobMeta: job.company + ' · ' + job.location + ' · ' + job.pay,
      next: this.stepTo(Math.min(3, s.step + 1)),
      back: this.stepTo(Math.max(0, s.step - 1)),
      showBack: s.step > 0,
      submitApply: () => { this.setState({ submitted: true }); window.scrollTo(0, 0); },
      goWorker: this.go('worker'),
      goEmployer: this.go('employer'),
      goRequest: this.go('request'),
      credOptions: CRED_OPTIONS.map((c) => ({ name: c, on: s.form.creds.indexOf(c) > -1, go: this.toggleForm('creds', c), style: chip(s.form.creds.indexOf(c) > -1) })),
      practiceOptions: PRACTICE_LIST.map((p) => ({ name: p, go: this.toggleForm('practices', p), style: chip(s.form.practices.indexOf(p) > -1) })),
      availOptions: AVAIL.map((a) => ({ name: a, go: this.toggleForm('avail', a), style: chip(s.form.avail.indexOf(a) > -1) })),
      payOptions: ['Direct deposit', 'Pay card'].map((p) => ({ name: p, go: this.setForm('payMethod', p), style: chip(s.form.payMethod === p) })),
      eligibleOptions: ['Yes', 'Yes, with sponsorship'].map((p) => ({ name: p, go: this.setForm('eligible', p), style: chip(s.form.eligible === p) })),
      reviewName: (s.form.first + ' ' + s.form.last).trim() || 'Not provided yet',
      reviewContact: [s.form.phone, s.form.email].filter(Boolean).join(' · ') || 'Not provided yet',
      reviewPractices: s.form.practices.join(', ') || 'None selected',
      reviewAvail: s.form.avail.join(', ') || 'None selected',
      reviewCreds: s.form.creds.join(', ') || 'None listed',
      reviewPay: s.form.payMethod + ' · paid every Friday',
      consentOn: s.form.consent,

      workerName: (s.form.first || 'DeShawn'),
      myShifts: MY_SHIFTS.map((sh) => ({ day: sh.day, date: sh.date, role: sh.role, site: sh.site, time: sh.time, status: sh.status, pill: this.tone(sh.tone), isOpen: sh.tone === 'open' })),
      myCreds: MY_CREDS.map((c) => ({ name: c.name, detail: c.detail, status: c.status, pill: this.tone(c.tone) })),
      myPay: MY_PAY,
      matchedJobs: JOBS.filter(function (j) { return j.vertical === 'Skilled Trades' && j.id !== 5; }).slice(0, 2).map(this.jobRow),
      savedJobs: JOBS.filter(function (j) { return s.saved.indexOf(j.id) > -1; }).map(this.jobRow),
      hasSaved: s.saved.length > 0,

      r: s.req,
      onReqField: this.onReqField,
      reqSubmitted: s.reqSubmitted,
      reqNotSubmitted: !s.reqSubmitted,
      submitRequest: () => { this.setState({ reqSubmitted: true }); window.scrollTo(0, 0); },
      reqPracticeOptions: PRACTICE_LIST.map((p) => ({ name: p, go: this.setReq('practice', p), style: chip(s.req.practice === p) })),
      tierOptions: TIERS.map((t) => {
        const on = s.req.tier === t.name;
        return { name: t.name, note: t.note, go: this.setReq('tier', t.name),
          style: { textAlign: 'left', padding: '15px 16px', borderRadius: '12px', border: '1.5px solid ' + (on ? '#22262E' : '#E4E4E9'), background: on ? '#F4F4F6' : '#fff', width: '100%' },
          titleStyle: { display: 'block', fontSize: '14.5px', fontWeight: 600, color: '#171A20', marginBottom: '3px' } };
      }),
      reqShiftOptions: ['1st shift', '2nd shift', '3rd shift / nights', 'Weekends', 'Rotating'].map((sh) => ({ name: sh, go: this.setReq('shift', sh), style: chip(s.req.shift === sh) })),
      reqDurationOptions: ['One shift', '2–4 weeks', '90 days', '13 weeks', 'Ongoing'].map((d) => ({ name: d, go: this.setReq('duration', d), style: chip(s.req.duration === d) })),
      empReqOptions: EMP_REQS.map((rq) => ({ name: rq, on: s.req.reqs.indexOf(rq) > -1, go: this.toggleReqItem(rq) })),
      reqSummaryLine: s.req.headcount + ' × ' + (s.req.role || 'role TBD') + ' · ' + s.req.tier + ' · ' + (s.req.cityState || 'location TBD'),

      requests: REQUESTS.map((rq) => ({ id: rq.id, role: rq.role, practice: rq.practice, tier: rq.tier, site: rq.site, opened: rq.opened, fill: rq.filled + ' of ' + rq.need, status: rq.status, pill: this.tone(rq.tone), barStyle: { width: Math.round((rq.filled / rq.need) * 100) + '%', height: '100%', background: rq.tone === 'ok' ? '#3D6B57' : '#C9A98A', borderRadius: '100px' } })),
      candidates: CANDIDATES,
      onAssign: ON_ASSIGN,
      newRequestRow: s.reqSubmitted
    };
  }
}

