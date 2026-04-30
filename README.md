# Portfolio · Data Scientist

Single-page portfolio (React + Bun) with theme toggle, animated chat hero, project modal, and reveal-on-scroll.

## Stack

- **Bun** (runtime, bundler, dev server)
- **React 19**
- **CSS variables** for the design system (light/dark themes)
- **IBM Plex** (Sans / Mono / Serif) via Google Fonts

## Develop

```bash
bun install
bun run dev          # http://localhost:3000 with HMR
```

## Build

```bash
bun run build        # outputs static site to dist/
```

The `dist/` folder is a fully static bundle (HTML + hashed JS/CSS/PNG) — deployable on any static host.

## Deploy

The build is platform-agnostic. Examples:

| Platform              | Build command       | Output dir |
| --------------------- | ------------------- | ---------- |
| **Vercel**            | `bun run build`     | `dist`     |
| **Netlify**           | `bun run build`     | `dist`     |
| **Cloudflare Pages**  | `bun run build`     | `dist`     |
| **GitHub Pages**      | via Actions → push `dist/` to `gh-pages` | — |

For Vercel / Netlify / Cloudflare Pages: connect the GitHub repo, set the build command to `bun run build` and the output directory to `dist`. Most platforms auto-detect Bun from `package.json` and `bun.lock`.

## Project layout

```
.
├── index.html      # entry — Bun bundles this
├── app.jsx         # all React components
├── styles.css      # design tokens + components
├── assets/         # static assets bundled into the build
└── dist/           # build output (gitignored)
```
