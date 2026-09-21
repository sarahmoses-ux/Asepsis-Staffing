// Operational collections remain empty until verified records are available.
export { V, PRACTICE_LIST } from './specialisms.js';

export const MARKET = [];
export const MODEL = [];
export const RETENTION = [];

export const JOBS = [];

export const HANDLED = [
  { title: 'Weekly pay', note: 'Direct deposit or pay card every Friday.' },
  { title: 'E-Verify & I-9', note: 'Completed once, at any branch or online.' },
  { title: 'Credential verification', note: 'Licenses and certifications confirmed for you.' },
  { title: "Workers' comp", note: 'Full coverage while you are on assignment.' }
];

export const APPLY_STEPS = [
  { n: '1', title: 'About you', note: 'Name, contact, and your ZIP code' },
  { n: '2', title: 'Work eligibility', note: 'I-9, E-Verify, and screening consent' },
  { n: '3', title: 'Credentials & availability', note: 'Licenses, shifts, and pay setup' },
  { n: '4', title: 'Review & submit', note: 'One recruiter reviews everything' }
];
export const CRED_OPTIONS = ['RN license', 'LPN license', 'CNA certification', 'BLS', 'ACLS', 'EPA 608', 'Journeyman electrician', 'ASE T-series', 'OSHA-10 / 30', 'Forklift certification', 'CDL', 'None yet'];
export const AVAIL = ['1st shift', '2nd shift', 'Nights', 'Weekends', 'Per diem / pick-up', 'Travel contracts'];

export const MY_SHIFTS = [];
export const MY_CREDS = [];
export const MY_PAY = [];
export const REQUESTS = [];
export const CANDIDATES = [];
export const ON_ASSIGN = [];
export const EMP_REQS = ['Background check', 'Drug screen (10-panel)', 'E-Verify / I-9', 'License & credential verification', 'OSHA-10 / 30', 'Motor vehicle record', 'Forklift certification', 'Steel-toe boots on site'];
export const TIERS = [
  { name: 'Temporary', note: 'Short-notice coverage for absences or surges.' },
  { name: 'Temp-to-Hire', note: 'Trial on our payroll, then convert to yours.' },
  { name: 'Direct Placement', note: 'Full-cycle search for a permanent hire.' },
  { name: 'Per Diem & Travel', note: 'Credentialed clinical staff, single shifts to 13 weeks.' }
];

export const TYPES = ['Temporary', 'Temp-to-hire', 'Direct placement', 'Per diem', 'Travel contract'];
export const SHIFTS = ['1st shift', '2nd shift', 'Nights', 'Days', 'All shifts', 'Hybrid'];

