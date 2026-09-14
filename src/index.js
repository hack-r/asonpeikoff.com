const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ason Peikoff</title>
    <meta name="description" content="Ason Peikoff — Philosophy, code, and fiction. Exploring the foundations of individual rights.">
    <meta name="keywords" content="Ason Peikoff, philosophy, capitalism, individualism, machine learning, fiction">
    <meta name="author" content="Ason Peikoff">
    <meta name="color-scheme" content="light dark">
    <link rel="canonical" href="https://asonpeikoff.com/">
    <meta property="og:title" content="Ason Peikoff">
    <meta property="og:description" content="Philosophy, code, and fiction. Exploring the foundations of individual rights.">
    <meta property="og:type" content="profile">
    <meta property="og:url" content="https://asonpeikoff.com/">
    <meta name="twitter:card" content="summary">
    <meta name="twitter:title" content="Ason Peikoff">
    <meta name="twitter:description" content="Philosophy, code, and fiction.">
    <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text x='50' y='75' font-size='90' font-weight='bold' text-anchor='middle' font-family='Georgia,serif' fill='%238a5a2b'>A</text></svg>">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500;600&family=Inter:wght@400;500&display=swap" rel="stylesheet">
    <style>
        /* AsonPeikoff.com — editorial minimal */

        :root {
            --paper: #faf8f4;
            --paper-alt: #f2eee6;
            --ink: #16130f;
            --ink-soft: #57504a;
            --rule: #ddd6c9;
            --accent: #8a5a2b;

            --serif: 'EB Garamond', 'Iowan Old Style', 'Palatino Linotype', Georgia, serif;
            --sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;

            --measure: 34rem;
            --gutter: clamp(1.5rem, 5vw, 4rem);
        }

        @media (prefers-color-scheme: dark) {
            :root {
                --paper: #14120f;
                --paper-alt: #1b1815;
                --ink: #f1ece3;
                --ink-soft: #a49b8e;
                --rule: #322c25;
                --accent: #c99055;
            }
        }

        *, *::before, *::after { box-sizing: border-box; }

        html { scroll-behavior: smooth; }

        body {
            margin: 0;
            background: var(--paper);
            color: var(--ink);
            font-family: var(--sans);
            font-size: 17px;
            line-height: 1.65;
            -webkit-font-smoothing: antialiased;
            text-rendering: optimizeLegibility;
        }

        a { color: inherit; }

        /* ---------- layout ---------- */

        .wrap {
            width: 100%;
            max-width: 62rem;
            margin: 0 auto;
            padding-inline: var(--gutter);
        }

        section {
            padding-block: clamp(3rem, 8vw, 5.5rem);
            scroll-margin-top: 1rem;
        }

        .rule { border-top: 1px solid var(--rule); }

        /* ---------- masthead ---------- */

        .masthead {
            border-bottom: 1px solid var(--rule);
            background: var(--paper);
        }

        .masthead .wrap {
            display: flex;
            flex-wrap: wrap;
            align-items: baseline;
            justify-content: space-between;
            gap: 0.75rem 2rem;
            padding-block: 1.5rem;
        }

        .wordmark {
            margin: 0;
            font-family: var(--serif);
            font-size: 1.15rem;
            font-weight: 600;
            letter-spacing: 0.16em;
            text-transform: uppercase;
        }

        .wordmark a { text-decoration: none; }

        .nav {
            display: flex;
            gap: clamp(1rem, 4vw, 2.25rem);
            margin: 0;
            padding: 0;
            list-style: none;
            font-size: 0.78rem;
            letter-spacing: 0.14em;
            text-transform: uppercase;
        }

        .nav a {
            text-decoration: none;
            color: var(--ink-soft);
            padding-bottom: 2px;
            border-bottom: 1px solid transparent;
            transition: color 0.2s ease, border-color 0.2s ease;
        }

        .nav a:hover,
        .nav a:focus-visible {
            color: var(--ink);
            border-bottom-color: var(--accent);
        }

        /* ---------- hero ---------- */

        .hero .wrap {
            display: grid;
            grid-template-columns: minmax(0, 1.35fr) minmax(0, 1fr);
            gap: clamp(2rem, 6vw, 4.5rem);
            align-items: center;
        }

        .hero h1 {
            margin: 0 0 1.5rem;
            font-family: var(--serif);
            font-weight: 400;
            font-size: clamp(2.75rem, 8vw, 4.75rem);
            line-height: 1.02;
            letter-spacing: -0.015em;
        }

        .lede {
            max-width: var(--measure);
            margin: 0;
            padding: 1.5rem;
            font-family: var(--serif);
            font-size: clamp(1.15rem, 2.4vw, 1.4rem);
            line-height: 1.5;
            color: var(--ink);
            font-style: italic;
            border-left: 3px solid var(--accent);
        }

        .attribution {
            max-width: var(--measure);
            margin: 1rem 0 0;
            font-family: var(--serif);
            font-size: 0.95rem;
            color: var(--ink-soft);
        }

        .portrait {
            width: min(100%, 20rem);
            margin: 0 auto;
            aspect-ratio: 1;
            overflow: hidden;
            border-radius: 50%;
            border: 1px solid var(--rule);
        }

        .portrait img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: contain;
            filter: grayscale(100%) contrast(1.05);
            transition: filter 0.6s ease;
        }

        .portrait img:hover { filter: grayscale(0%) contrast(1); }

        /* ---------- section headings ---------- */

        .section-title {
            margin: 0 0 2.5rem;
            font-size: 0.72rem;
            font-weight: 500;
            letter-spacing: 0.22em;
            text-transform: uppercase;
            color: var(--ink-soft);
        }

        /* ---------- marquee ---------- */

        .marquee-container {
            overflow: hidden;
            border-top: 1px solid var(--rule);
            border-bottom: 1px solid var(--rule);
            padding-block: 1.5rem;
            background: var(--paper);
        }

        .marquee {
            display: flex;
            gap: 2rem;
            animation: scroll 40s linear infinite;
            white-space: nowrap;
        }

        .marquee-item {
            flex-shrink: 0;
            font-family: var(--serif);
            font-size: 1.5rem;
            text-decoration: none;
            color: var(--ink);
            transition: color 0.2s ease;
        }

        .marquee-item:hover {
            color: var(--accent);
        }

        @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }

        @media (prefers-reduced-motion: reduce) {
            .marquee { animation: none; }
        }

        /* ---------- index list ---------- */

        .index {
            margin: 0;
            border-top: 1px solid var(--rule);
        }

        .entry {
            display: grid;
            grid-template-columns: 10rem minmax(0, 1fr);
            gap: 0.5rem 2rem;
            padding-block: 1.5rem;
            border-bottom: 1px solid var(--rule);
            text-decoration: none;
        }

        .entry:hover .entry-title,
        .entry:focus-visible .entry-title { color: var(--accent); }

        .entry-kind {
            font-size: 0.72rem;
            letter-spacing: 0.16em;
            text-transform: uppercase;
            color: var(--ink-soft);
            padding-top: 0.4rem;
        }

        .entry-title {
            font-family: var(--serif);
            font-size: 1.5rem;
            line-height: 1.25;
            transition: color 0.2s ease;
        }

        .entry-note {
            grid-column: 2;
            margin: 0.25rem 0 0;
            max-width: var(--measure);
            color: var(--ink-soft);
            font-size: 0.95rem;
        }

        /* ---------- about ---------- */

        .about .wrap { display: grid; gap: 1.25rem; }

        .about p {
            max-width: var(--measure);
            margin: 0;
            font-family: var(--serif);
            font-size: 1.25rem;
            line-height: 1.6;
        }

        /* ---------- footer ---------- */

        footer {
            border-top: 1px solid var(--rule);
            background: var(--paper-alt);
        }

        footer .wrap {
            padding-block: 2rem;
            font-size: 0.8rem;
            letter-spacing: 0.08em;
            color: var(--ink-soft);
        }

        footer p { margin: 0; }

        .git-ref {
            cursor: pointer;
            opacity: 0.5;
            transition: opacity 0.2s ease;
            margin-left: 0.5rem;
        }

        .git-ref:hover { opacity: 1; }

        /* ---------- responsive ---------- */

        @media (max-width: 760px) {
            .hero .wrap { grid-template-columns: 1fr; }
            .portrait { order: -1; width: min(100%, 14rem); margin-inline: 0; }
            .entry { grid-template-columns: 1fr; }
            .entry-note { grid-column: 1; }
            .entry-kind { padding-top: 0; }
        }

        @media (prefers-reduced-motion: reduce) {
            html { scroll-behavior: auto; }
            * { transition: none !important; }
        }
    </style>
