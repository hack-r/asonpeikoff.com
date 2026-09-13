export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const pathname = url.pathname;

    if (pathname === '/' || pathname === '/index.html') {
      return serveFile('index.html', 'text/html');
    }

    if (pathname === '/style.css') {
      return serveFile('style.css', 'text/css');
    }

    return new Response('Not Found', { status: 404 });
  }
};

async function serveFile(filePath, contentType) {
  try {
    const fileContent = await fetch(new URL(`../${filePath}`, import.meta.url));
    return new Response(fileContent.body, {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=3600'
      }
    });
  } catch (e) {
    return new Response('Error loading file', { status: 500 });
  }
}