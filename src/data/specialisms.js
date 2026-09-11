const visuals = {
  Healthcare: { color: '#8C3A44', bg: '#F6EBEC', img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80', alt: 'Nurse walking a hospital corridor' },
  'Skilled Trades': { color: '#3A4A63', bg: '#ECEEF3', img: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1200&q=80', alt: 'Warehouse worker operating a forklift' },
  'Technical Trades': { color: '#8A6740', deco: '#A8825F', bg: '#F6EFE7', img: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=80', alt: 'Technician servicing equipment' },
  Professional: { color: '#3D6B57', bg: '#EAF1ED', img: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80', alt: 'Office professionals in a meeting' },
  International: { color: '#3A1D22', bg: '#F6EBEC', img: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=80', alt: 'Professionals collaborating across locations' }
};

export const SPECIALISMS = [
  { name: 'Healthcare', desc: 'RNs, CNAs, LPNs, and allied health for per diem shifts, 13-week travel contracts, and permanent placement.', tags: 'RN · CNA · LPN · Med Tech' },
  { name: 'Skilled Trades', desc: 'Warehouse, manufacturing, construction, and logistics roles. No experience required for most openings.', tags: 'Warehouse · Forklift · Assembly · Construction' },
  { name: 'Technical Trades', desc: 'Licensed and certified technicians who bring their own credentials — and get paid for them.', tags: 'Electrician · HVAC · Diesel Tech' },
  { name: 'Professional', desc: 'Accounting, admin, and HR roles on temp-to-hire and direct placement for teams that are growing.', tags: 'Accounting · Admin · HR' },
  { name: 'International', desc: 'Remote and internationally sponsored opportunities across our specialisms.', tags: 'Remote roles / International opportunities' }
].map((item) => ({ ...item, ...visuals[item.name] }));
export const V = Object.fromEntries(SPECIALISMS.map((item) => [item.name, item]));
export const PRACTICE_LIST = SPECIALISMS.map((item) => item.name);

export function matchesSpecialism(job, name) {
  return name === "International" ? job.vertical === name || job.setting === "Remote" || Boolean(job.sponsored) : job.vertical === name;
}
