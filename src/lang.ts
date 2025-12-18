export const TEXTS = {
  en: {
    title: "Hi there, I'm MaestroFusion360",
    'about-title': 'About Me',
    'about-desc': `I'm a CNC/CAM engineer and software developer working with Fusion 360, postprocessors and real-world machining workflows. 
I build automation tools, G-code utilities and web apps, and I also develop my own UI libraries on Svelte 5 with a clean, minimal architecture. 
My work spans from postprocessor customization and CAM process tuning to full-stack platforms with PWA frontends, bots and engineering analytics. 
I focus on clarity, predictable behavior and tools that actually help engineers get work done faster and with fewer errors.`,
    'tech-title': 'Technologies',
    'tech-stack': 'Main Stack:',
    'tech-other': 'Other Tools & Skills:',
    'projects-title': 'Projects',
    'upcoming-title': 'Future Projects',
    'contact-title': 'Contact Me',
    'skill-post': '<strong>Post Processors</strong> & <strong>CAM Automation</strong>',
    'skill-workflows': '<strong>Custom Workflows</strong>',
    'skill-ui': '<strong>UI/UX for Fusion 360 Add-Ins</strong>',
    'skill-vba': '<strong>Excel VBA Automation</strong>',
    'skill-macros': '<strong>Macros Development</strong>',
    'skill-telegram': '<strong>Aiogram Bots</strong>',
    'skill-web': '<strong>Web applications & UI (Svelte 5, TypeScript, Tailwind)</strong>',
    'video-missing': 'Video not available'
  },
  ru: {
    title: 'Привет, я MaestroFusion360',
    'about-title': 'Обо мне',
    'about-desc': `Я - инженер по ЧПУ/САМ и разработчик программного обеспечения, работающий с Fusion 360, постпроцессорами и реальными процессами механической обработки.
Я создаю инструменты автоматизации, утилиты для G-кода и веб-приложения, а также разрабатываю собственные UI-библиотеки на Svelte 5 с чистой, минималистичной архитектурой.
Моя работа охватывает всё - от кастомизации постпроцессоров и настройки CAM-процессов до создания полноценных платформ с PWA-фронтендами, ботами и аналитикой для инженерных задач. Я сосредоточен на ясности, предсказуемости поведения и инструментах, которые действительно помогают инженерам выполнять работу быстрее и с меньшим количеством ошибок.`,
    'tech-title': 'Технологии',
    'tech-stack': 'Основной стек:',
    'tech-other': 'Другие инструменты и навыки:',
    'projects-title': 'Проекты',
    'upcoming-title': 'Будущие проекты',
    'contact-title': 'Контакты',
    'skill-post': '<strong>Постпроцессоры</strong> и <strong>автоматизация CAM</strong>',
    'skill-workflows': '<strong>Кастомные рабочие процессы</strong>',
    'skill-ui': '<strong>UI/UX для адд-инов Fusion 360</strong>',
    'skill-vba': '<strong>Автоматизация на Excel VBA</strong>',
    'skill-macros': '<strong>Разработка макросов</strong>',
    'skill-telegram': '<strong>Боты на Aiogram</strong>',
    'skill-web': '<strong>Веб-приложения и UI (Svelte 5, TypeScript, Tailwind)</strong>',
    'video-missing': 'Видео недоступно'
  }
} as const;

export type Locale = keyof typeof TEXTS;
