import { projectsData } from './project';

type Lang = 'en' | 'ru';
type Theme = 'light' | 'dark';

type ProjectLocale = {
	title?: string;
	description?: string;
	features?: readonly string[];
};

type ProjectCard = {
	link?: string;
	youtubeId?: string;
	en?: ProjectLocale;
	ru?: ProjectLocale;
	[key: string]: unknown;
};
// Translation system
const translations: Record<Lang, Record<string, string>> = {
    en: {
    title: "Hi there, I'm MaestroFusion360",
    "about-title": "About Me",
    "about-desc": `I’m a CNC/CAM engineer and software developer working with Fusion 360, postprocessors and real-world machining workflows. 
I build automation tools, G-code utilities and web apps, and I also develop my own UI libraries on Svelte 5 with a clean, minimal architecture. 
My work spans from postprocessor customization and CAM process tuning to full-stack platforms with PWA frontends, bots and engineering analytics. 
I focus on clarity, predictable behavior and tools that actually help engineers get work done faster and with fewer errors.`,
    "tech-title": "Technologies",
    "tech-stack": "Main Stack:",
    "tech-other": "Other Tools & Skills:",
    "projects-title": "Projects",
    "upcoming-title": "Future Projects",
    "contact-title": "Contact Me",
    "skill-post":
      "<strong>Post Processors</strong> & <strong>CAM Automation</strong>",
    "skill-workflows": "<strong>Custom Workflows</strong>",
    "skill-ui": "<strong>UI/UX for Fusion 360 Add-Ins</strong>",
    "skill-vba": "<strong>Excel VBA Automation</strong>",
    "skill-macros": "<strong>Macros Development</strong>",
    "skill-telegram": "<strong>Aiogram Bots</strong>",
    "skill-web":
      "<strong>Web applications & UI (Svelte 5, TypeScript, Tailwind)</strong>",
    "video-missing": "Video not available",
  },
  ru: {
    title: "Привет, я MaestroFusion360",
    "about-title": "Обо мне",
    "about-desc": `Я — инженер по ЧПУ/САМ и разработчик программного обеспечения, работающий с Fusion 360, постпроцессорами и реальными процессами механической обработки.
  Я создаю инструменты автоматизации, утилиты для G-кода и веб-приложения, а также разрабатываю собственные UI-библиотеки на Svelte 5 с чистой, минималистичной архитектурой.
  Моя работа охватывает всё — от кастомизации постпроцессоров и настройки CAM-процессов до создания полноценных платформ с PWA-фронтендами, ботами и аналитикой для инженерных задач. Я сосредоточен на ясности, предсказуемости поведения и инструментах, которые действительно помогают инженерам выполнять работу быстрее и с меньшим количеством ошибок.`,
    "tech-title": "Технологии",
    "tech-stack": "Основной стек:",
    "tech-other": "Другие инструменты и навыки:",
    "projects-title": "Проекты",
    "upcoming-title": "Будущие проекты",
    "contact-title": "Контакты",
    "skill-post":
      "<strong>Постпроцессоры</strong> и <strong>автоматизация CAM</strong>",
    "skill-workflows": "<strong>Кастомные рабочие процессы</strong>",
    "skill-ui": "<strong>UI/UX для адд‑инов Fusion 360</strong>",
    "skill-vba": "<strong>Автоматизация на Excel VBA</strong>",
    "skill-macros": "<strong>Разработка макросов</strong>",
    "skill-telegram": "<strong>Боты на Aiogram</strong>",
    "skill-web":
      "<strong>Веб-приложения и UI (Svelte 5, TypeScript, Tailwind)</strong>",
    "video-missing": "Видео недоступно",
  },
};
function isLang(value: string | null): value is Lang {
	return value === 'en' || value === 'ru';
}

function getStoredLang(): Lang {
	const stored = localStorage.getItem('lang');
	return isLang(stored) ? stored : 'en';
}

