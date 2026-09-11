import React from 'react';
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
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header {...values} />
      <main id="main-content" className="site-main" tabIndex="-1">
        {values.formError && <p className="form-error container" role="alert">{values.formError}</p>}
        {Screen ? <div className="legacy-page"><Screen {...values} /></div> : <HomePage {...values} />}
      </main>
      <Footer {...values} />
    </div>
  );
}
