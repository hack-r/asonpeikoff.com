# AsonPeikoff.com

Personal homepage of Ason Peikoff, powered by Cloudflare Workers.

## Deployment

### Prerequisites
- Node.js 18+
- Wrangler CLI: `npm install -g wrangler`
- Cloudflare account

### Deploy

```bash
npm install
wrangler deploy
```

## Development

Serve locally:

```bash
wrangler dev
```

Then visit `http://localhost:8787`

## Structure

- `index.html` - Main homepage (single source of truth for markup)
- `style.css` - Styling, served at `/style.css`
- `src/index.js` - Cloudflare Worker entry point; imports the two files above as text, so there is no duplicated copy of the page
- `wrangler.toml` - Wrangler configuration (the `[[rules]]` block enables the text imports)