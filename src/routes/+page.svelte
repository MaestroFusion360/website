<script lang="ts">
  import { onMount } from 'svelte';
  import { initPage } from '../script';
  import Header from './Header.svelte';
  import Footer from './Footer.svelte';
  import Technologies from './Technologies.svelte';
  import { Button } from '$lib';

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
      {
        '@type': 'ListItem',
        position: 1,
        name: 'svelte-comp',
        url: 'https://github.com/MaestroFusion360/svelte-comp',
        description: 'Svelte 5 UI components library with TailwindCSS styling.'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Planner',
        url: 'https://github.com/MaestroFusion360/task_planning',
        description: 'Desktop planner with Gantt chart for manufacturing scheduling.'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Easy G-Code Plot',
        url: 'https://github.com/MaestroFusion360/easy_gcode_plot',
        description: 'G-code editor and 3D toolpath visualizer.'
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'SmartPost',
        url: 'https://github.com/MaestroFusion360/SmartPost',
        description: 'Fusion 360 postprocessor helper for faster multi-tool outputs.'
      },
      {
        '@type': 'ListItem',
        position: 5,
        name: '@postprocessors_bot',
        url: 'https://t.me/postprocessors_bot',
        description: 'Telegram bot for sharing CAM postprocessors.'
      },
      {
        '@type': 'ListItem',
        position: 6,
        name: 'MoveOp',
        url: 'https://github.com/MaestroFusion360/MoveOp',
        description: 'Fusion 360 add-in to reorder imported CAM operations.'
      }
    ]
  };

  const personSchemaJson = JSON.stringify(personSchema);
  const projectsSchemaJson = JSON.stringify(projectsSchema);
  const jsonLdScriptOpen = '<scr' + 'ipt type="application/ld+json">';
  const jsonLdScriptClose = '</scr' + 'ipt>';
  const personSchemaTag = jsonLdScriptOpen + personSchemaJson + jsonLdScriptClose;
  const projectsSchemaTag = jsonLdScriptOpen + projectsSchemaJson + jsonLdScriptClose;

  onMount(() => {
    initPage();
  });
</script>

<svelte:head>
  <!-- Basic Tags-->
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="google-site-verification" content="NvQSU1__FPJtmLW9aYweYggiV0xnDR4tYLht6rhOFHg" />

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
  <meta property="og:title" content="MaestroFusion360 | CNC & Fusion 360 Developer" />
  <meta
    property="og:description"
    content="CNC Software Engineer and Fusion 360 Developer specializing in automation."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://maestrofusion360.github.io/website/" />
  <meta
    property="og:image"
    content="https://maestrofusion360.github.io/website/assets/icon-192.png"
  />
  <meta property="og:locale" content="en_US" />

  <!-- Favicon & PWA -->
  <link rel="icon" href="favicon.ico" type="image/x-icon" />
  <link rel="manifest" href="manifest.webmanifest" />
  <link rel="apple-touch-icon" href="assets/icon-192.png" />

  <!-- Styles -->
  <meta name="theme-color" content="#ffffff" />

  <!-- Schema.org Marking -->
  <!-- eslint-disable-next-line svelte/no-at-html-tags -->
  {@html personSchemaTag}
  <!-- eslint-disable-next-line svelte/no-at-html-tags -->
  {@html projectsSchemaTag}
</svelte:head>

<Button id="theme-toggle" aria-label="Toggle dark theme" title="Toggle dark theme">
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
</Button>

<Header />

<main>
  <section id="about">
    <h2 data-lang="about-title">About Me</h2>
    <div class="content-block">
      <p data-lang="about-desc">
        CNC Software Engineer and
        <strong>Fusion 360 Developer</strong> passionate about automating G-code generation and optimizing
        CNC programming.
      </p>
    </div>
  </section>

  <Technologies />

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
        <Button class="carousel-prev" aria-label="Previous project">
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
        </Button>
        <Button class="carousel-next" aria-label="Next project">
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
        </Button>
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
        <Button class="carousel-prev" aria-label="Previous project">
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
        </Button>
        <Button class="carousel-next" aria-label="Next project">
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
        </Button>
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
        <a href="mailto:maestrofusion360@gmail.com">maestrofusion360@gmail.com</a>
      </p>
      <p>
        <img src="assets/telegram_icon.svg" width="20" alt="Telegram" />
        <strong>Telegram:</strong>
        <a href="https://t.me/MaestroFusion360">@MaestroFusion360</a>
      </p>
      <p>
        <img src="assets/github_icon.svg" width="20" alt="GitHub" />
        <strong>GitHub:</strong>
        <a href="https://github.com/MaestroFusion360">github.com/MaestroFusion360</a>
      </p>
      <p>
        <img src="assets/youtube_icon.svg" width="20" alt="YouTube" />
        <strong>YouTube:</strong>
        <a href="https://www.youtube.com/@MaestroFusion360">youtube.com/@MaestroFusion360</a>
      </p>
    </div>
  </section>

  <div id="lang-toggle">
    <Button id="flag-en" aria-label="English">
      <img src="assets/gb_icon.svg" alt="English" width="24" />
    </Button>
    <Button id="flag-ru" aria-label="Руссий">
      <img src="assets/ru_icon.svg" alt="Русский" width="24" />
    </Button>
  </div>
</main>

<Footer />
