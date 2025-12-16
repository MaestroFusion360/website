<script lang="ts">
	import { onMount } from 'svelte';
	import { initPage } from '../script';

	const personSchema = {
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: 'MaestroFusion360',
		url: 'https://maestrofusion360.github.io/website/',
		sameAs: ['https://www.youtube.com/@MaestroFusion360', 'https://t.me/MaestroFusion360'],
		jobTitle: 'CNC Software Engineer',
		description: 'Fusion 360 Developer specializing in G-code automation.',
		image: 'https://maestrofusion360.github.io/website/assets/icon-192.png'
	};

	const projectsSchema = {
		'@context': 'https://schema.org',
		'@type': 'ItemList',
		name: 'MaestroFusion360 Projects',
		itemListElement: [
			{ '@type': 'ListItem', position: 1, name: 'svelte-comp', url: 'https://github.com/MaestroFusion360/svelte-comp', description: 'Svelte 5 UI components library with TailwindCSS styling.' },
			{ '@type': 'ListItem', position: 2, name: 'Planner', url: 'https://github.com/MaestroFusion360/task_planning', description: 'Desktop planner with Gantt chart for manufacturing scheduling.' },
			{ '@type': 'ListItem', position: 3, name: 'Easy G-Code Plot', url: 'https://github.com/MaestroFusion360/easy_gcode_plot', description: 'G-code editor and 3D toolpath visualizer.' },
			{ '@type': 'ListItem', position: 4, name: 'SmartPost', url: 'https://github.com/MaestroFusion360/SmartPost', description: 'Fusion 360 postprocessor helper for faster multi-tool outputs.' },
			{ '@type': 'ListItem', position: 5, name: '@postprocessors_bot', url: 'https://t.me/postprocessors_bot', description: 'Telegram bot for sharing CAM postprocessors.' },
			{ '@type': 'ListItem', position: 6, name: 'MoveOp', url: 'https://github.com/MaestroFusion360/MoveOp', description: 'Fusion 360 add-in to reorder imported CAM operations.' }
		]
	};

	onMount(() => {
		initPage();
	});
</script>

<svelte:head>

    <!-- Basic Tags-->
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta
      name="google-site-verification"
      content="NvQSU1__FPJtmLW9aYweYggiV0xnDR4tYLht6rhOFHg"
    />

    <!-- Indexation -->
    <meta name="robots" content="index, follow, max-image-preview:large" />
    <meta name="googlebot" content="index, follow" />
    <link rel="canonical" href="https://maestrofusion360.github.io/website/" />

    <!-- Main SEO Tags-->
    <title>MaestroFusion360</title>
    <meta
      name="description"
      content="CNC Software Engineer and Fusion 360 Developer specializing in G-code automation and CNC programming optimization. Check out my projects and tools."
    />
    <meta
      name="keywords"
      content="Fusion 360, CNC, G-code, Python, JavaScript, CAD, CAM, automation"
    />

    <!-- OpenGraph -->
    <meta
      property="og:title"
      content="MaestroFusion360 | CNC & Fusion 360 Developer"
    />
    <meta
      property="og:description"
      content="CNC Software Engineer and Fusion 360 Developer specializing in automation."
    />
    <meta property="og:type" content="website" />
    <meta
      property="og:url"
      content="https://maestrofusion360.github.io/website/"
    />
    <meta
      property="og:image"
      content="https://maestrofusion360.github.io/website/assets/icon-192.png"
    />
    <meta property="og:locale" content="en_US" />

    <!-- Favicon & PWA -->
    <link rel="icon" href="favicon.ico" type="image/x-icon" />
    <link rel="manifest" href="manifest.webmanifest" />
    <link rel="apple-touch-icon" href="assets/icon-192.png" />

    <!-- Styles -->\n<meta name="theme-color" content="#ffffff" />

    <!-- Schema.org Marking -->\n\n
	<script type="application/ld+json">{JSON.stringify(personSchema)}</script>
	<script type="application/ld+json">{JSON.stringify(projectsSchema)}</script>
