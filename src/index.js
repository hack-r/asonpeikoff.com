const html = await import('./index.html', { assert: { type: 'text' } }).then(m => m.default);
const css = await import('./style.css', { assert: { type: 'text' } }).then(m => m.default);

export default {
  async fetch(request) {
    const url = new URL(request.url);
    
    if (url.pathname === '/' || url.pathname === '/index.html') {
      return new Response(html, {
        headers: {
          'Content-Type': 'text/html; charset=UTF-8',
          'Cache-Control': 'public, max-age=3600',
          'X-Content-Type-Options': 'nosniff',
          'Referrer-Policy': 'strict-origin-when-cross-origin'
        }
      });
    }

    if (url.pathname === '/style.css') {
      return new Response(css, {
        headers: {
          'Content-Type': 'text/css; charset=UTF-8',
          'Cache-Control': 'public, max-age=3600',
          'X-Content-Type-Options': 'nosniff'
        }
      });
    }

    return new Response('Not Found', { status: 404 });
  }
};
