<script lang="ts">
  import { setContext } from 'svelte';
  import { TEXTS, type Locale } from '../lang';
  import { projectsData } from './projects/project';
  import {
    Contacts,
    Header,
    Footer,
    ProjectsCarousel,
    Technologies,
    UpcomingCarousel
  } from './components';
  import type { ProjectCard as ProjectCardType } from './components';
  import { personSchemaTag, projectsSchemaTag } from './schema';

  import { ThemeToggle, LangSwitch, Hero } from '$lib';

  const lang = $state<{ value: Locale }>({ value: 'en' });
  setContext('lang', lang);

  const t = $derived(TEXTS[lang.value]);

  const activeProjects: ProjectCardType[] = projectsData.active;
  const upcomingProjects: ProjectCardType[] = projectsData.upcoming;
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
  <section id="about" class="px-6 md:px-12">
    <Hero
      title={t['about-title']}
      description={t['about-desc']}
      titleKey="about-title"
      descriptionKey="about-desc"
      imageAlt="MaestroFusion360"
    />
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