function getPreferredTheme(): Theme {
	const stored = localStorage.getItem('theme');
	if (stored === 'light' || stored === 'dark') return stored;
	return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function initPage(): void {
	if (typeof window === 'undefined') return;

	let currentLang: Lang = getStoredLang();
	const langElements = document.querySelectorAll<HTMLElement>('[data-lang]');
	const flagEn = document.getElementById('flag-en') as HTMLButtonElement | null;
	const flagRu = document.getElementById('flag-ru') as HTMLButtonElement | null;
	const themeToggle = document.getElementById('theme-toggle') as HTMLButtonElement | null;
	const themeMeta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');

	function setTheme(theme: Theme) {
		document.documentElement.setAttribute('data-theme', theme);

		themeMeta?.setAttribute('content', theme === 'dark' ? '#0b1220' : '#ffffff');

		if (themeToggle) {
			const nextLabel = theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme';
			themeToggle.setAttribute('aria-label', nextLabel);
			themeToggle.setAttribute('title', nextLabel);
		}
	}

	let currentTheme: Theme = getPreferredTheme();
	setTheme(currentTheme);

	if (themeToggle) {
		themeToggle.addEventListener('click', () => {
			currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
			localStorage.setItem('theme', currentTheme);
			setTheme(currentTheme);
		});

		const media = window.matchMedia('(prefers-color-scheme: dark)');
		const handleSystemTheme = (event: MediaQueryListEvent) => {
			if (!localStorage.getItem('theme')) {
				currentTheme = event.matches ? 'dark' : 'light';
				setTheme(currentTheme);
			}
		};

		if (media.addEventListener) media.addEventListener('change', handleSystemTheme);
		else media.addListener(handleSystemTheme);
	}

	function applyTranslations(lang: Lang) {
		document.documentElement.lang = lang;

		langElements.forEach((element) => {
			const key = element.getAttribute('data-lang');
			if (!key) return;
			const value = translations[lang][key];
			if (value) element.innerHTML = value;
		});

		if (flagEn && flagRu) {
			flagEn.style.opacity = lang === 'en' ? '1' : '0.5';
			flagRu.style.opacity = lang === 'ru' ? '1' : '0.5';
		}
	}

	function setLang(lang: Lang) {
		if (currentLang === lang) return;
		currentLang = lang;
		localStorage.setItem('lang', currentLang);
		applyTranslations(currentLang);
		initProjects();
	}

	flagEn?.addEventListener('click', () => setLang('en'));
	flagRu?.addEventListener('click', () => setLang('ru'));

	function initCarousel() {
		document.querySelectorAll('.carousel-prev, .carousel-next').forEach((button) => {
			button.replaceWith(button.cloneNode(true));
		});

		initSingleCarousel('.projects-carousel', '.carousel-dots');
		initSingleCarousel('.upcoming-carousel', '.upcoming-dots');
	}

	function initSingleCarousel(carouselSelector: string, dotsSelector: string) {
		const carousel = document.querySelector<HTMLElement>(carouselSelector);
		const cards = carousel ? Array.from(carousel.querySelectorAll<HTMLElement>('.project-card')) : [];
		const dotsContainer = document.querySelector<HTMLElement>(dotsSelector);
		const parentWrapper = carousel?.closest('.projects-carousel-wrapper') as HTMLElement | null;
		const prevBtn = parentWrapper?.querySelector<HTMLButtonElement>('.carousel-prev') ?? null;
		const nextBtn = parentWrapper?.querySelector<HTMLButtonElement>('.carousel-next') ?? null;

		if (!carousel || cards.length === 0) return;
		const carouselEl = carousel;

		let rafId: number | null = null;

		function getActiveIndex(): number {
			const containerCenter = carouselEl.scrollLeft + carouselEl.clientWidth / 2;
			let closestIndex = 0;
			let minDistance = Number.MAX_VALUE;

			cards.forEach((card, index) => {
				const cardCenter = card.offsetLeft + card.offsetWidth / 2;
				const distance = Math.abs(cardCenter - containerCenter);
				if (distance < minDistance) {
					minDistance = distance;
					closestIndex = index;
				}
			});

			return closestIndex;
		}

		function setActiveIndex(activeIndex: number) {
			cards.forEach((card, index) => {
				const isActive = index === activeIndex;
				card.classList.toggle('active', isActive);
				dotsContainer?.children[index]?.classList.toggle('active', isActive);
			});
		}

		function scrollToCard(index: number) {
			const card = cards[index];
			if (!card) return;

			const targetScroll = card.offsetLeft - (carouselEl.clientWidth - card.offsetWidth) / 2;
			carouselEl.scrollTo({ left: targetScroll, behavior: 'smooth' });
			setActiveIndex(index);
		}

		function initDots() {
			if (!dotsContainer) return;

			dotsContainer.innerHTML = '';
			cards.forEach((_, index) => {
				const dot = document.createElement('span');
				dot.classList.add('dot');
				dot.addEventListener('click', () => scrollToCard(index));
				dotsContainer.appendChild(dot);
			});
			setActiveIndex(0);
		}

		function handleScroll() {
			if (rafId !== null) return;
			rafId = requestAnimationFrame(() => {
				setActiveIndex(getActiveIndex());
				rafId = null;
			});
		}

		prevBtn?.addEventListener('click', () => {
			const currentIndex = getActiveIndex();
			if (currentIndex > 0) scrollToCard(currentIndex - 1);
		});

		nextBtn?.addEventListener('click', () => {
			const currentIndex = getActiveIndex();
			if (currentIndex < cards.length - 1) scrollToCard(currentIndex + 1);
		});

		initDots();
		carouselEl.addEventListener('scroll', handleScroll);
		setActiveIndex(getActiveIndex());
	}

	function renderActiveProjects() {
		const carousel = document.querySelector<HTMLElement>('.projects-carousel');
		if (!carousel) return;

		carousel.innerHTML = projectsData.active
			.map((project: ProjectCard) => {
				const projectData = (project[currentLang] as ProjectLocale | undefined) ?? {};

				const videoContent = project.youtubeId
					? `<iframe src="https://www.youtube.com/embed/${project.youtubeId}" title="${projectData.title ?? ''}" allowfullscreen loading="lazy" tabindex="-1"></iframe>`
					: `<div class="video-placeholder">${translations[currentLang]['video-missing'] ?? ''}</div>`;

				const title = projectData.title ?? '';
				const description = projectData.description ?? '';
				const features = projectData.features?.length
					? `<ul class="features-list">${projectData.features.map((feature) => `<li>${feature}</li>`).join('')}</ul>`
					: '';

				const heading = project.link
					? `<a href="${project.link}" target="_blank" class="project-link" style="position: relative; z-index: 10;" tabindex="-1">${title}</a>`
					: title;

				return `
					<article class="project-card">
						<div class="video-container">${videoContent}</div>
						<h3>${heading}</h3>
						<p>${description}</p>
						${features}
					</article>`;
			})
			.join('');

		initCarousel();
	}

	function renderUpcomingProjects() {
		const carousel = document.querySelector<HTMLElement>('.upcoming-carousel');
		if (!carousel) return;

		carousel.innerHTML = projectsData.upcoming
			.map((project: ProjectCard) => {
				const projectData = (project[currentLang] as ProjectLocale | undefined) ?? {};
				const title = projectData.title ?? (project as { title?: string }).title ?? '';
				const description = projectData.description ?? (project as { description?: string }).description ?? '';

				const features = projectData.features?.length
					? `<ul class="features-list">${projectData.features.map((feature) => `<li>${feature}</li>`).join('')}</ul>`
					: '';

				return `
					<article class="project-card">
						<h3>${title}</h3>
						<p>${description}</p>
						${features}
					</article>`;
			})
			.join('');

		initCarousel();
	}

	function initProjects() {
		renderActiveProjects();
		renderUpcomingProjects();
	}

	if ('serviceWorker' in navigator) {
		const isSecureContext = window.location.protocol === 'https:' || window.location.hostname === 'localhost';

		if (isSecureContext) {
			window.addEventListener('load', () => {
				navigator.serviceWorker
					.register('/sw.js', { scope: '/', updateViaCache: 'none' })
					.then((reg) => {
						reg.update?.();

						if (reg.waiting) reg.waiting.postMessage({ type: 'SKIP_WAITING' });

						reg.addEventListener?.('updatefound', () => {
							const installing = reg.installing;
							if (!installing) return;

							installing.addEventListener('statechange', () => {
								if (installing.state === 'installed' && reg.waiting) {
									reg.waiting.postMessage({ type: 'SKIP_WAITING' });
								}
							});
						});
					})
					.catch((err) => console.error('Service worker registration failed', err));
			});
		}
	}

	applyTranslations(currentLang);
	initProjects();
}
