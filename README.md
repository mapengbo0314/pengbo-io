# pengbo-io.com

Landing page for **Pengbo IO LLC** — production readiness for founder-built products.

Astro 7 + Tailwind CSS v4, fully static, zero client-side JS. One component per section in `src/components/`. Design rationale in `design/BRIEF.md`, final copy in `design/COPY.md`, canonical tokens in `src/styles/global.css`. A living styleguide builds to `/design/*` and is mirrored to the "Pengbo IO" project on claude.ai/design.

## Commands

| Command           | Action                                    |
| :---------------- | :---------------------------------------- |
| `npm install`     | Install dependencies                      |
| `npm run dev`     | Dev server at `localhost:4321`            |
| `npm run build`   | Production build to `./dist/`             |
| `npm run preview` | Preview the production build locally      |

## Deploy

Pushing to `main` on GitHub deploys to GitHub Pages via `.github/workflows/deploy.yml`. One-time setup:

1. Create the repo and push:
   ```sh
   gh repo create pengbo-io --private --source . --push
   ```
2. In the repo: **Settings → Pages → Source: GitHub Actions**.

## Connect pengbo-io.com

1. **Settings → Pages → Custom domain**: enter `pengbo-io.com` (matches `public/CNAME`), enable **Enforce HTTPS** once the cert issues.
2. At your DNS provider, add:
   - Apex `pengbo-io.com` → four A records: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `www` → CNAME to `<your-github-username>.github.io`
3. Allow up to an hour for DNS + certificate provisioning.
