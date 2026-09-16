# Asepsis Staffing

React + Vite staffing website, using the supplied Asepsis logo, colors, typography, and photography.

## Run locally

```sh
npm install
npm run dev
```

Requires Node.js 24 or newer (the backend uses built-in SQLite). Open http://127.0.0.1:5173. One command starts both the backend and frontend.

- `npm run build` creates the production site in `dist/`.
- `npm run preview` serves the static frontend only; use `npm run dev` for working accounts.
- `npm test` runs backend security/persistence checks and browser account-flow checks in installed Google Chrome. Tests start isolated servers and databases on ports 5191 and 5192.
- `npm run test:backend` and `npm run test:auth` run these checks separately.
- `tests/browser.mjs` preserves the earlier demo-only walkthrough and is not part of the current test command.

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

The header has three public navigation options plus clear Log in and Sign up buttons. Signed-in users have My dashboard and an Account menu with logout. Worker and employer accounts each see their own activity. The footer keeps only useful navigation and a short company line.

The homepage omits repeated statistics, duplicate CTAs, inactive legal links, investor material, and long specialist-service pitches. Detailed job filters and existing application/request flows remain available.

## Integration status

The Node backend provides sign-up, login, logout, session restoration, saved jobs, applications, and staffing requests. SQLite persists data in `server/data/asepsis.sqlite` (ignored by Git). Account dashboards show only the signed-in user's records; worker accounts submit applications and employer accounts submit staffing requests. Public job browsing remains available without login.

Passwords use salted scrypt hashes. Random session tokens are stored as hashes, expire after seven days, and travel in HttpOnly, SameSite cookies. Mutations validate JSON, request size, origin, account ownership, and account type. Authentication is rate-limited per IP in a single server process. All SQL uses bound parameters.

### Production

Run `npm run build`, then start `node server/index.js` with these environment variables:

- `NODE_ENV=production`
- `APP_ORIGIN=https://your-domain.example` (exact public origin)
- `PORT=5173` (or your hosting port)
- `HOST=0.0.0.0` when needed by your host
- `DATA_DIR=/persistent/path` for a persistent, backed-up database volume

The production server serves `dist/` and the API together. Place it behind HTTPS; production session cookies require HTTPS. Keep database storage private. This SQLite setup is intended for one application server. Use shared storage/database and rate limiting before running multiple instances.

### Remaining integrations

Jobs still come from the supplied sample catalog. Submissions are genuinely saved, but recruiter email notifications, staff review tools, password recovery, and email verification are not connected. Existing shift/payroll handoff previews remain sample content; the main account routes now use the real personal dashboard. The backend does not send emails or perform hiring, payments, or credential checks.

Google Fonts and Unsplash URLs are reused from the handoff and require an internet connection. Browser checks report external asset failures separately from application errors. The original design remains in `design/handoff/`.

The shared specialism list in `src/data/specialisms.js` includes International across homepages, job filters, application preferences, and employer requests. International matches remote and sponsored jobs without changing their underlying industry or location requirements.
