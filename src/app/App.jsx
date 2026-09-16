import { SPECIALISMS, matchesSpecialism } from '../data/specialisms.js';
import React from 'react';
import { api } from './api.js';
import AppView from './AppView.jsx';
import { V, MARKET, MODEL, RETENTION, JOBS, HANDLED, APPLY_STEPS, CRED_OPTIONS, PRACTICE_LIST, AVAIL, MY_SHIFTS, MY_CREDS, MY_PAY, REQUESTS, CANDIDATES, ON_ASSIGN, EMP_REQS, TIERS, TYPES, SHIFTS } from '../data/demo.js';

export default class App extends React.Component {
  render() { return <AppView {...this.renderVals()} />; }
  state = {
    user: null, authReady: false, records: [], accountLoading: false, pendingScreen: null, submitting: false,
    screen: 'home', vertical: 'All practices', types: [], shifts: [], noExpOnly: false,
    search: '', zip: '', sort: 'Newest', selectedId: 1, saved: [],
    step: 0, submitted: false, formError: '',
    form: { first: '', last: '', phone: '', email: '', zip: '', heard: 'Referred by a friend', eligible: 'Yes', over18: true, consent: false, creds: ['BLS'], practices: ['Healthcare'], avail: ['Nights'], start: 'Within a week', transport: 'Own vehicle', payMethod: 'Direct deposit', resume: '' },
    req: { practice: 'Skilled Trades', role: '', headcount: '6', tier: 'Temp-to-Hire', start: '', duration: '90 days', shift: '1st shift', site: '', cityState: '', reqs: ['Background check', 'E-Verify / I-9'], contact: '', company: 'Cardinal Logistics', email: '', phone: '', notes: '', urgent: false },
    reqSubmitted: false,
    claimed: [], handledCands: [], approvedCount: 0, settings: [], sponsoredOnly: false, internationalOnly: false, driversOnly: false
  };

  goRemote = () => { this.setState({ screen: 'jobs', vertical: 'All practices', types: [], shifts: [], settings: ['Remote', 'Hybrid'], sponsoredOnly: false, internationalOnly: false, search: '' }); window.scrollTo(0, 0); };
  goSponsored = () => { this.setState({ screen: 'jobs', vertical: 'All practices', types: [], shifts: [], settings: [], sponsoredOnly: true, internationalOnly: false, driversOnly: false, search: '' }); window.scrollTo(0, 0); };
  goInternational = () => { this.setState({ screen: 'jobs', vertical: 'International', types: [], shifts: [], settings: [], sponsoredOnly: false, driversOnly: false, noExpOnly: false, internationalOnly: false, search: '', zip: '' }); window.scrollTo(0, 0); };
  goDrivers = () => { this.setState({ screen: 'jobs', vertical: 'All practices', types: [], shifts: [], settings: [], sponsoredOnly: false, internationalOnly: false, driversOnly: true, search: '' }); window.scrollTo(0, 0); };

  claimShift = (date) => () => { this.setState({ claimed: this.state.claimed.concat([date]) }); };
  handleCand = (name, approve) => () => {
    this.setState({ handledCands: this.state.handledCands.concat([name]), approvedCount: this.state.approvedCount + (approve ? 1 : 0) });
  };
  runSearch = () => { this.setState({ screen: 'jobs', vertical: 'All practices', types: [], shifts: [], settings: [], noExpOnly: false, driversOnly: false, sponsoredOnly: false, internationalOnly: false }); window.scrollTo(0, 0); };

  componentDidMount() {
    this.readRoute();
    this.restoreSession();
    window.addEventListener('hashchange', this.readRoute);
    window.addEventListener('asepsis:navigate', this.onNavigate);
    const v = this.props.openPractice;
    if (v && v !== 'All practices') this.setState({ vertical: v });
  }

