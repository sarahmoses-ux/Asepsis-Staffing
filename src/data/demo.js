// Sample data supplied with the design handoff. Replace with API data when available.
export const V = {
  Healthcare: { color: '#8C3A44', bg: '#F6EBEC', img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80', alt: 'Nurse walking a hospital corridor' },
  'Skilled Trades': { color: '#3A4A63', bg: '#ECEEF3', img: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1200&q=80', alt: 'Warehouse worker operating a forklift' },
  'Technical Trades': { color: '#8A6740', deco: '#A8825F', bg: '#F6EFE7', img: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=80', alt: 'Technician servicing equipment' },
  Professional: { color: '#3D6B57', bg: '#EAF1ED', img: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80', alt: 'Office professionals in a meeting' }
};

export const MARKET = [
  { k: '$212B', v: 'US temporary staffing revenue', n: 'Illustrative — sized across all four of our practices.' },
  { k: '20,000+', v: 'staffing firms in the US', n: 'Highly fragmented; most operate a single vertical in a single metro.' },
  { k: '<2%', v: 'held by any single mid-market firm', n: 'No regional operator has consolidated multi-vertical demand.' }
];
export const MODEL = [
  { name: 'Healthcare', share: '34%', margin: '22% gross margin', note: 'Per diem and 13-week travel contracts. Credential-gated, highest bill rate, stickiest client relationships.', w: '34%' },
  { name: 'Skilled Trades', share: '41%', margin: '17% gross margin', note: 'Warehouse, manufacturing, construction. Highest volume and fastest fill; the engine of branch utilisation.', w: '41%' },
  { name: 'Technical Trades', share: '15%', margin: '26% gross margin', note: 'Licensed electricians, HVAC, diesel techs. Scarce supply, premium rates, low churn.', w: '15%' },
  { name: 'Professional', share: '10%', margin: '31% gross margin', note: 'Accounting, admin, HR. Temp-to-hire and direct placement carry conversion fees.', w: '10%' }
];
export const RETENTION = [
  { k: '68%', v: 'of workers take a second assignment', n: 'Within 90 days of their first placement ending.' },
  { k: '3.4', v: 'assignments per worker, per year', n: 'One application, four practices to redeploy into.' },
  { k: '11 days', v: 'median bench time between assignments', n: 'Multi-vertical redeployment cuts idle time roughly in half.' },
  { k: '92%', v: 'of urgent requests filled inside 24 hours', n: 'Local branch bench plus the 24/7 dispatch line.' }
];

export const JOBS = [
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

  { id:18, title:'CDL-A Driver — Regional, owner-operated fleet', company:'Keystone Freight (7-truck fleet)', location:'Columbus, OH', city:'Columbus', vertical:'Skilled Trades', type:'Temp-to-hire', shift:'Days', pay:'$1,450–$1,700 / wk', payRank:34, posted:'Posted 1d ago', age:1, urgent:true, credLine:'CDL-A · 1 yr OTR', openings:3, start:'Monday', branch:'Columbus', recruiter:'Deon Pratt', noExp:false, driver:true,
    desc:'A seven-truck owner-operated fleet needs three regional drivers running Ohio, Indiana, and Kentucky, home most nights and every weekend. The owner keeps the trucks and the authority; Asepsis carries payroll, workers\u2019 comp, and DOT file compliance so the seats stay legal and filled.',
    duties:['Run dry van freight on a regional lane, 5 days out of 7.','Pre- and post-trip inspections logged in the ELD.','Drop and hook at three fixed customer docks.','Convert onto the fleet owner\u2019s payroll after 90 days if you both want it.'],
    reqs:['Valid CDL-A with 12 months verifiable OTR or regional experience','Clean MVR; no more than two moving violations in 3 years','Current DOT medical card and clearinghouse query consent'],
    onboarding:['MVR pull and previous-employer safety verification','DOT physical and drug screen through our consortium','ELD and equipment orientation with the fleet owner'] },
  { id:19, title:'Box Truck Delivery Driver — courier contract', company:'Metro Courier Partners', location:'Atlanta, GA', city:'Atlanta', vertical:'Skilled Trades', type:'Temporary', shift:'1st shift', pay:'$21–$24 / hr', payRank:24, posted:'Posted 5h ago', age:0.2, urgent:true, credLine:'No CDL required (26ft)', openings:14, start:'This week', branch:'Atlanta', recruiter:'Joy Adeyemi', noExp:false, driver:true,
    desc:'A last-mile courier company staffing 14 seats for a retail delivery contract. Trucks, fuel cards, and route devices come from the courier; you bring a clean licence. Routes are pre-built, 45 to 60 stops, home daily.',
    duties:['Run a pre-built route of 45–60 residential stops.','Scan, load, and verify freight against the manifest at the depot.','Two-person handling on appliance and furniture stops.'],
    reqs:['Valid state driver licence held 2+ years','Clean MVR; DOT physical required (we schedule and pay)','Able to lift 60 lbs with assistance'],
    onboarding:['MVR pull and licence verification','DOT physical and drug screen','Route device and depot badge issued day one'] },
  { id:20, title:'Sprinter Van Courier — no CDL', company:'Metro Courier Partners', location:'Charlotte, NC', city:'Charlotte', vertical:'Skilled Trades', type:'Per diem', shift:'All shifts', pay:'$19–$22 / hr', payRank:22, posted:'Posted 2d ago', age:2, urgent:false, credLine:'No experience required', openings:9, start:'Immediately', branch:'Charlotte', recruiter:'Marcus Hale', noExp:true, driver:true,
    desc:'Pick up medical and parts courier runs shift by shift from the open board. Cargo vans are provided at the depot; mileage and tolls are covered. Claim as few or as many shifts as you want each week.',
    duties:['Run scheduled medical, pharmacy, and parts routes.','Confirm chain of custody on every pickup and drop.','Claim shifts from the Asepsis worker dashboard.'],
    reqs:['Valid state driver licence held 2+ years','Clean MVR','Smartphone for route and proof-of-delivery scanning'],
    onboarding:['MVR pull and licence verification','Background check','Depot orientation and van assignment'] },
  { id:16, title:'Registered Nurse, Med-Surg — EB-3 sponsored', company:'Baptist Health', location:'Dallas, TX', city:'Dallas', vertical:'Healthcare', type:'Direct placement', shift:'Days', pay:'$34–$40 / hr', payRank:40, posted:'Posted 3d ago', age:3, urgent:false, credLine:'NCLEX + visa sponsorship', openings:12, start:'On visa approval', branch:'Dallas', recruiter:'Tasha Merrill', noExp:false, sponsored:true,
    desc:'A direct-hire med-surg role for internationally educated nurses, with EB-3 immigrant petition filing and legal fees paid by the employer. Asepsis manages credential evaluation, NCLEX preparation, and the two-year timeline alongside your immigration counsel.',
    duties:['Carry a 5:1 med-surg assignment on days after a six-week preceptorship.','Complete a paid transition-to-practice programme in your first 90 days.','Work a 24-month commitment; the seat is permanent from day one.'],
    reqs:['Registered nurse qualification from your home country','NCLEX-RN passed, or willing to sit it with our preparation support','CGFNS credential evaluation (we file and pay for it)','English proficiency: IELTS 6.5 or equivalent'],
    onboarding:['CGFNS credential evaluation and licence endorsement','I-140 petition filed by employer counsel','Relocation and first-month housing arranged before arrival'] },
  { id:17, title:'Seasonal Production Worker — H-2B programme', company:'Midwest Food Processing', location:'Columbus, OH', city:'Columbus', vertical:'Skilled Trades', type:'Temporary', shift:'2nd shift', pay:'$20–$23 / hr', payRank:23, posted:'Posted 5d ago', age:5, urgent:false, credLine:'H-2B · housing provided', openings:40, start:'Jan 5, 2027', branch:'Columbus', recruiter:'Deon Pratt', noExp:true, sponsored:true,
    desc:'A 9-month H-2B seasonal assignment for the winter production run, with certified housing, transport to site, and inbound travel reimbursed in the first paycheck. Wages are set at or above the prevailing wage determination.',
    duties:['Work a packing or sanitation line on 2nd shift.','Rotate stations weekly across the production floor.','Paid training in your first week; no experience required.'],
    reqs:['Eligible for an H-2B seasonal visa','Able to commit to the full 9-month season','Steel-toe boots supplied on arrival'],
    onboarding:['H-2B petition and consular appointment handled by the programme team','I-9 and E-Verify completed on arrival at the Columbus branch','Housing assignment and site transport confirmed before travel'] },
  { id:14, title:'Medical Billing Specialist — Remote', company:'Regional Health System', location:'Remote (US)', city:'Remote', vertical:'Professional', type:'Temp-to-hire', shift:'Days', setting:'Remote', pay:'$23–$27 / hr', payRank:27, posted:'Posted 8h ago', age:0.3, urgent:false, credLine:'Remote · equipment provided', openings:5, start:'Sep 21, 2026', branch:'Dallas', recruiter:'Tasha Merrill', noExp:false,
    desc:'Fully remote revenue-cycle work supporting a nine-hospital system on a six-month temp-to-hire. Asepsis ships a laptop and dual monitors before your start date and pays an internet stipend.',
    duties:['Work denied and aged claims in Epic Resolute.','Post payments and reconcile remittance advice.','Join a 15-minute daily huddle on camera; the rest is heads-down.','Two paid onsite days in Dallas in month one, travel covered.'],
    reqs:['2+ years medical billing or revenue cycle experience','A private workspace and 50 Mbps home internet','Epic or Cerner exposure preferred'],
    onboarding:['Complete I-9 and E-Verify at a branch or with a remote agent','Background check','Equipment shipped to your address'] },
  { id:15, title:'Recruiting Coordinator — Hybrid', company:'Confidential Manufacturer', location:'Phoenix, AZ', city:'Phoenix', vertical:'Professional', type:'Temporary', shift:'Hybrid', setting:'Hybrid', pay:'$25–$29 / hr', payRank:29, posted:'Posted 2d ago', age:2, urgent:false, credLine:'Two days onsite', openings:2, start:'Sep 28, 2026', branch:'Phoenix', recruiter:'Cody Brennan', noExp:false,
    desc:'A four-month hiring surge on a talent team running three plants. Two days onsite in Phoenix, three from home, on a schedule you agree before you start.',
    duties:['Schedule interviews across three plant locations.','Keep the ATS current and move candidates through stages.','Run offer paperwork and pre-boarding checks.'],
    reqs:['1+ year recruiting coordination or scheduling-heavy admin','Comfortable in an ATS (Greenhouse, iCIMS, or similar)','Able to be onsite in Phoenix two days a week'],
    onboarding:['Complete I-9 and E-Verify','Background check','Badge appointment at the Phoenix plant'] },

  { id:11, title:'Staff Accountant', setting:'Hybrid', company:'Confidential Manufacturer', location:'Phoenix, AZ', city:'Phoenix', vertical:'Professional', type:'Direct placement', shift:'Hybrid', pay:'$58K–$68K / yr', payRank:33, posted:'Posted 3d ago', age:3, urgent:false, credLine:'Full-cycle GL', openings:1, start:'Negotiable', branch:'Phoenix', recruiter:'Cody Brennan', noExp:false,
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
export const PRACTICE_LIST = ['Healthcare', 'Skilled Trades', 'Technical Trades', 'Professional'];
export const AVAIL = ['1st shift', '2nd shift', 'Nights', 'Weekends', 'Per diem / pick-up', 'Travel contracts'];

export const MY_SHIFTS = [
  { day: 'Mon', date: 'Sep 14', role: 'Warehouse Associate', site: 'Regional Distribution Center', time: '6:00a – 2:30p', status: 'Confirmed', tone: 'ok' },
  { day: 'Tue', date: 'Sep 15', role: 'Warehouse Associate', site: 'Regional Distribution Center', time: '6:00a – 2:30p', status: 'Confirmed', tone: 'ok' },
  { day: 'Wed', date: 'Sep 16', role: 'Warehouse Associate', site: 'Regional Distribution Center', time: '6:00a – 2:30p', status: 'Confirmed', tone: 'ok' },
  { day: 'Sat', date: 'Sep 19', role: 'Overtime — inbound dock', site: 'Regional Distribution Center', time: '6:00a – 12:00p', status: 'Open — voluntary', tone: 'open' }
];
export const MY_CREDS = [
  { name: 'I-9 & E-Verify', detail: 'Verified at Columbus branch', status: 'Verified', tone: 'ok' },
  { name: 'Background check', detail: 'Cleared Aug 28, 2026', status: 'Cleared', tone: 'ok' },
  { name: 'Forklift certification', detail: 'Expires Nov 2, 2026', status: 'Expires in 8 wks', tone: 'warn' },
  { name: 'OSHA-10', detail: 'Not started — required for site work', status: 'Action needed', tone: 'bad' }
];
export const MY_PAY = [
  { week: 'Week of Sep 1', hours: '40.0 hrs', gross: '$812.00', status: 'Paid Fri Sep 5' },
  { week: 'Week of Aug 25', hours: '42.5 hrs', gross: '$873.75', status: 'Paid Fri Aug 29' },
  { week: 'Week of Aug 18', hours: '40.0 hrs', gross: '$812.00', status: 'Paid Fri Aug 22' }
];
export const REQUESTS = [
  { id: 'R-2841', role: 'Warehouse Associate / Forklift', practice: 'Skilled Trades', tier: 'Temp-to-Hire', site: 'Columbus, OH', need: 24, filled: 21, status: 'Filling', tone: 'warn', opened: 'Sep 2' },
  { id: 'R-2836', role: 'Registered Nurse, ICU', practice: 'Healthcare', tier: 'Travel', site: 'Dallas, TX', need: 4, filled: 4, status: 'Filled', tone: 'ok', opened: 'Aug 28' },
  { id: 'R-2829', role: 'Diesel Technician', practice: 'Technical Trades', tier: 'Temp-to-Hire', site: 'Phoenix, AZ', need: 2, filled: 1, status: 'Interviewing', tone: 'warn', opened: 'Aug 24' },
  { id: 'R-2818', role: 'HR Coordinator', practice: 'Professional', tier: 'Temp-to-Hire', site: 'Dallas, TX', need: 1, filled: 0, status: 'Sourcing', tone: 'info', opened: 'Aug 19' },
  { id: 'R-2807', role: 'General Laborer', practice: 'Skilled Trades', tier: 'Temporary', site: 'Charlotte, NC', need: 8, filled: 8, status: 'Filled', tone: 'ok', opened: 'Aug 11' }
];
export const CANDIDATES = [
  { name: 'Renata Silva', role: 'Diesel Technician', creds: 'ASE T2, T4 · 6 yrs heavy-duty', rate: '$32 / hr', req: 'R-2829', initials: 'RS' },
  { name: 'Andre Whitcomb', role: 'Warehouse Associate', creds: 'Forklift certified · sit-down + reach', rate: '$20 / hr', req: 'R-2841', initials: 'AW' },
  { name: 'Priya Raman', role: 'HR Coordinator', creds: 'Workday · 4 yrs HR support', rate: '$27 / hr', req: 'R-2818', initials: 'PR' }
];
export const ON_ASSIGN = [
  { name: 'DeShawn Carter', role: 'Forklift Operator', site: 'Columbus, OH', hours: '40.0', week: 'Week 6 of 12' },
  { name: 'Maria Santos', role: 'RN, ICU — Travel', site: 'Dallas, TX', hours: '36.0', week: 'Week 3 of 13' },
  { name: 'Miguel Reyes', role: 'HVAC Technician', site: 'Charlotte, NC', hours: '44.5', week: 'Converted Sep 1' },
  { name: 'Angela Whitfield', role: 'Staff Accountant', site: 'Phoenix, AZ', hours: '40.0', week: 'Week 9 of 12' }
];
export const EMP_REQS = ['Background check', 'Drug screen (10-panel)', 'E-Verify / I-9', 'License & credential verification', 'OSHA-10 / 30', 'Motor vehicle record', 'Forklift certification', 'Steel-toe boots on site'];
export const TIERS = [
  { name: 'Temporary', note: 'Short-notice coverage for absences or surges.' },
  { name: 'Temp-to-Hire', note: 'Trial on our payroll, then convert to yours.' },
  { name: 'Direct Placement', note: 'Full-cycle search for a permanent hire.' },
  { name: 'Per Diem & Travel', note: 'Credentialed clinical staff, single shifts to 13 weeks.' }
];

export const TYPES = ['Temporary', 'Temp-to-hire', 'Direct placement', 'Per diem', 'Travel contract'];
export const SHIFTS = ['1st shift', '2nd shift', 'Nights', 'Days', 'All shifts', 'Hybrid'];

