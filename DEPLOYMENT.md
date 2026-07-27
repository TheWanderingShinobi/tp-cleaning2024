# Deployment

This site deploys via **Cloudflare Pages**.

## Pipeline

- **Provider:** Cloudflare Pages
- **Project name:** `tp-cleaning2024`
- **Source:** Git-integrated with this repository
- **Production branch:** `main`
- **Automatic deployments:** **enabled** — every push to `main` triggers a
  production build and deploy. Non-`main` branches produce Cloudflare *preview*
  deployments, not production.

## Build configuration (Cloudflare Pages dashboard)

| Setting             | Value             |
| ------------------- | ----------------- |
| Build command       | `npm run build`   |
| Build output dir    | `/dist`           |
| Root directory      | `/`               |
| Build system        | v2                |

`npm run build` runs `astro check && astro build` (see `package.json`) and emits
the static site to `/dist`, which Cloudflare publishes.

## Node toolchain — IMPORTANT

The Node version used by the build is controlled by the **`NODE_VERSION`
environment variable set in the Cloudflare Pages dashboard**, configured
**per-environment** (Production and Preview are separate).

> **`NODE_VERSION` in the dashboard takes precedence over the repo's `.nvmrc`.**

The `.nvmrc` (`22`) and `engines.node` (`>=22`) in this repo govern **local**
development and document intent, but they do **not** override the dashboard
value at build time on Cloudflare.

### Consequence for the Astro 7 upgrade

Astro 7 requires **Node >= 22.12.0**. Before merging the Astro 7 upgrade to
`main`, confirm `NODE_VERSION` in the Pages dashboard is set to **22.12 or
higher** for **both** the Production and Preview environments. If the dashboard
value is left below 22.12, the Cloudflare build will fail regardless of what
`.nvmrc` says.

## Deploy safety notes

- Because deploys are triggered by pushes to `main`, work on a feature branch
  (e.g. `maintenance-2026-07`) does not deploy to production. Merging to `main`
  is the deploy action.
- There is no `netlify.toml`, `vercel.json`, or CI workflow in this repo — the
  entire build/deploy configuration lives in the Cloudflare Pages dashboard.
