# Asepsis Staffing

React 18 + Vite implementation of the supplied Asepsis design handoff.

## Run

```sh
npm install
npm run dev
```

Open http://127.0.0.1:5173. For a production build, run `npm run build`; deploy the contents of `dist/`. `npm run preview` serves the production build.

## Pages

- `/`: current Site v3, with hash routes for home, jobs, job details, applications, worker dashboard, staffing requests, employer dashboard, and traction.
- `/platform.html`: supplied Platform v2 design.
- `/landing.html`: supplied campaign landing page; its CTAs open the application flow.
- `/brand.html`: supplied brand identity reference.

The original archive and extracted `Asepsis-Staffing-Design-Handoff/` files are preserved. The current Site v3 is the primary visual source; inline measurements, colors, typography, photography URLs, and SVG marks were transferred directly into React JSX.

## Structure

- `src/Site.jsx`: site state, sample data, filters, navigation, and form validation.
- `src/SiteView.jsx`: shared header, navigation, footer, and screen composition.
- `src/screens/`: individual site screen components.
- `src/Platform.jsx`, `src/Landing.jsx`, `src/Brand.jsx`: other handoff pages with separate view components.
- `src/responsive.css`: tablet/mobile layout and reduced-motion adjustments.
- `src/enhancements.js`: mobile navigation, accessible field labels, and footer destinations.
- `vite.config.js`: multipage production build.

## Verification

Build first, then run `npm test`. The browser checks start their own preview server on port 5180 and use installed Google Chrome. They check desktop/tablet/mobile overflow, console errors, search, saved jobs, application and request validation, browser history, and CTAs. Screenshots and results are written to `test-results/`.

## Integration boundaries

The handoff contains sample jobs, profiles, shifts, and employers, with no API, database, authentication, or submission service. These interactions run in memory and reset on reload. Submission confirmations identify the demo; no application or request is sent to a recruiter. Worker/employer navigation opens the supplied sample dashboards.

Fonts and photography use the exact Google Fonts and Unsplash URLs supplied in the handoff and require internet access. Legal documents were not supplied, so their footer labels are disabled rather than linked to invented policies. The dispatch number and business claims are preserved from the supplied design.
