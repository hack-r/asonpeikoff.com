const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ason Peikoff</title>
    <style>
        :root {
            --primary: #000;
            --secondary: #fff;
            --accent: #333;
            --border: #ddd;
            --font-serif: 'Georgia', serif;
            --font-sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        html, body {
            height: 100%;
        }

        body {
            font-family: var(--font-sans);
            color: var(--primary);
            background: var(--secondary);
            line-height: 1.6;
        }

        header {
            border-bottom: 1px solid var(--border);
            position: sticky;
            top: 0;
            background: var(--secondary);
            z-index: 100;
        }

        .navbar {
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem;
        }

        .nav-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo {
            font-size: 1.5rem;
            font-weight: 700;
            letter-spacing: -0.5px;
        }

        .nav-menu {
            display: flex;
            list-style: none;
            gap: 2rem;
        }

        .nav-menu a {
            text-decoration: none;
            color: var(--primary);
            font-size: 0.95rem;
            transition: opacity 0.2s;
        }

        .nav-menu a:hover {
            opacity: 0.6;
        }

        main {
            max-width: 1200px;
            margin: 0 auto;
        }

        .hero {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            align-items: center;
            padding: 4rem 2rem;
            border-bottom: 1px solid var(--border);
        }

        .hero-content h2 {
            font-size: 2.5rem;
            font-weight: 400;
            line-height: 1.2;
            margin-bottom: 1rem;
            font-family: var(--font-serif);
        }

        .hero-content p {
            font-size: 1.25rem;
            color: var(--accent);
        }

        .hero-image {
            text-align: center;
        }

        .hero-image img {
            max-width: 100%;
            height: auto;
            border-radius: 4px;
        }

        .work {
            padding: 4rem 2rem;
            border-bottom: 1px solid var(--border);
        }

        .work h3,
        .about h3 {
            font-size: 1.75rem;
            font-weight: 400;
            margin-bottom: 2rem;
            font-family: var(--font-serif);
        }

        .work-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
        }

        .work-item {
            padding: 1.5rem;
            border: 1px solid var(--border);
            border-radius: 4px;
        }

        .work-item h4 {
            font-size: 1.1rem;
            margin-bottom: 0.5rem;
            font-weight: 600;
        }

        .work-item p {
            color: var(--accent);
            font-size: 0.95rem;
        }

        .about {
            padding: 4rem 2rem;
            border-bottom: 1px solid var(--border);
        }

        .about p {
            max-width: 700px;
            font-size: 1.05rem;
            line-height: 1.8;
        }

        footer {
            background: var(--accent);
            color: var(--secondary);
            padding: 3rem 2rem;
        }

        .footer-content {
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 2rem;
            margin-bottom: 2rem;
        }

        .footer-section h4 {
            font-size: 1rem;
            margin-bottom: 1rem;
            font-weight: 600;
        }

        .footer-section ul {
            list-style: none;
        }

        .footer-section a {
            color: var(--secondary);
            text-decoration: none;
            font-size: 0.9rem;
            transition: opacity 0.2s;
        }

        .footer-section a:hover {
            opacity: 0.7;
        }

        .footer-section li {
            margin-bottom: 0.5rem;
        }

        .footer-bottom {
            padding-top: 2rem;
            border-top: 1px solid rgba(255, 255, 255, 0.2);
            text-align: center;
            font-size: 0.85rem;
            opacity: 0.8;
        }

        @media (max-width: 768px) {
            .hero {
                grid-template-columns: 1fr;
                padding: 2rem;
                gap: 2rem;
            }

            .hero-content h2 {
                font-size: 1.75rem;
            }

            .nav-menu {
                gap: 1rem;
                font-size: 0.85rem;
            }

            .work,
            .about {
                padding: 2rem;
            }
        }
    </style>
</head>
<body>
    <header>
        <nav class="navbar">
            <div class="nav-container">
                <h1 class="logo">Ason Peikoff</h1>
                <ul class="nav-menu">
                    <li><a href="#work">Work</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    </header>

    <main>
        <section class="hero">
            <div class="hero-content">
                <h2>Applied Computational Scientist</h2>
                <p>Philosophy. Society. Fiction.</p>
            </div>
            <div class="hero-image">
                <img src="https://github.com/user-attachments/assets/dd6abc66-0dcd-4f66-8f68-05b65bc55f12" alt="Portrait">
            </div>
        </section>

        <section id="work" class="work">
            <h3>Work</h3>
            <div class="work-grid">
                <div class="work-item">
                    <h4>Computational Science</h4>
                    <p>Applied research and methodology development</p>
                </div>
                <div class="work-item">
                    <h4>Philosophy & Society</h4>
                    <p>Essays on ideas that shape culture and civilization</p>
                </div>
                <div class="work-item">
                    <h4>Fiction</h4>
                    <p>Narrative exploration of complex themes</p>
                </div>
            </div>
        </section>

        <section id="about" class="about">
            <h3>About</h3>
            <p>Ason Peikoff is an applied computational scientist exploring the intersection of rigorous methodology, philosophical inquiry, and narrative expression. His work spans computational systems, culture, and the written word.</p>
        </section>
    </main>

    <footer>
        <div class="footer-content">
            <div class="footer-section">
                <h4>Connect</h4>
                <ul>
                    <li><a href="https://github.com/hack-r">GitHub</a></li>
                    <li><a href="https://twitter.com">Twitter</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h4>More</h4>
                <ul>
                    <li><a href="#essays">Essays</a></li>
                    <li><a href="#projects">Projects</a></li>
                </ul>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2026 Ason Peikoff</p>
            </div>
        </div>
    </footer>
</body>
</html>`;

export default {
  async fetch(request) {
    const url = new URL(request.url);
    
    if (url.pathname === '/' || url.pathname === '/index.html') {
      return new Response(html, {
        headers: {
          'Content-Type': 'text/html; charset=UTF-8',
          'Cache-Control': 'public, max-age=3600'
        }
      });
    }

    return new Response('Not Found', { status: 404 });
  }
};
