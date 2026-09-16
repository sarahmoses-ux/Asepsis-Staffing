# Asepsis Staffing

React + Vite staffing website, using the supplied Asepsis logo, colors, typography, and photography.

## Run locally

```sh
npm install
npm run dev
```

Requires Node.js 24 or newer and a MongoDB connection. Set `MONGODB_URI` in your terminal environment before starting. Open http://127.0.0.1:5173. One command starts both the backend and frontend.

- `npm run build` creates the production site in `dist/`.
- `npm run preview` serves the static frontend only; use `npm run dev` for working accounts.
- `npm test` runs backend security/persistence checks and browser account-flow checks in installed Google Chrome. Tests start isolated servers on ports 5191 and 5192 and real temporary MongoDB processes. The first test run downloads a MongoDB binary into `.artifacts/mongodb-binaries`; later runs reuse it.
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

The Node backend provides sign-up, login, logout, session restoration, saved jobs, applications, and staffing requests. MongoDB persists data in the database selected by `MONGODB_DB` (default: `asepsis`). No local database folder or Render disk is used. Account dashboards show only the signed-in user's records; worker accounts submit applications and employer accounts submit staffing requests. Public job browsing remains available without login.

Passwords use salted scrypt hashes. Random session tokens are stored as hashes, expire after seven days, and travel in HttpOnly, SameSite cookies. Mutations validate JSON, request size, origin, account ownership, and account type. Authentication is rate-limited per IP in a single server process. MongoDB queries use server-controlled filters and validated inputs. A unique email index prevents duplicate accounts, and a TTL index removes expired sessions; every session lookup also checks expiration.

### Production

Run `npm run build`, then start `node server/index.js` with these environment variables:

- `NODE_ENV=production`
- `APP_ORIGIN=https://your-domain.example` (exact public origin)
- `PORT=5173` (or your hosting port)
- `HOST=0.0.0.0` when needed by your host
- `MONGODB_URI` set to the complete Atlas connection string (including your database user credentials)
- `MONGODB_DB=asepsis`

The production server serves `dist/` and the API together. Place it behind HTTPS; production session cookies require HTTPS. MongoDB Atlas stores the data independently of Render restarts and deployments. Configure shared rate limiting before running multiple application instances.

### Remaining integrations

Jobs still come from the supplied sample catalog. Submissions are genuinely saved, but recruiter email notifications, staff review tools, password recovery, and email verification are not connected. Existing shift/payroll handoff previews remain sample content; the main account routes now use the real personal dashboard. The backend does not send emails or perform hiring, payments, or credential checks.

Google Fonts and Unsplash URLs are reused from the handoff and require an internet connection. Browser checks report external asset failures separately from application errors. The original design remains in `design/handoff/`.

The shared specialism list in `src/data/specialisms.js` includes International across homepages, job filters, application preferences, and employer requests. International matches remote and sponsored jobs without changing their underlying industry or location requirements.

### Render build settings

Leave Root Directory blank. Use `npm install && npm run build` as the Build Command and `npm run start` as the Start Command. Vite is a regular dependency so it remains available when `NODE_ENV=production` causes npm to omit development dependencies. The lockfile preserves the dependency classification for clean installs.

Import the local `.env` into Render's environment settings; it is intentionally excluded from Git. For the separate Vercel frontend, `APP_ORIGIN` is `https://asepsis-staffing.vercel.app`. The root `vercel.json` forwards `/api/*` to `https://asepsis-staffing.onrender.com/api/*`, with caching disabled for account responses.


### MongoDB Atlas setup

1. In Atlas, open your cluster and choose **Connect > Drivers > Node.js**.
2. Create a database user with read/write access to the `asepsis` database. Use that database user's password in the connection string, not your Atlas account password. Encode special characters in credentials as directed by Atlas.
3. In Atlas **Network Access**, allow the outbound IP ranges shown for your Render service.
4. In Render **Environment**, set `MONGODB_URI` to the completed connection string and `MONGODB_DB` to `asepsis`. Import `.env.example` for the other settings. The URI is a backend secret; do not put it in Vercel frontend variables or commit it.
5. Remove the old `DATA_DIR` variable. A Render persistent disk is no longer required.
6. Deploy with Build Command `npm install && npm run build` and Start Command `npm run start`.

The server connects to MongoDB and creates indexes before accepting requests. It exits with a configuration message if the URI is missing or the cluster cannot be reached. Existing SQLite files are not automatically migrated; preserve them if they contain accounts or submissions you need.

For this split hosting setup, keep `APP_ORIGIN=https://asepsis-staffing.vercel.app`. Vercel forwards API requests to `https://asepsis-staffing.onrender.com` through `vercel.json`; deploy the latest commit on Vercel to activate it. This repository does not provision Atlas or configure your hosting accounts automatically.
