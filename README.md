# Tung Nguyen AI

Static landing page for Tung Nguyen's applied AI systems work across workflow automation, document understanding, and computer vision.

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

This repo can be deployed as a static site on Vercel.

Use `site/` as the Vercel project root.

## Notes

- Forms submit to hosted Formspree endpoints.
- No private API keys or backend credentials are required for the static site.
- Article cards can link out to Medium or another external publishing platform.
