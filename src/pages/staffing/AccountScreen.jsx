import React, { useState } from 'react';
import { api } from '../../app/api.js';
import '../../styles/account.css';

export function AuthScreen({ screen, go, onAuthenticated }) {
  const signup = screen === 'signup';
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  async function submit(event) {
    event.preventDefault();
    if (busy) return;
    const data = Object.fromEntries(new FormData(event.currentTarget));
    setBusy(true); setError('');
    try { const result = await api(signup ? 'signup' : 'login', data); await onAuthenticated(result.user); }
    catch (error) { setError(error.message); }
    finally { setBusy(false); }
  }
  return <section className="account-layout container">
    <div className="account-intro"><span className="account-eyebrow">YOUR NEXT STEP STARTS HERE</span><h1>{signup ? 'One account. More possibilities.' : 'Welcome back.'}</h1><p>Find work or build your team, with everything you need in one place.</p><ul><li>Save jobs that interest you</li><li>Keep your applications together</li><li>Manage your staffing requests</li></ul><button className="button" onClick={go('jobs')}>Explore jobs →</button></div>
    <form className="account-card" onSubmit={submit} key={screen}>
      <h2>{signup ? 'Create your account' : 'Log in to your account'}</h2><p>{signup ? 'A few details and you’re ready to go.' : 'Enter your email and password to continue.'}</p>
      {error && <p className="form-error" role="alert">{error}</p>}
      {signup && <label>Full name<input name="name" autoComplete="name" maxLength={100} required /></label>}
      <label>Email address<input name="email" type="email" autoComplete="email" maxLength={254} required /></label>
      <label>Password<input name="password" type={showPassword ? 'text' : 'password'} autoComplete={signup ? 'new-password' : 'current-password'} minLength={10} maxLength={128} required aria-describedby="password-help" /></label>
      <div className="password-options"><small id="password-help">{signup ? 'Use at least 10 characters.' : 'Use the password you signed up with.'}</small><button type="button" aria-pressed={showPassword} onClick={() => setShowPassword(!showPassword)}>{showPassword ? 'Hide' : 'Show'}</button></div>
      {signup && <label>I’m here to<select name="role"><option value="worker">Find work</option><option value="employer">Hire staff</option></select></label>}
      <button className="button button--primary" disabled={busy}>{busy ? 'Please wait…' : signup ? 'Create account' : 'Log in'}</button>
      <p className="account-switch">{signup ? 'Already have an account?' : 'New to Asepsis?'} <button type="button" onClick={go(signup ? 'login' : 'signup')}>{signup ? 'Log in' : 'Sign up'}</button></p>
    </form>
  </section>;
}

export default function AccountScreen({ user, records, savedJobs, goJobs, goApply, goRequest, accountLoading, reloadAccount, hasJob }) {
  const employer = user.role === 'employer';
  return <section className="account-dashboard container"><span className="account-eyebrow">{employer ? 'EMPLOYER ACCOUNT' : 'WORKER ACCOUNT'}</span><h1>Hello, {user.name.split(' ')[0]}.</h1><p>Your next steps, all in one place.</p>
    <div className="dashboard-actions"><button className="button button--primary" onClick={employer ? goRequest : goJobs}>{employer ? 'Request staff' : 'Find work'}</button>{!employer && hasJob && <button className="button" onClick={goApply}>Start an application</button>}<button className="button" onClick={reloadAccount} disabled={accountLoading}>{accountLoading ? 'Refreshing…' : 'Refresh'}</button></div>
    <div className="dashboard-grid"><section className="account-card"><h2>{employer ? 'Your staffing requests' : 'Your applications'}</h2>{accountLoading ? <p role="status">Loading your activity…</p> : records.length ? <ul className="activity-list">{records.map(record => <li key={record.id}><strong>{record.kind === 'request' ? record.data.role : record.data.jobTitle}</strong><span>Reference #{record.id} · {new Date(record.created).toLocaleDateString()}</span><small>Saved · Awaiting review</small></li>)}</ul> : <div className="account-empty"><h3>A fresh start</h3><p>{employer ? 'Your staffing requests will appear here after you submit them.' : 'Apply for a role and follow your submissions here.'}</p></div>}<small>Submissions are stored in your account. Recruiter notifications are not yet connected.</small></section>
    <section className="account-card"><h2>{employer ? 'Account details' : 'Saved jobs'}</h2>{employer ? <><p>{user.name}</p><p>{user.email}</p></> : savedJobs.length ? <ul className="activity-list">{savedJobs.map(job => <li key={job.id}><button onClick={job.open}><strong>{job.title}</strong></button><span>{job.company} · {job.location}</span><button onClick={job.save}>Remove saved job</button></li>)}</ul> : <div className="account-empty"><h3>Keep your options close</h3><p>Tap Save on a job to find it here later.</p><button className="button" onClick={goJobs}>Browse jobs →</button></div>}</section></div>
  </section>;
}
