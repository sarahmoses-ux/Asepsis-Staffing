# Asepsis Staffing

React + Vite staffing website, using the supplied Asepsis logo, colors, typography, and photography.

## Run locally

```sh
npm install
npm run dev
```

Open http://127.0.0.1:5173.

- `npm run build` creates the production site in `dist/`.
- `npm run preview` serves that production build.
- `npm test` checks the production build in Google Chrome. Build first; the test starts its own server on port 5180.

## Folder guide

```text
src/
  app/                  Application state and screen routing
  components/
    layout/             Shared header and footer
    ui/                 Reusable brand mark
  data/                 Shared specialisms, sample jobs, and dashboard data
  pages/
    home/               Five focused homepage sections
    staffing/           Search, applications, requests, and dashboards
    reference/          Additional handoff previews
  styles/               Shared styles and responsive layouts
  main.jsx              React entry point
public/                 Static assets
tests/                 Browser checks
design/                Original handoff and ZIP archive
```

The four root HTML files are Vite entry points. `index.html` is the public website; `platform.html`, `landing.html`, and `brand.html` retain the additional handoff previews without adding them to the public navigation. Generated builds, dependency caches, and browser reports are ignored by Git. Reports and screenshots are in `.artifacts/browser/`.

## Website walkthrough

1. **Find work:** a short introduction, job search, and one link for employers.
2. **Our practices:** five clear cards for healthcare, skilled trades, technical trades, professional roles, and International opportunities.
3. **How it works:** apply, get verified, and start working.
4. **For employers:** a concise overview of temporary staffing, temp-to-hire, and direct placement, with one request button.
5. **Locations:** opening hours and a phone link; branch names expand when needed.

The header has three public navigation options. Worker/employer dashboards and saved jobs are grouped under Account. The footer keeps only useful navigation and a short company line.

The homepage omits repeated statistics, duplicate CTAs, inactive legal links, investor material, and long specialist-service pitches. Detailed job filters and existing application/request flows remain available.

## Integration status

The handoff supplied sample content but no backend, authentication, or submission API. Forms validate and complete locally; confirmations identify the demo, and no request is sent to a recruiter. Data resets on reload.

Google Fonts and Unsplash URLs are reused from the handoff and require an internet connection. Browser checks report external asset failures separately from application errors. The original design remains in `design/handoff/`.

The shared specialism list in `src/data/specialisms.js` includes International across homepages, job filters, application preferences, and employer requests. International matches remote and sponsored jobs without changing their underlying industry or location requirements.
