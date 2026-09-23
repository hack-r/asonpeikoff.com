# AsonPeikoff.com

Personal homepage of Ason Peikoff. Plain static site (no framework, no build step), served as static assets by Cloudflare Workers.

## Files

| File | Purpose |
|---|---|
| `public/index.html` | The page |
| `public/styles.css` | All styling; light/dark via `prefers-color-scheme` |
| `public/portrait.jpg` | Portrait (rail + Open Graph image) |
| `public/favicon.svg` | "AP" favicon |
| `wrangler.toml` | Serves `public/` as static assets; binds `asonpeikoff.com` and `www` as Custom Domains (DNS managed by Cloudflare) |

## Local preview

```bash
npx wrangler dev
# or: cd public && python3 -m http.server 8000
```

## Deploy

Cloudflare Workers Builds deploys on push. Manual deploy:

```bash
npx wrangler deploy
```

## Contact form

Uses [FormSubmit](https://formsubmit.co) (no account). Submit the form once, click the activation email, then replace the address in the form `action` with the random alias FormSubmit provides.
