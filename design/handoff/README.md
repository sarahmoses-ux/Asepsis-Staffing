# Asepsis Staffing — Design Handoff

A staffing platform design: marketing site, product screens, campaign landing page
and brand identity system. Everything opens in a browser as-is — no build step,
no package install, no local server.

**Start here:** open `index.html`.

## Contents

```
Asepsis-Staffing-Design-Handoff/
├── index.html                          Overview and launcher for all files
├── README.md                           This file
├── design/
│   ├── Asepsis Site v3.dc.html         Homepage (current)
│   ├── Asepsis Platform v2.dc.html     Six product screens (current)
│   ├── Asepsis Landing.dc.html         Campaign landing page
│   ├── Asepsis Brand Identity.dc.html  Logo, palette, type system
│   ├── support.js                       Runtime required by the files above
│   └── archive/
│       ├── Asepsis Platform v1.dc.html Superseded product screens
│       └── support.js
├── assets/
│   └── EXTERNAL-ASSETS.md              Font and photography URLs + licensing
└── reference/
    └── asepsis-staffing-home.html      Original standalone homepage (source material)
```

## How to open

Double-click any `.html` file. Keep `support.js` next to the `.dc.html` files —
each one loads it with a relative path, so moving files between folders will break them.

## Design system summary

**Palette** — oxblood `#3A1D22` for marketing surfaces, slate for product UI,
warm sand `#C9A98A` as accent, warm paper `#F5F4F2` as ground.

**Type** — Fraunces for display, with the SOFT and WONK variable axes set to 0 for
sharper terminals. Instrument Sans for all UI and body copy.

**Logo** — the stacked lockup (wordmark over the STAFFING descriptor) is primary;
the horizontal variant is secondary. Both are in the brand identity file as live markup.

**Photography** — every image carries an oxblood-tinted bottom scrim so the mixed
sources read as one library.

All text/background pairings in these files pass WCAG AA; secondary text measures 5.6:1.

## Dependencies

Two CDN dependencies, both requiring an internet connection at open time:

- **Google Fonts** — Fraunces, Instrument Sans (and Inter in the archived/reference files)
- **Unsplash** — photography placeholders

Full URL inventory in `assets/EXTERNAL-ASSETS.md`. Photography is placeholder
material under the Unsplash License; swap in licensed brand photography before launch.
