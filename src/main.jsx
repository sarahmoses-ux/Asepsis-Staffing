import React, { Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import App from './app/App.jsx';
import './styles/base.css';
import './styles/legacy-responsive.css';

const screens = {
  'platform.html': lazy(() => import('./pages/reference/Platform.jsx')),
  'landing.html': lazy(() => import('./pages/reference/Landing.jsx')),
  'brand.html': lazy(() => import('./pages/reference/Brand.jsx')),
};
const Page = screens[location.pathname.split('/').pop()] || App;
createRoot(document.getElementById('root')).render(
  <Suspense fallback={<p role="status">Loading Asepsis Staffing…</p>}>
    <Page />
  </Suspense>
);
if (location.pathname.endsWith('platform.html')) import('./pages/reference/enhancements.js');
