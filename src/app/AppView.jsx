import React from 'react';
import AccountScreen, { AuthScreen } from '../pages/staffing/AccountScreen.jsx';
import Header from '../components/layout/Header.jsx';
import Footer from '../components/layout/Footer.jsx';
import HomePage from '../pages/home/HomePage.jsx';
import JobsScreen from '../pages/staffing/JobsScreen.jsx';
import DetailScreen from '../pages/staffing/DetailScreen.jsx';
import ApplyScreen from '../pages/staffing/ApplyScreen.jsx';
import WorkerScreen from '../pages/staffing/WorkerScreen.jsx';
import RequestScreen from '../pages/staffing/RequestScreen.jsx';
import EmployerScreen from '../pages/staffing/EmployerScreen.jsx';
import TractionScreen from '../pages/staffing/TractionScreen.jsx';
import '../styles/layout.css';

const screens = {
  jobs: JobsScreen,
  detail: DetailScreen,
  apply: ApplyScreen,
  worker: WorkerScreen,
  request: RequestScreen,
  employer: EmployerScreen,
  traction: TractionScreen,
};

export default function AppView(values) {
  const Screen = screens[values.screen];
  const protectedScreen = ['worker','employer','account','apply','request'].includes(values.screen);
  let content;
  if (protectedScreen && (!values.authReady || !values.user)) content = <p className="account-loading" role="status">Opening your account...</p>;
  else if (['login','signup'].includes(values.screen)) content = <AuthScreen key={values.screen} {...values} />;
  else if (['worker','employer','account'].includes(values.screen)) content = <AccountScreen {...values} />;
  else if (['detail','apply'].includes(values.screen) && !values.hasJob) content = <section className="container home-section"><h1>Job unavailable</h1><p>This opening is no longer available. Browse current openings to find a role.</p><button className="button button--primary" onClick={values.goJobs}>Browse jobs</button></section>;
  else content = Screen ? <div className="legacy-page"><Screen {...values} /></div> : <HomePage {...values} />;
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header {...values} />
      <main id="main-content" className="site-main" tabIndex="-1">
        {values.formError && <p className="form-error container" role="alert">{values.formError}</p>}
        {values.submitting && <p className="container" role="status">Saving your submission...</p>}
        {content}
      </main>
      <Footer {...values} />
    </div>
  );
}