  readRoute = () => {
    const [screen, id] = location.hash.slice(1).split('/');
    if (screen === 'international') { this.goInternational(); return; }
    if (['home','jobs','detail','apply','worker','request','employer','traction','login','signup','account'].includes(screen)) {
      this.setState({ screen, ...(screen === 'detail' && JOBS.some(j => j.id === Number(id)) ? { selectedId: Number(id) } : {}) });
      window.scrollTo(0, 0);
    }
  };
  onNavigate = (event) => {
    const { screen, vertical, section } = event.detail;
    this.setState({ screen, ...(vertical ? { vertical, search: '', types: [], shifts: [], settings: [], driversOnly: false, sponsoredOnly: false, internationalOnly: false } : {}) });
    if (section) setTimeout(() => document.getElementById(section)?.scrollIntoView(), 100);
  };
  componentDidUpdate() {
    if (this.state.authReady && !this.state.user && ['worker','employer','account','apply','request'].includes(this.state.screen)) {
      this.setState({ pendingScreen: this.state.screen, screen: 'login' }); return;
    }
    if (this.state.user && ((this.state.screen === 'apply' && this.state.user.role !== 'worker') || (this.state.screen === 'request' && this.state.user.role !== 'employer'))) {
      this.setState({ screen: 'account', formError: 'This action requires a ' + (this.state.screen === 'apply' ? 'worker' : 'employer') + ' account.' }); return;
    }
    const route = '#' + this.state.screen + (this.state.screen === 'detail' ? '/' + this.state.selectedId : '');
    if (location.hash !== route) history.pushState(null, '', route);
  }
  componentWillUnmount() {
    window.removeEventListener('hashchange', this.readRoute);
    window.removeEventListener('asepsis:navigate', this.onNavigate);
  }
  validateApplication = (all = false) => {
    const f = this.state.form;
    let error = '';
    if ((this.state.step === 0 || all) && (!f.first.trim() || !f.last.trim() || !f.phone.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email) || !f.zip.trim())) error = 'Please enter your name, phone number, valid email address, and ZIP code.';
    if ((this.state.step === 1 || all) && !f.consent) error = 'Please authorize verification before continuing.';
    this.setState({ formError: error });
    return !error;
  };
  validateRequest = () => {
    const r = this.state.req;
    const valid = ['role','start','site','cityState','contact','company','phone'].every(key => r[key].trim()) && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r.email) && Number(r.headcount) > 0 && Number.isInteger(Number(r.headcount));
    this.setState({ formError: valid ? '' : 'Please complete the role, positive whole-number headcount, start date, site, location, and contact details with a valid email.' });
    return valid;
  };
  set = (patch) => this.setState(patch);
  go = (screen) => () => { this.setState({ screen, formError: '', ...(screen === 'request' ? { reqSubmitted: false } : {}), ...(screen === 'apply' ? { submitted: false, step: 0 } : {}) }); window.scrollTo(0, 0); };

  openJob = (id) => () => { this.setState({ screen: 'detail', selectedId: id }); window.scrollTo(0, 0); };

  restoreSession = async () => {
    try { const { user } = await api('session'); this.setState({ user, authReady: true, ...(user ? { form: { ...this.state.form, first: user.name.split(' ')[0], last: user.name.split(' ').slice(1).join(' '), email: user.email }, req: { ...this.state.req, contact: user.name, email: user.email, company: '' } } : {}) }); if (user) await this.reloadAccount(); }
    catch (error) { this.setState({ authReady: true, formError: error.message }); }
  };
  reloadAccount = async () => {
    this.setState({ accountLoading: true });
    try { const data = await api('account'); this.setState({ saved: data.saved, records: data.records }); }
    catch (error) { this.setState({ formError: error.message }); }
    finally { this.setState({ accountLoading: false }); }
  };
  onAuthenticated = async (user) => {
    this.setState({ user, screen: this.state.pendingScreen || 'account', pendingScreen: null, formError: '', form: { ...this.state.form, first: user.name.split(' ')[0], last: user.name.split(' ').slice(1).join(' '), email: user.email }, req: { ...this.state.req, contact: user.name, email: user.email, company: '' } });
    await this.reloadAccount();
  };
  logout = async () => {
    try { await api('logout', {}); window.location.replace('/#home'); window.location.reload(); }
    catch (error) { this.setState({ formError: error.message }); }
  };
  submitRecord = async (kind) => {
    if (this.submissionInFlight || !(kind === 'application' ? this.validateApplication(true) : this.validateRequest())) return;
    this.submissionInFlight = true;
    this.setState({ formError: '', submitting: true });
    try {
      const job = JOBS.find(j => j.id === this.state.selectedId);
      await api('records', { kind, data: kind === 'application' ? { ...this.state.form, jobId: job.id, jobTitle: job.title } : this.state.req });
      this.setState(kind === 'application' ? { submitted: true } : { reqSubmitted: true });
      await this.reloadAccount(); window.scrollTo(0, 0);
    } catch (error) { this.setState({ formError: error.message }); }
    finally { this.submissionInFlight = false; this.setState({ submitting: false }); }
  };
  toggleSave = (id) => async (e) => {
    e?.stopPropagation();
    if (!this.state.user) { this.setState({ pendingScreen: this.state.screen, screen: 'login' }); return; }
    if (this.savingJob) return;
    this.savingJob = true;
    const saved = !this.state.saved.includes(id);
    try { await api('saved', { jobId: id, saved }); this.setState(s => ({ saved: saved ? [...s.saved, id] : s.saved.filter(x => x !== id) })); }
    catch (error) { this.setState({ formError: error.message }); }
    finally { this.savingJob = false; }
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
      if (s.settings.length && s.settings.indexOf(j.setting || 'Onsite') === -1) return false;
      if (s.noExpOnly && !j.noExp) return false;
      if (s.sponsoredOnly && !j.sponsored) return false;
      if (s.internationalOnly && !j.sponsored && j.setting !== 'Remote') return false;
      if (s.driversOnly && !j.driver) return false;
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
      type: j.type, shift: j.shift, pay: j.pay, posted: j.posted, urgent: j.urgent, credLine: j.credLine, sponsored: !!j.sponsored,
      initials: j.company.split(' ').slice(0, 2).map(function (w) { return w[0]; }).join(''),
      bar: { position: 'absolute', left: 0, top: 0, bottom: 0, width: '4px', background: v.deco || v.color },
      logo: { width: '46px', height: '46px', borderRadius: '10px', background: v.bg, color: v.color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 },
      pillStyle: { display: 'inline-block', fontSize: '11px', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: v.color, background: v.bg, padding: '4px 9px', borderRadius: '100px' },
      open: this.openJob(j.id),
      save: this.toggleSave(j.id),
      saveLabel: isSaved ? 'Saved' : 'Save',
      saveStyle: { whiteSpace: 'nowrap', border: '1.5px solid ' + (isSaved ? '#22262E' : '#E5E2DC'), color: '#22262E', padding: '9px 14px', borderRadius: '8px', fontSize: '13px', fontWeight: 600, background: isSaved ? '#F5F4F2' : '#fff' }
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


    const counts = {};
    Object.keys(V).forEach(function (k) { counts[k] = JOBS.filter(function (j) { return matchesSpecialism(j, k); }).length; });

    const chip = (on) => ({ whiteSpace: 'nowrap', padding: '7px 12px', borderRadius: '100px', fontSize: '12.5px', fontWeight: 600, border: '1px solid ' + (on ? '#22262E' : '#E5E2DC'), background: on ? '#22262E' : '#fff', color: on ? '#fff' : '#5D6472' });

    return {
      screen: s.screen,
      submitting: s.submitting,
      user: s.user, authReady: s.authReady, records: s.records, accountLoading: s.accountLoading,
      go: this.go, onAuthenticated: this.onAuthenticated, logout: this.logout, reloadAccount: this.reloadAccount,
      goLogin: this.go('login'), goSignup: this.go('signup'), goAccount: this.go('account'),
      goSection: (section) => this.onNavigate({ detail: { screen: 'home', section } }),
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
        go: () => { this.setState({ screen: 'jobs', vertical: p.name, search: '', zip: '', types: [], shifts: [], settings: [], noExpOnly: false, driversOnly: false, sponsoredOnly: false, internationalOnly: false }); window.scrollTo(0, 0); },
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
        barStyle: { width: m.w, height: '100%', background: V[m.name].deco || V[m.name].color, borderRadius: '100px' },
        dot: { width: '9px', height: '9px', borderRadius: '3px', background: V[m.name].deco || V[m.name].color, flexShrink: 0 } })),
      retentionStats: RETENTION,
      goJobs: this.go('jobs'),
      goApply: this.go('apply'),
      search: s.search, zip: s.zip, sort: s.sort,
      onSearch: (e) => this.set({ search: e.target.value }),
      onZip: (e) => this.set({ zip: e.target.value }),
      onSort: (e) => this.set({ sort: e.target.value }),
      noExpOnly: s.noExpOnly,
      toggleNoExp: () => this.set({ noExpOnly: !s.noExpOnly }),
      clearFilters: () => this.set({ vertical: 'All practices', types: [], shifts: [], settings: [], noExpOnly: false, sponsoredOnly: false, internationalOnly: false, driversOnly: false, search: '', zip: '' }),
      verticalOptions: ['All practices'].concat(Object.keys(V)).map((name) => {
        const on = s.vertical === name;
        const c = V[name] ? V[name].color : '#5B6270';
        return {
          name: name, count: name === 'All practices' ? JOBS.length : counts[name],
          go: () => this.set({ vertical: name, internationalOnly: false }),
          dot: { width: '8px', height: '8px', borderRadius: '3px', background: (V[name] && V[name].deco) || c, flexShrink: 0 },
          style: { whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px', padding: '9px 10px', borderRadius: '9px', fontSize: '13.5px', fontWeight: on ? 600 : 500, color: on ? '#171A20' : '#5D6472', background: on ? '#F5F4F2' : 'transparent', width: '100%', textAlign: 'left' }
        };
      }),
      typeOptions: TYPES.map((t) => ({ name: t, on: s.types.indexOf(t) > -1, go: this.toggleIn('types', t) })),
      shiftOptions: SHIFTS.map((sh) => ({ name: sh, go: this.toggleIn('shifts', sh), style: chip(s.shifts.indexOf(sh) > -1) })),
      resultCount: list.length,
      filterSummary: s.internationalOnly ? 'remote roles and international opportunities' : s.vertical === 'All practices' ? 'across our specialisms' : 'in ' + s.vertical,
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
        style: { display: 'flex', gap: '13px', padding: '13px 14px', borderRadius: '11px', width: '100%', textAlign: 'left', background: i === s.step ? '#fff' : 'transparent', border: '1px solid ' + (i === s.step ? '#E5E2DC' : 'transparent') },
        numStyle: { width: '30px', height: '30px', borderRadius: '50%', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Fraunces',serif", fontSize: '14px', fontWeight: 600, background: i < s.step ? '#3D6B57' : i === s.step ? '#22262E' : '#EBE8E2', color: i <= s.step ? '#fff' : '#5B6270' },
        titleStyle: { fontSize: '14.5px', fontWeight: 600, color: i === s.step ? '#171A20' : '#5D6472' }
      })),
      notLastStep: s.step < 3,
      step1: s.step === 0, step2: s.step === 1, step3: s.step === 2, step4: s.step === 3,
      stepLabel: 'Step ' + (s.step + 1) + ' of 4',
      applyJobTitle: job.title,
      applyJobMeta: job.company + ' · ' + job.location + ' · ' + job.pay,
      next: () => { if (this.validateApplication()) this.stepTo(Math.min(3, s.step + 1))(); },
      formError: s.formError,
      back: this.stepTo(Math.max(0, s.step - 1)),
      showBack: s.step > 0,
      submitApply: () => this.submitRecord('application'),
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
      myShifts: MY_SHIFTS.map((sh) => {
        const claimed = s.claimed.indexOf(sh.date) > -1;
        return { day: sh.day, date: sh.date, role: sh.role, site: sh.site, time: sh.time,
          status: claimed ? 'Confirmed — you claimed it' : sh.status,
          pill: this.tone(claimed ? 'ok' : sh.tone),
          isOpen: sh.tone === 'open' && !claimed, claim: this.claimShift(sh.date) };
      }),
      candidates: CANDIDATES.filter(function (c) { return s.handledCands.indexOf(c.name) === -1; }).map((c) => Object.assign({}, c, { approve: this.handleCand(c.name, true), pass: this.handleCand(c.name, false) })),
      candidateQueueLabel: CANDIDATES.length - s.handledCands.length,
      hasCandidates: s.handledCands.length < CANDIDATES.length,
      queueCleared: s.handledCands.length >= CANDIDATES.length,
      approvedNote: s.approvedCount + ' approved this session · start dates confirmed by your account manager',
      hasApproved: s.approvedCount > 0,
      savedCount: s.saved.length,
      activeFilters: (s.vertical !== 'All practices' ? [s.vertical] : []).concat(s.types).concat(s.shifts).concat(s.settings).concat(s.internationalOnly ? ['International'] : []).concat(s.noExpOnly ? ['No experience required'] : []).concat(s.sponsoredOnly ? ['Sponsorship available'] : []).concat(s.driversOnly ? ['Driving & delivery'] : []).concat(s.search ? ['“' + s.search + '”'] : []),
      hasFilters: s.vertical !== 'All practices' || s.types.length > 0 || s.shifts.length > 0 || s.settings.length > 0 || s.noExpOnly || s.sponsoredOnly || s.internationalOnly || s.driversOnly || s.search.length > 0,
      runSearch: this.runSearch,
      goInternational: this.goInternational,
      goRemote: this.goRemote,
      goSponsored: this.goSponsored,
      goDrivers: this.goDrivers,
      driversOnly: s.driversOnly,
      toggleDrivers: () => this.set({ driversOnly: !s.driversOnly }),
      driverSeats: JOBS.filter(function (j) { return j.driver; }).reduce(function (a, j) { return a + j.openings; }, 0),
      sponsoredOnly: s.sponsoredOnly,
      toggleSponsored: () => this.set({ sponsoredOnly: !s.sponsoredOnly }),
      sponsoredCount: JOBS.filter(function (j) { return j.sponsored; }).length,
      sponsoredOpenings: JOBS.filter(function (j) { return j.sponsored; }).reduce(function (a, j) { return a + j.openings; }, 0),
      settingOptions: ['Onsite', 'Hybrid', 'Remote'].map((st) => ({ name: st, go: this.toggleIn('settings', st), style: chip(s.settings.indexOf(st) > -1) })),
      remoteCount: JOBS.filter(function (j) { return j.setting === 'Remote' || j.setting === 'Hybrid'; }).length,
      crumbPractice: job.vertical,
      crumbTitle: job.title,
      myCreds: MY_CREDS.map((c) => ({ name: c.name, detail: c.detail, status: c.status, pill: this.tone(c.tone) })),
      myPay: MY_PAY,
      matchedJobs: JOBS.filter(function (j) { return j.vertical === 'Skilled Trades' && j.id !== 5; }).slice(0, 2).map(this.jobRow),
      savedJobs: JOBS.filter(function (j) { return s.saved.indexOf(j.id) > -1; }).map(this.jobRow),
      hasSaved: s.saved.length > 0,

      r: s.req,
      onReqField: this.onReqField,
      reqSubmitted: s.reqSubmitted,
      reqNotSubmitted: !s.reqSubmitted,
      submitRequest: () => this.submitRecord('request'),
      reqPracticeOptions: PRACTICE_LIST.map((p) => ({ name: p, go: this.setReq('practice', p), style: chip(s.req.practice === p) })),
      tierOptions: TIERS.map((t) => {
        const on = s.req.tier === t.name;
        return { name: t.name, note: t.note, go: this.setReq('tier', t.name),
          style: { textAlign: 'left', padding: '15px 16px', borderRadius: '12px', border: '1.5px solid ' + (on ? '#22262E' : '#E5E2DC'), background: on ? '#F5F4F2' : '#fff', width: '100%' },
          titleStyle: { display: 'block', fontSize: '14.5px', fontWeight: 600, color: '#171A20', marginBottom: '3px' } };
      }),
      reqShiftOptions: ['1st shift', '2nd shift', '3rd shift / nights', 'Weekends', 'Rotating'].map((sh) => ({ name: sh, go: this.setReq('shift', sh), style: chip(s.req.shift === sh) })),
      reqDurationOptions: ['One shift', '2–4 weeks', '90 days', '13 weeks', 'Ongoing'].map((d) => ({ name: d, go: this.setReq('duration', d), style: chip(s.req.duration === d) })),
      empReqOptions: EMP_REQS.map((rq) => ({ name: rq, on: s.req.reqs.indexOf(rq) > -1, go: this.toggleReqItem(rq) })),
      reqSummaryLine: s.req.headcount + ' × ' + (s.req.role || 'role TBD') + ' · ' + s.req.tier + ' · ' + (s.req.cityState || 'location TBD'),

      requests: REQUESTS.map((rq) => ({ id: rq.id, role: rq.role, practice: rq.practice, tier: rq.tier, site: rq.site, opened: rq.opened, fill: rq.filled + ' of ' + rq.need, status: rq.status, pill: this.tone(rq.tone), barStyle: { width: Math.round((rq.filled / rq.need) * 100) + '%', height: '100%', background: rq.tone === 'ok' ? '#3D6B57' : '#C9A98A', borderRadius: '100px' } })),
      onAssign: ON_ASSIGN,
      newRequestRow: s.reqSubmitted
    };
  }
}