</svelte:head>


    <button
      id="theme-toggle"
      aria-label="Toggle dark theme"
      title="Toggle dark theme"
    >
      <svg
        class="theme-icon theme-icon-sun"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4" fill="currentColor" />
        <line x1="12" y1="1" x2="12" y2="4" />
        <line x1="12" y1="20" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="6.34" y2="6.34" />
        <line x1="17.66" y1="17.66" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="4" y2="12" />
        <line x1="20" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="6.34" y2="17.66" />
        <line x1="17.66" y1="6.34" x2="19.78" y2="4.22" />
      </svg>
      <svg
        class="theme-icon theme-icon-moon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        aria-hidden="true"
      >
        <path
          d="M12 2
                   A9 9 0 1 0 21 12
                   A7.5 7.5 0 1 1 12 2
                   Z"
          fill="currentColor"
        />
      </svg>
    </button>
    <header>
      <h1 data-lang="title">Hi there, I'm MaestroFusion360</h1>
      <nav class="navbar">
        <a href="#about" data-lang="about-title">About</a>
        <a href="#technologies" data-lang="tech-title">Technologies</a>
        <a href="#projects" data-lang="projects-title">Projects</a>
        <a href="#upcoming" data-lang="upcoming-title">Future Projects</a>
        <a href="#contact" data-lang="contact-title">Contact</a>
      </nav>

      <div class="social-links">
        <a href="https://www.youtube.com/@MaestroFusion360?sub_confirmation=1">
          <img
            src="https://img.shields.io/badge/Subscribe-YouTube-red?logo=youtube"
            alt="YouTube"
          />
        </a>
        <a href="https://t.me/+v0HwgVBIg8AyNTcy">
          <img
            src="https://img.shields.io/badge/Join-Telegram-blue?logo=telegram"
            alt="Telegram"
          />
        </a>
      </div>
    </header>

    <main>
      <section id="about">
        <h2 data-lang="about-title">About Me</h2>
        <div class="content-block">
          <p data-lang="about-desc">
            CNC Software Engineer and
            <strong>Fusion 360 Developer</strong> passionate about automating
            G-code generation and optimizing CNC programming.
          </p>
        </div>
      </section>

      <section id="technologies">
        <h2 data-lang="tech-title">Technologies</h2>
        <div class="content-block">
          <h3 data-lang="tech-stack">Main Stack:</h3>
          <ul class="badges-list">
            <li>
              <img
                src="assets/fusion_icon.svg"
                width="40"
                height="40"
                alt="Fusion 360 API"
                title="Fusion 360 API"
                loading="lazy"
              />
            </li>
            <li>
              <img
                src="assets/python_icon.svg"
                width="40"
                height="40"
                alt="Python"
                title="Python"
                loading="lazy"
              />
            </li>
            <li>
              <img
                src="assets/svelte_icon.svg"
                width="40"
                height="40"
                alt="Svelte5"
                title="Svelte5"
                loading="lazy"
              />
            </li>
            <li>
              <img
                src="assets/c_sharp_icon.svg"
                width="40"
                height="40"
                alt="C#"
                title="C#"
                loading="lazy"
              />
            </li>
            <li>
              <img
                src="assets/nx_icon.png"
                width="40"
                height="40"
                alt="Siemens NX"
                title="Siemens NX"
                loading="lazy"
              />
            </li>

            <li>
              <img
                src="assets/html_icon.svg"
                width="40"
                height="40"
                alt="HTML5"
                title="HTML5"
                loading="lazy"
              />
            </li>
            <li>
              <img
                src="assets/css_icon.svg"
                width="40"
                height="40"
                alt="CSS3"
                title="CSS3"
                loading="lazy"
              />
            </li>
            <li>
              <img
                src="assets/tailwind_icon.svg"
                width="40"
                height="40"
                alt="Tailwind4"
                title="Tailwind4"
                loading="lazy"
              />
            </li>
            <li>
              <img
                src="assets/javascript_icon.svg"
                width="40"
                height="40"
                alt="JavaScript"
                title="JavaScript"
                loading="lazy"
              />
            </li>
            <li>
              <img
                src="assets/typescript_icon.svg"
                width="40"
                height="40"
                alt="TypeScript"
                title="TypeScript"
                loading="lazy"
              />
            </li>
            <li>
              <img
                src="assets/telegram_icon.svg"
                width="40"
                height="40"
                alt="aiogram"
                title="Aiogram"
                loading="lazy"
              />
            </li>

            <li>
              <img
                src="assets/excel_icon.svg"
                width="40"
                height="40"
                alt="Excel VBA"
                title="Excel VBA"
                loading="lazy"
              />
            </li>
            <li>
              <img
                src="assets/vscode_icon.svg"
                width="40"
                height="40"
                alt="VS Code"
                title="VS Code"
                loading="lazy"
              />
            </li>
          </ul>
          <h3 data-lang="tech-other">Other Tools & Skills:</h3>
          <ul class="skills-list">
            <li data-lang="skill-post"></li>
            <li data-lang="skill-workflows"></li>
            <li data-lang="skill-ui"></li>
            <li data-lang="skill-vba"></li>
            <li data-lang="skill-macros"></li>
            <li data-lang="skill-telegram"></li>
            <li data-lang="skill-web"></li>
          </ul>
        </div>
      </section>

      <section id="projects">
        <h2 data-lang="projects-title">Projects</h2>
        <div class="projects-carousel-wrapper">
          <div
            class="projects-carousel"
            role="region"
            aria-label="Active projects carousel"
            aria-live="polite"
          ></div>
          <div class="carousel-nav">
            <button class="carousel-prev" aria-label="Previous project">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                aria-hidden="true"
              >
                <path d="M10 12L6 8L10 4" />
              </svg>
            </button>
            <button class="carousel-next" aria-label="Next project">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                aria-hidden="true"
              >
                <path d="M6 4L10 8L6 12" />
              </svg>
            </button>
          </div>
        </div>
        <div class="carousel-dots"></div>
      </section>

      <section id="upcoming">
        <h2 data-lang="upcoming-title">Future Projects</h2>
        <div class="projects-carousel-wrapper">
          <div
            class="projects-carousel upcoming-carousel"
            role="region"
            aria-label="Future projects carousel"
            aria-live="polite"
          ></div>
          <div class="carousel-nav">
            <button class="carousel-prev" aria-label="Previous project">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                aria-hidden="true"
              >
                <path d="M10 12L6 8L10 4" />
              </svg>
            </button>
            <button class="carousel-next" aria-label="Next project">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                aria-hidden="true"
              >
                <path d="M6 4L10 8L6 12" />
              </svg>
            </button>
          </div>
        </div>
        <div class="carousel-dots upcoming-dots"></div>
      </section>

      <section id="contact">
        <h2 data-lang="contact-title">Contact Me</h2>
        <div class="content-block contact-info contact-grid">
          <p>
            <img src="assets/gmail_icon.svg" width="20" alt="Gmail" />
            <strong>Email:</strong>
            <a href="mailto:maestrofusion360@gmail.com"
              >maestrofusion360@gmail.com</a
            >
          </p>
          <p>
            <img src="assets/telegram_icon.svg" width="20" alt="Telegram" />
            <strong>Telegram:</strong>
            <a href="https://t.me/MaestroFusion360">@MaestroFusion360</a>
          </p>
          <p>
            <img src="assets/github_icon.svg" width="20" alt="GitHub" />
            <strong>GitHub:</strong>
            <a href="https://github.com/MaestroFusion360"
              >github.com/MaestroFusion360</a
            >
          </p>
          <p>
            <img src="assets/youtube_icon.svg" width="20" alt="YouTube" />
            <strong>YouTube:</strong>
            <a href="https://www.youtube.com/@MaestroFusion360"
              >youtube.com/@MaestroFusion360</a
            >
          </p>
        </div>
      </section>

      <div id="lang-toggle">
        <button id="flag-en" aria-label="English">
          <img src="assets/gb_icon.svg" alt="English" width="24" />
        </button>
        <button id="flag-ru" aria-label="Р СѓСЃСЃРєРёР№">
          <img src="assets/ru_icon.svg" alt="Р СѓСЃСЃРєРёР№" width="24" />
        </button>
      </div>
    </main>

    <footer>
      <p>&copy; 2025 MaestroFusion360. All rights reserved.</p>
    </footer>\n\n