</head>
<body data-git-commit="b7498f22bd053ef14807eed9602db61ae08f5732">
    <header class="masthead">
        <div class="wrap">
            <p class="wordmark"><a href="/">Ason Peikoff</a></p>
            <ul class="nav">
                <li><a href="#work">Work</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#elsewhere">Elsewhere</a></li>
            </ul>
        </div>
    </header>

    <main>
        <section class="hero">
            <div class="wrap">
                <div>
                    <h1>Ason<br>Peikoff</h1>
                    <blockquote class="lede">"A majority cannot vote away the rights of a minority."</blockquote>
                    <p class="attribution">— Ayn Rand</p>
                </div>
                <figure class="portrait">
                    <img src="https://github.com/user-attachments/assets/dd6abc66-0dcd-4f66-8f68-05b65bc55f12" alt="Portrait of Ason Peikoff" decoding="async">
                </figure>
            </div>
        </section>

        <section id="work" class="rule">
            <div class="wrap">
                <h2 class="section-title">Selected Work</h2>
                <div class="marquee-container">
                    <div class="marquee">
                        <a href="https://github.com/hack-r/parlerbot" class="marquee-item">parlerbot</a>
                        <a href="https://github.com/hack-r/pyserpZotero" class="marquee-item">pyserpZotero</a>
                        <a href="https://github.com/hack-r/bossbox" class="marquee-item">bossbox</a>
                        <a href="https://github.com/hack-r/ILANA1" class="marquee-item">ILANA1</a>
                        <a href="https://github.com/hack-r/GPT-Swarm" class="marquee-item">GPT_Swarm</a>
                        <a href="https://github.com/hack-r/coursera_shiny" class="marquee-item">coursera_shiny</a>
                        <a href="https://github.com/hack-r/DNS_spykiller" class="marquee-item">DNS_spykiller</a>
                        <a href="https://github.com/hack-r/LifeVantage" class="marquee-item">LifeVantage</a>
                        <a href="https://github.com/hack-r/MMEES" class="marquee-item">MMEES</a>
                        <a href="https://github.com/hack-r/alienDB-public" class="marquee-item">alienDB</a>
                        <a href="https://github.com/hack-r/ChatGPT_for_Jupyter" class="marquee-item">ChatGPT_Jupyter</a>
                        <a href="https://github.com/hack-r/kaggle_telstra" class="marquee-item">kaggle_telstra</a>
                        <a href="https://github.com/hack-r/Google-EmailScraper-Reloaded" class="marquee-item">email_scraper</a>
                        <a href="https://github.com/hack-r/gptswaRm" class="marquee-item">gptswaRm</a>
                        <a href="https://github.com/hack-r/RMapsDemo" class="marquee-item">RMapsDemo</a>
                        <a href="https://github.com/hack-r/simple_dist_matching_paradox" class="marquee-item">matching_paradox</a>
                        <a href="https://github.com/hack-r/60seconds_to_deeplearning" class="marquee-item">60s_DeepLearning</a>
                        <a href="https://github.com/hack-r/csv_to_dynamodb" class="marquee-item">csv_dynamodb</a>
                        <a href="https://github.com/hack-r/dartML" class="marquee-item">dartML</a>
                        <a href="https://github.com/hack-r/Harden_Ubuntu_VPS" class="marquee-item">Harden_Ubuntu</a>
                        <a href="https://github.com/hack-r/japi" class="marquee-item">japi</a>
                        <a href="https://github.com/hack-r/milleR" class="marquee-item">milleR</a>
                        <a href="https://github.com/hack-r/noisyCricket" class="marquee-item">noisyCricket</a>
                        <a href="https://github.com/hack-r/pirate" class="marquee-item">pirate</a>
                        <a href="https://github.com/hack-r/quick_dirty_response_model" class="marquee-item">response_model</a>
                        <a href="https://github.com/hack-r/realtime-hud" class="marquee-item">realtime_hud</a>
                        <a href="https://github.com/hack-r/stackoverflow_comment_sentiment_analysis" class="marquee-item">SO_sentiment</a>
                        <a href="https://github.com/hack-r/summary.likert.hackr" class="marquee-item">likert_summary</a>
                        <a href="https://github.com/hack-r/academicpages.github.io" class="marquee-item">academicpages</a>
                        <a href="https://github.com/hack-r/ArchiveHaunter" class="marquee-item">ArchiveHaunter</a>
                        <a href="https://github.com/hack-r/arxiv.py" class="marquee-item">arxiv.py</a>
                        <a href="https://github.com/hack-r/asonpeikoff.com" class="marquee-item">asonpeikoff.com</a>
                        <a href="https://github.com/hack-r/autoindex_wordpress" class="marquee-item">autoindex</a>
                        <a href="https://github.com/hack-r/autoLinkedIn" class="marquee-item">autoLinkedIn</a>
                        <a href="https://github.com/hack-r/auto_git" class="marquee-item">auto_git</a>
                        <a href="https://github.com/hack-r/auto_install_cafe" class="marquee-item">auto_install_cafe</a>
                        <a href="https://github.com/hack-r/awesome-chatgpt-prompts" class="marquee-item">chatgpt_prompts</a>
                        <a href="https://github.com/hack-r/BetterDoS" class="marquee-item">BetterDoS</a>
                        <a href="https://github.com/hack-r/blsAPI" class="marquee-item">blsAPI</a>
                        <a href="https://github.com/hack-r/1337_Streamer_for_StackApps" class="marquee-item">1337_Streamer</a>
                        <a href="https://github.com/hack-r/parlerbot" class="marquee-item">parlerbot</a>
                        <a href="https://github.com/hack-r/pyserpZotero" class="marquee-item">pyserpZotero</a>
                        <a href="https://github.com/hack-r/bossbox" class="marquee-item">bossbox</a>
                        <a href="https://github.com/hack-r/ILANA1" class="marquee-item">ILANA1</a>
                        <a href="https://github.com/hack-r/GPT-Swarm" class="marquee-item">GPT_Swarm</a>
                        <a href="https://github.com/hack-r/coursera_shiny" class="marquee-item">coursera_shiny</a>
                    </div>
                </div>
            </div>
        </section>

        <section id="about" class="about rule">
            <div class="wrap">
                <h2 class="section-title">About</h2>
                <p>Philosophy, code, and fiction. Exploring the foundations of individual rights and their expression through technology and narrative.</p>
                <p>Author of <em>Postsocialist Capitalism: The Rise of Enlightened Individualism</em>.</p>
            </div>
        </section>

        <section id="elsewhere" class="rule">
            <div class="wrap">
                <h2 class="section-title">Elsewhere</h2>
                <div class="index">
                    <a class="entry" href="https://www.zotero.org/hackr/items">
                        <span class="entry-kind">Library</span>
                        <span class="entry-title">Zotero</span>
                    </a>
                    <a class="entry" href="https://whoneeds.it">
                        <span class="entry-kind">Objectivism</span>
                        <span class="entry-title">Who Needs It</span>
                    </a>
                    <a class="entry" href="https://github.com/hack-r">
                        <span class="entry-kind">Code</span>
                        <span class="entry-title">GitHub</span>
                    </a>
                    <a class="entry" href="https://linkedin.com/in/apeikoff">
                        <span class="entry-kind">Professional</span>
                        <span class="entry-title">LinkedIn</span>
                    </a>
                </div>
            </div>
        </section>
    </main>

    <footer>
        <div class="wrap">
            <p>&copy; 2026 Ason Peikoff <span class="git-ref" title="View commit on GitHub">↓</span></p>
        </div>
    </footer>

    <script>
        document.querySelector('.git-ref').addEventListener('click', function() {
            const commit = document.body.dataset.gitCommit;
            window.open(\`https://github.com/hack-r/asonpeikoff.com/commit/\${commit}\`, '_blank');
        });
    </script>
</body>
</html>`;

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

    return new Response('Not Found', { status: 404 });
  }
};
