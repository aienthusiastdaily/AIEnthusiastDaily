# Personal Landing Page

This repo now contains two implementations of the same landing-page idea:

- `site/`: the current Vercel-ready static landing page
- `personal_landing_page/`: the earlier Reflex app

If the goal is to launch a marketing page quickly, use `site/`.

## Vercel Site

The static site lives in `/Users/tungnguyen/personal_projects/personal_landing_page/site` and is set up for GitHub + Vercel deployment.

### Files

- `site/index.html`: homepage
- `site/book-a-call/index.html`: customer intake form page
- `site/articles/index.html`: Medium article hub
- `site/styles.css`: shared styling
- `site/script.js`: signup handling and simple reveal animations
- `site/vercel.json`: Vercel config

### Before Publishing

Replace these placeholders:

- `https://medium.com/@your-handle/...`

The site has two separate Formspree-ready forms:

- call requests on `/book-a-call/` with `source=book_a_call_page` and endpoint `https://formspree.io/f/xzdogvwp`
- waitlist signups with `source=landing_page_waitlist` and endpoint `https://formspree.io/f/xlgznlzy`

The forms also send `form_name`, `submitted_from`, `submitted_at`, and a `_gotcha`
honeypot field. No API key or secret is required in the repo.

This keeps `Book a call` distinct from `Join waitlist` while staying static. If you later prefer Calendly, replace the `/book-a-call/` links with your real scheduling URL.

### Local Preview

```bash
cd /Users/tungnguyen/personal_projects/personal_landing_page/site
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

### Deploy to Vercel

1. Push this repo to GitHub.
2. Import the repo into Vercel.
3. Set the Vercel project `Root Directory` to `site`.
4. Deploy.
5. Add a custom domain later if needed.

## CI/CD

GitHub Actions now validates the static site and project context on pull requests, pushes to `main`, and manual dispatch.
CodeQL and Dependabot are also configured for GitHub-side security checks.

Local equivalent:

```bash
python -m pip install --upgrade pip
python -m pip install -e ".[dev]"
ruff check personal_landing_page scripts tests
ruff format --check scripts tests
python scripts/validate_static_site.py --site-root site
python scripts/check_static_security.py --site-root site
python scripts/check_secrets.py --root .
.contexts/bin/validate_context
python -m compileall -q personal_landing_page scripts .contexts/tools
pytest
bandit -q -r personal_landing_page scripts
pip-audit --progress-spinner off --skip-editable .
```

Optional Vercel deployment is defined in `.github/workflows/vercel-deploy.yml`. Automatic deployment on `main` stays disabled until GitHub Actions secrets are configured and repository variable `ENABLE_VERCEL_DEPLOY=true` is set.

See `docs/CICD.md` for setup details.

## Public Export

This repo is the private/internal source of truth. A public repo should be
published through the allowlisted export workflow instead of mirroring this repo:

```bash
python scripts/public_export.py plan --json
python scripts/public_export.py sync ../tung-nguyen-ai --apply
python scripts/public_export.py verify ../tung-nguyen-ai
```

The exporter keeps the destination `.git/` directory intact and excludes private
agent context, internal plans/docs, env files, caches, local preview screenshots,
and scratch design HTML.

See `docs/04-public-export.md` for the full workflow.

## Plans

Actionable implementation plans live in `plans/`.

Start with:

- `plans/index.md`
- `plans/active/01-signup-capture.md`

Planning folder roles:

- `plans/active/`: current implementation plans
- `plans/backlog/`: paper plans and to-do plans that are not active yet
- `plans/notes/`: comments, observations, and loose planning notes
- `plans/templates/`: reusable plan and note templates

Human-facing content docs can use ordered numeric prefixes like `01-`, `02-`, and `03-` when reading order matters. Folder indexes stay plain `index.md`.

## Reflex App

The earlier Reflex version is still in the repo if you want a Python-backed version with SQLite:

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -e .
landing dev
```
