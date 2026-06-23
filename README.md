# AI Enthusiast Daily

Static landing page for AI Enthusiast Daily, focused on applied AI systems across workflow automation, document understanding, and computer vision.

Production domain target: `aienthusiastdaily.com`

## Site

The website lives in `site/` and is designed for static hosting.

Key pages:

- `site/index.html`: homepage
- `site/book-a-call/index.html`: project intake form
- `site/articles/index.html`: article showcase
- `site/use-cases/`: detailed use-case pages

## Local Preview

```bash
cd site
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Deploy

This repo is currently planned for static hosting on Netlify while the production
domain remains registered and DNS-managed in Wix.

Netlify settings:

- Base directory: `site`
- Build command: leave blank
- Publish directory: `.`

After deploy, add `aienthusiastdaily.com` and `www.aienthusiastdaily.com` in
Netlify and point the Wix DNS website records to Netlify. Preserve Google
Workspace/Mailbox MX and TXT records.

## Notes

- Forms submit to hosted Formspree endpoints.
- No private API keys or backend credentials are required for the static site.
- Article cards can link out to Medium or another external publishing platform.

## Packages

### `aienthusiastdaily-fixtures`

Reusable AI Enthusiast Daily fixture package for synthetic healthcare-like PDFs.
The package source and releases live in the separate public repository:
[aienthusiastdaily/aienthusiastdaily-fixtures](https://github.com/aienthusiastdaily/aienthusiastdaily-fixtures).

Install the tagged package from GitHub:

```bash
pip install "aienthusiastdaily-fixtures @ git+https://github.com/aienthusiastdaily/aienthusiastdaily-fixtures.git@v0.1.0"
```

Or add it to a `uv` project:

```bash
uv add "aienthusiastdaily-fixtures @ git+https://github.com/aienthusiastdaily/aienthusiastdaily-fixtures.git@v0.1.0"
```

List available templates:

```bash
aienthusiastdaily-fixtures templates
```

Generate fixtures:

```bash
aienthusiastdaily-fixtures generate \
  --template healthcare/prior_auth \
  --count 5 \
  --out fixtures \
  --seed 42 \
  --variants text-layer,scanned
```

Run without installing into the current environment:

```bash
uvx --from "aienthusiastdaily-fixtures @ git+https://github.com/aienthusiastdaily/aienthusiastdaily-fixtures.git@v0.1.0" \
  aienthusiastdaily-fixtures generate --template healthcare/prior_auth --count 1 --out fixtures --seed 42
```

Package design notes, safety rules, and public blank-form reference sources are
documented in
[AI Enthusiast Daily Fixture Templates](./docs/05-aienthusiastdaily-fixture-templates.md).
