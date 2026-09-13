import html from '../index.html';
import css from '../style.css';

const ASSETS = {
  '/': { body: html, type: 'text/html; charset=UTF-8' },
  '/index.html': { body: html, type: 'text/html; charset=UTF-8' },
  '/style.css': { body: css, type: 'text/css; charset=UTF-8' }
};

export default {
  async fetch(request) {
    const { pathname } = new URL(request.url);
    const asset = ASSETS[pathname];

    if (!asset) {
      return new Response('Not Found', { status: 404 });
    }

    return new Response(asset.body, {
      headers: {
        'Content-Type': asset.type,
        'Cache-Control': 'public, max-age=3600',
        'X-Content-Type-Options': 'nosniff',
        'Referrer-Policy': 'strict-origin-when-cross-origin'
      }
    });
  }
};
