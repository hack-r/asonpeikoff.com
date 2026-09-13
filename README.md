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

- `index.html` - Main homepage
- `style.css` - Styling
- `src/index.js` - Cloudflare Worker entry point
- `wrangler.toml` - Wrangler configuration