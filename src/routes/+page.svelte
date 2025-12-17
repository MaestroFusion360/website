<script lang="ts">
  import { setContext } from 'svelte';
  import { TEXTS } from '../lang';
  import { projectsData } from './projects/project';
  import ProjectsCarousel from './ProjectsCarousel.svelte';
  import UpcomingCarousel from './UpcomingCarousel.svelte';
  import type { ProjectCard as ProjectCardType } from './ProjectsCarousel.svelte';
  import Contacts from './Contacts.svelte';
  import Header from './Header.svelte';
  import Footer from './Footer.svelte';
  import Technologies from './Technologies.svelte';

  import { ThemeToggle, LangSwitch } from '$lib';

  type Locale = keyof typeof TEXTS;
  const lang = $state<{ value: Locale }>({ value: 'en' });
  setContext('lang', lang);

  const t = $derived(TEXTS[lang.value]);

  const activeProjects = projectsData.active as unknown as ProjectCardType[];
  const upcomingProjects = projectsData.upcoming as unknown as ProjectCardType[];

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

  $effect(() => {
    if (typeof window === 'undefined' || typeof document === 'undefined') return;

    const dict = TEXTS[lang.value];
    document.documentElement.lang = lang.value;

    document.querySelectorAll<HTMLElement>('[data-lang]').forEach((element) => {
      const key = element.getAttribute('data-lang') as keyof typeof dict | null;
      if (!key) return;
      const value = dict[key];
      if (value) element.innerHTML = value;
    });
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

<ThemeToggle />

<Header />

<main>
  <section id="about">
    <h2 data-lang="about-title">{t['about-title']}</h2>
    <div class="content-block">
      <p data-lang="about-desc">{t['about-desc']}</p>
    </div>
  </section>

  <Technologies />

  <section id="projects">
    <h2 data-lang="projects-title">{t['projects-title']}</h2>
    <ProjectsCarousel
      items={activeProjects}
      locale={lang.value}
      videoMissing={t['video-missing']}
    />
  </section>

  <section id="upcoming">
    <h2 data-lang="upcoming-title">{t['upcoming-title']}</h2>
    <UpcomingCarousel items={upcomingProjects} locale={lang.value} />
  </section>

  <section id="contact">
    <h2 data-lang="contact-title">{t['contact-title']}</h2>
    <Contacts />
  </section>

  <LangSwitch bind:value={lang.value} />
</main>

<Footer />
