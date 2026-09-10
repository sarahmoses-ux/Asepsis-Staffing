import React from 'react';
import PlatformView from './PlatformView.jsx';

const V = {
  Healthcare: { color: '#8C3A44', bg: '#F6EBEC', img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80', alt: 'Nurse walking a hospital corridor' },
  'Skilled Trades': { color: '#3A4A63', bg: '#ECEEF3', img: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1200&q=80', alt: 'Warehouse worker operating a forklift' },
  'Technical Trades': { color: '#A8825F', bg: '#F6EFE7', img: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=80', alt: 'Technician servicing equipment' },
  Professional: { color: '#3D6B57', bg: '#EAF1ED', img: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80', alt: 'Office professionals in a meeting' }
};

const MARKET = [
  { k: '$212B', v: 'US temporary staffing revenue', n: 'Illustrative — sized across all four of our practices.' },
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
  { k: '3.4', v: 'assignments per worker, per year', n: 'One application, four practices to redeploy into.' },
  { k: '11 days', v: 'median bench time between assignments', n: 'Multi-vertical redeployment cuts idle time roughly in half.' },
  { k: '92%', v: 'of urgent requests filled inside 24 hours', n: 'Local branch bench plus the 24/7 dispatch line.' }
];

const JOBS = [
  { id:1, title:'Registered Nurse, ICU — Travel', company:'Baptist Health', location:'Dallas, TX', city:'Dallas', vertical:'Healthcare', type:'Travel contract', shift:'Nights', pay:'$2,600–$3,200 / wk', payRank:3000, posted:'Posted 2d ago', age:2, urgent:true, credLine:'TX RN license', openings:4, start:'Oct 5, 2026', branch:'Dallas', recruiter:'Tasha Merrill', noExp:false,
    desc:'A 26-bed adult ICU running 13-week contracts with guaranteed 36-hour weeks. Our credentialing team clears TX licensure and hospital onboarding before your first shift, so you start on the floor rather than in an HR office.',
    duties:['Carry a 2:1 patient assignment on nights, with charge support on every shift.','Manage vents, drips, and post-op cardiac recovery patients.','Chart in Epic; a two-day paid orientation is included.','Extend or transfer to another Asepsis contract at week 11 if you want to stay.'],
    reqs:['Active TX RN license or compact license eligible','2+ years recent ICU experience','BLS and ACLS current through the contract end date','Two supervisor references we verify before submission'],
    onboarding:['Upload RN license and BLS/ACLS cards','Complete I-9 and E-Verify at any branch','Physical and 10-panel screen (we schedule and pay)'] },
  { id:2, title:'CNA — Per Diem', company:'Meadowview Skilled Nursing', location:'Atlanta, GA', city:'Atlanta', vertical:'Healthcare', type:'Per diem', shift:'All shifts', pay:'$19–$24 / hr', payRank:24, posted:'Posted 6h ago', age:0.25, urgent:true, credLine:'GA CNA license', openings:11, start:'Immediately', branch:'Atlanta', recruiter:'Joy Adeyemi', noExp:false,
    desc:'Pick your own shifts from an open board at four partner facilities across metro Atlanta. Claim a shift the night before or commit to a set weekly pattern — both are paid weekly with a shift differential on nights and weekends.',
    duties:['Assist residents with ADLs, transfers, and vitals.','Document care in PointClickCare.','Claim open shifts from the Asepsis worker dashboard.','Cancel or swap up to 12 hours ahead with no penalty.'],
    reqs:['Active GA CNA certification in good standing','Current TB test and physical','Background check (we run and pay for it)'],
    onboarding:['Upload CNA certification','Complete I-9 and E-Verify','Sign facility orientation packet'] },
  { id:3, title:'Licensed Practical Nurse', company:'Cardinal Long-Term Care', location:'Indianapolis, IN', city:'Indianapolis', vertical:'Healthcare', type:'Temp-to-hire', shift:'Days', pay:'$27–$31 / hr', payRank:31, posted:'Posted 1d ago', age:1, urgent:false, credLine:'IN LPN license', openings:2, start:'Sep 22, 2026', branch:'Indianapolis', recruiter:'Ray Kaminski', noExp:false,
    desc:'A 90-day temp-to-hire on a 42-resident long-term care unit. Convert onto the facility payroll with full benefits after the trial; nine of the last ten LPNs we placed here converted.',
    duties:['Pass medications and manage treatment orders for a 14-resident hall.','Supervise CNAs on the hall and escalate to the charge RN.','Complete admission and change-of-condition assessments.'],
    reqs:['Active IN LPN license','Long-term care or med-surg experience preferred','Ability to convert to facility payroll at 90 days'],
    onboarding:['Upload LPN license','Complete I-9 and E-Verify','Two-step TB and flu documentation'] },
  { id:4, title:'Medical Technologist / Phlebotomist', company:'Gulf Coast Regional Hospital', location:'Tampa, FL', city:'Tampa', vertical:'Healthcare', type:'Temporary', shift:'2nd shift', pay:'$22–$26 / hr', payRank:26, posted:'Posted 3d ago', age:3, urgent:false, credLine:'ASCP preferred', openings:3, start:'Sep 29, 2026', branch:'Tampa', recruiter:'Ana Delgado', noExp:false,
    desc:'A 16-week lab coverage assignment during a staffing transition, with likely extension into Q1. Evenings draw from the ED and inpatient floors with a dedicated processing tech on shift.',
    duties:['Perform venipuncture on ED, ICU, and inpatient floors.','Process and label specimens; run routine chemistry panels.','Maintain chain of custody documentation.'],
    reqs:['Phlebotomy certification; ASCP MLT preferred','1+ year hospital draw experience','Comfortable with 200+ draws per week'],
    onboarding:['Upload phlebotomy certification','Complete I-9 and E-Verify','Hospital badge appointment'] },

  { id:5, title:'Warehouse Associate / Forklift', company:'Regional Distribution Center', location:'Columbus, OH', city:'Columbus', vertical:'Skilled Trades', type:'Temp-to-hire', shift:'1st shift', pay:'$19–$22 / hr', payRank:22, posted:'Posted 4h ago', age:0.2, urgent:true, credLine:'No experience required', openings:24, start:'Monday', branch:'Columbus', recruiter:'Deon Pratt', noExp:true,
    desc:'A 900,000 sq ft distribution center adding 24 associates for peak season, converting the top performers to permanent in 60 to 90 days. Forklift certification is free and happens on your first paid day.',
    duties:['Pick and pack orders to a rate posted on the floor each morning.','Load and unload trailers with a sit-down or reach truck.','Scan and stage pallets for outbound routes.','Free forklift certification on day one if you need it.'],
    reqs:['18 or older, able to lift 50 lbs repeatedly','Steel-toe boots (we supply a voucher for your first pair)','No experience or resume required'],
    onboarding:['Bring photo ID and Social Security card to the branch','Complete I-9 and E-Verify','Watch the 20-minute site safety video'] },
  { id:6, title:'Assembly Line Operator', company:'Midwest Auto Components', location:'Indianapolis, IN', city:'Indianapolis', vertical:'Skilled Trades', type:'Temporary', shift:'2nd shift', pay:'$18–$20 / hr', payRank:20, posted:'Posted 1d ago', age:1, urgent:false, credLine:'No experience required', openings:16, start:'Sep 21, 2026', branch:'Indianapolis', recruiter:'Ray Kaminski', noExp:true,
    desc:'A twelve-week production ramp on a Tier 1 automotive line, running 3pm to 11:30pm Monday through Friday with voluntary Saturdays at time and a half.',
    duties:['Assemble and inspect subcomponents at a fixed station.','Record defects and flag line stoppages.','Rotate stations every two hours.'],
    reqs:['18 or older, able to stand for an 8-hour shift','Steel-toe boots required on the floor','No experience required — paid training on the line'],
    onboarding:['Bring photo ID and Social Security card','Complete I-9 and E-Verify','Site safety orientation'] },
  { id:7, title:'General Laborer — Commercial Site', company:'Keystone Commercial Builders', location:'Charlotte, NC', city:'Charlotte', vertical:'Skilled Trades', type:'Temporary', shift:'Days', pay:'$18–$21 / hr', payRank:21, posted:'Posted 2d ago', age:2, urgent:false, credLine:'OSHA-10 provided', openings:8, start:'Sep 15, 2026', branch:'Charlotte', recruiter:'Marcus Hale', noExp:true,
    desc:'Site support on a four-story medical office build through framing and drywall. Steady 40-hour weeks with a foreman who has kept most of our crew on since the pour.',
    duties:['Move and stage material for framing and drywall crews.','Keep the site clean and OSHA-compliant.','Assist trades with layout and demolition as directed.'],
    reqs:['Able to lift 50 lbs and work outdoors','Steel-toe boots and hard hat (hard hat supplied)','OSHA-10 provided free before your first shift'],
    onboarding:['Bring photo ID and Social Security card','Complete I-9 and E-Verify','OSHA-10 online course (paid time)'] },

  { id:8, title:'HVAC Technician, Commercial', company:'Piedmont Mechanical', location:'Charlotte, NC', city:'Charlotte', vertical:'Technical Trades', type:'Direct placement', shift:'Days', pay:'$26–$34 / hr', payRank:34, posted:'Posted 1d ago', age:1, urgent:false, credLine:'EPA 608 required', openings:2, start:'Negotiable', branch:'Charlotte', recruiter:'Marcus Hale', noExp:false,
    desc:'A direct-hire service role on rooftop units and chillers across a commercial portfolio. Company truck, fuel card, and tool allowance from day one; you go onto Piedmont\u2019s payroll, not ours.',
    duties:['Diagnose and repair RTUs, split systems, and chillers.','Run preventive maintenance routes on a service schedule.','On-call rotation of one week in five, paid at premium.'],
    reqs:['EPA 608 Universal certification','3+ years commercial HVAC service experience','Valid driver license with a clean MVR'],
    onboarding:['Verify EPA 608 and driver license','Background check and MVR pull','Offer and start date negotiated by your recruiter'] },
  { id:9, title:'Electrician, Journeyman', company:'Industrial Facilities Group', location:'Sacramento, CA', city:'Sacramento', vertical:'Technical Trades', type:'Temp-to-hire', shift:'Days', pay:'$30–$38 / hr', payRank:38, posted:'Posted 5d ago', age:5, urgent:false, credLine:'CA J-Card required', openings:3, start:'Oct 1, 2026', branch:'Sacramento', recruiter:'Elena Ruiz', noExp:false,
    desc:'Industrial electrical work in food processing plants — conduit, motor controls, and panel work on a 6-month project with conversion to permanent for the crew that finishes it.',
    duties:['Bend and run rigid and EMT conduit to spec.','Terminate motor controls and troubleshoot 480V three-phase.','Read single-line diagrams and redline as-builts.'],
    reqs:['California General Electrician (J-Card) certification','4+ years industrial or commercial experience','Own hand tools; PPE supplied'],
    onboarding:['Verify J-Card and OSHA-30','Complete I-9 and E-Verify','Arc flash safety orientation'] },
  { id:10, title:'Diesel Technician, Fleet', company:'Sunbelt Fleet Services', location:'Phoenix, AZ', city:'Phoenix', vertical:'Technical Trades', type:'Temp-to-hire', shift:'2nd shift', pay:'$28–$35 / hr', payRank:35, posted:'Posted 3d ago', age:3, urgent:true, credLine:'ASE T-series', openings:2, start:'Sep 22, 2026', branch:'Phoenix', recruiter:'Cody Brennan', noExp:false,
    desc:'Evening shift maintaining a 240-truck regional fleet in a covered 12-bay shop. Tool allowance after 90 days and conversion to permanent for techs who hit shop hours.',
    duties:['Perform DOT inspections and preventive maintenance.','Diagnose aftertreatment, air brake, and electrical faults.','Document repairs in the fleet maintenance system.'],
    reqs:['ASE T-series certification (T2, T4, or T6)','3+ years heavy-duty diesel experience','Own tools; air tools supplied by the shop'],
    onboarding:['Verify ASE certifications','Complete I-9 and E-Verify','DOT physical and drug screen'] },

  { id:11, title:'Staff Accountant', company:'Confidential Manufacturer', location:'Phoenix, AZ', city:'Phoenix', vertical:'Professional', type:'Direct placement', shift:'Hybrid', pay:'$58K–$68K / yr', payRank:33, posted:'Posted 3d ago', age:3, urgent:false, credLine:'Full-cycle GL', openings:1, start:'Negotiable', branch:'Phoenix', recruiter:'Cody Brennan', noExp:false,
    desc:'A direct-hire seat on a four-person accounting team at a $90M manufacturer, reporting to the Controller. Three days onsite, two remote, with a clear path to Senior Accountant in two years.',
    duties:['Own the month-end close for two entities.','Prepare journal entries, accruals, and account reconciliations.','Support the annual audit and inventory costing reviews.'],
    reqs:['Bachelor\u2019s in Accounting or equivalent experience','2+ years full-cycle GL, ideally in manufacturing','ERP exposure (NetSuite, Epicor, or similar)'],
    onboarding:['Reference and education verification','Background check','Offer negotiated by your recruiter'] },
  { id:12, title:'HR Coordinator', company:'Regional Health System', location:'Dallas, TX', city:'Dallas', vertical:'Professional', type:'Temp-to-hire', shift:'Days', pay:'$24–$28 / hr', payRank:28, posted:'Posted 6d ago', age:6, urgent:false, credLine:'HRIS experience', openings:1, start:'Sep 29, 2026', branch:'Dallas', recruiter:'Tasha Merrill', noExp:false,
    desc:'Support a 12-person HR team through an HRIS migration on a six-month temp-to-hire. Heavy onboarding coordination and credential file work for clinical staff.',
    duties:['Coordinate onboarding, I-9s, and new hire paperwork.','Maintain credential files and expiration tracking.','Answer tier-one employee questions in a shared inbox.'],
    reqs:['2+ years HR support or high-volume administrative work','Workday or UKG experience preferred','Discretion with confidential employee records'],
    onboarding:['Reference verification','Complete I-9 and E-Verify','Background check'] },
  { id:13, title:'Executive Assistant', company:'Confidential Investment Firm', location:'Tampa, FL', city:'Tampa', vertical:'Professional', type:'Direct placement', shift:'Onsite', pay:'$65K–$75K / yr', payRank:37, posted:'Posted 1w ago', age:7, urgent:false, credLine:'C-suite support', openings:1, start:'Negotiable', branch:'Tampa', recruiter:'Ana Delgado', noExp:false,
    desc:'Direct support to two managing partners at a downtown investment firm. Discreet, calendar-heavy, and fully onsite, with a compensation review at twelve months.',
    duties:['Manage complex calendars across time zones.','Book domestic and international travel end to end.','Prepare board and investor meeting materials.'],
    reqs:['5+ years supporting senior executives','Advanced Outlook, Excel, and PowerPoint','Comfortable with strict confidentiality expectations'],
    onboarding:['Reference verification','Background and credit check','Offer negotiated by your recruiter'] }
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
const PRACTICE_LIST = ['Healthcare', 'Skilled Trades', 'Technical Trades', 'Professional'];
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
      if (s.vertical !== 'All practices' && j.vertical !== s.vertical) return false;
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
    Object.keys(V).forEach(function (k) { counts[k] = JOBS.filter(function (j) { return j.vertical === k; }).length; });

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
      practiceCards: [
        { name: 'Healthcare', desc: 'RNs, CNAs, LPNs, and allied health for per diem shifts, 13-week travel contracts, and permanent placement.', tags: 'RN · CNA · LPN · Med Tech' },
        { name: 'Skilled Trades', desc: 'Warehouse, manufacturing, construction, and logistics roles. No experience required for most openings.', tags: 'Warehouse · Forklift · Assembly · Construction' },
        { name: 'Technical Trades', desc: 'Licensed and certified technicians who bring their own credentials — and get paid for them.', tags: 'Electrician · HVAC · Diesel Tech' },
        { name: 'Professional', desc: 'Accounting, admin, and HR roles on temp-to-hire and direct placement for teams that are growing.', tags: 'Accounting · Admin · HR' }
      ].map((p) => ({
        name: p.name, desc: p.desc, tags: p.tags, img: V[p.name].img, alt: V[p.name].alt,
        count: JOBS.filter(function (j) { return j.vertical === p.name; }).length + ' open now',
        go: () => { this.setState({ screen: 'jobs', vertical: p.name }); window.scrollTo(0, 0); },
        pillStyle: { display: 'inline-block', fontSize: '11px', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: V[p.name].color, background: V[p.name].bg, padding: '5px 10px', borderRadius: '100px', whiteSpace: 'nowrap' },
        isHealthcare: p.name === 'Healthcare', isSkilled: p.name === 'Skilled Trades', isTechnical: p.name === 'Technical Trades', isProfessional: p.name === 'Professional'
      })),
      tiers: TIERS,
      locations: [
        { city: 'Dallas', st: 'TX' }, { city: 'Columbus', st: 'OH' }, { city: 'Charlotte', st: 'NC' }, { city: 'Phoenix', st: 'AZ' },
        { city: 'Atlanta', st: 'GA' }, { city: 'Sacramento', st: 'CA' }, { city: 'Indianapolis', st: 'IN' }, { city: 'Tampa', st: 'FL' }
      ],
      goTraction: this.go('traction'),
      marketStats: MARKET,
      modelRows: MODEL.map((m) => ({ name: m.name, share: m.share, margin: m.margin, note: m.note,
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
      filterSummary: s.vertical === 'All practices' ? 'across all four practices' : 'in ' + s.vertical,
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

