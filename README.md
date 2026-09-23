# AsonPeikoff.com

Personal homepage of Ason Peikoff. Plain static site (no framework, no build step), hosted on GitHub Pages.

## Files

| File | Purpose |
|---|---|
| `index.html` | The page |
| `styles.css` | All styling; light/dark via `prefers-color-scheme` |
| `portrait.jpg` | Portrait (rail + Open Graph image) |
| `favicon.svg` | "AP" favicon |
| `CNAME` | Custom domain for GitHub Pages |

## Local preview

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Contact form

Uses [FormSubmit](https://formsubmit.co) (no account). In `index.html`, replace `YOUR_EMAIL` in the form `action`, submit the form once, click the activation email, then replace the address with the random alias FormSubmit provides.

## Deploy (GitHub Pages)

1. Settings → Pages → deploy from the `main` branch, root folder.
2. DNS: A records for `asonpeikoff.com` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`; `www` CNAME → `hack-r.github.io`.
3. Enable "Enforce HTTPS" once the certificate is issued.
