import { projectsData } from './routes/projects/project';
import { TEXTS } from './lang';

type Locale = keyof typeof TEXTS;

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

export function initPage(locale: Locale = 'en'): void {
  if (typeof window === 'undefined') return;

  function initCarousel() {
    document.querySelectorAll('.carousel-prev, .carousel-next').forEach((button) => {
      button.replaceWith(button.cloneNode(true));
    });

    initSingleCarousel('.projects-carousel', '.carousel-dots');
    initSingleCarousel('.upcoming-carousel', '.upcoming-dots');
  }

  function initSingleCarousel(carouselSelector: string, dotsSelector: string) {
    const cards = Array.from(
      document.querySelectorAll<HTMLElement>(`${carouselSelector} .project-card`)
    );
    if (cards.length === 0) return;

    const dotsContainer = document.querySelector<HTMLElement>(dotsSelector);

    const parentWrapper = document.querySelector(`${carouselSelector}`)?.closest(
      '.projects-carousel-wrapper'
    );

    const prevBtn = parentWrapper?.querySelector<HTMLButtonElement>('.carousel-prev') ?? null;
    const nextBtn = parentWrapper?.querySelector<HTMLButtonElement>('.carousel-next') ?? null;

    let rafId: number | null = null;

    function getCarousel(): HTMLElement | null {
      return document.querySelector<HTMLElement>(carouselSelector);
    }

    function getActiveIndex(): number {
      const carousel = getCarousel();
      if (!carousel) return 0;

      const center = carousel.scrollLeft + carousel.clientWidth / 2;

      let closest = 0;
      let min = Number.MAX_VALUE;

      cards.forEach((card, index) => {
        const cardCenter = card.offsetLeft + card.offsetWidth / 2;
        const dist = Math.abs(cardCenter - center);

        if (dist < min) {
          min = dist;
          closest = index;
        }
      });

      return closest;
    }

    function setActiveIndex(index: number) {
      cards.forEach((card, i) => {
        const active = i === index;
        card.classList.toggle('active', active);
        dotsContainer?.children[i]?.classList.toggle('active', active);
      });
    }

    function scrollToCard(index: number) {
      const carousel = getCarousel();
      if (!carousel) return;

      const card = cards[index];
      if (!card) return;

      const target = card.offsetLeft - (carousel.clientWidth - card.offsetWidth) / 2;

      carousel.scrollTo({ left: target, behavior: 'smooth' });
      setActiveIndex(index);
    }

    function initDots() {
      if (!dotsContainer) return;

      dotsContainer.innerHTML = '';
      cards.forEach((_, i) => {
        const dot = document.createElement('span');
        dot.className = 'dot';
        dot.addEventListener('click', () => scrollToCard(i));
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

    const carousel = getCarousel();
    if (!carousel) return;

    prevBtn?.addEventListener('click', () => {
      const i = getActiveIndex();
      if (i > 0) scrollToCard(i - 1);
    });

    nextBtn?.addEventListener('click', () => {
      const i = getActiveIndex();
      if (i < cards.length - 1) scrollToCard(i + 1);
    });

    initDots();
    carousel.addEventListener('scroll', handleScroll);
    setActiveIndex(getActiveIndex());
  }

  function renderActiveProjects() {
    const carousel = document.querySelector<HTMLElement>('.projects-carousel');
    if (!carousel) return;

    const videoMissing = TEXTS[locale]['video-missing'] ?? '';

    carousel.innerHTML = projectsData.active
      .map((project: ProjectCard) => {
        const data = (project[locale] as ProjectLocale | undefined) ?? project.en ?? {};

        const video = project.youtubeId
          ? `<iframe src="https://www.youtube.com/embed/${project.youtubeId}" allowfullscreen loading="lazy"></iframe>`
          : `<div class="video-placeholder">${videoMissing}</div>`;

        const features = data.features?.length
          ? `<ul class="features-list">${data.features.map((f) => `<li>${f}</li>`).join('')}</ul>`
          : '';

        const title = data.title ?? '';
        const heading = project.link
          ? `<a href="${project.link}" target="_blank" class="project-link" style="position: relative; z-index: 10;" tabindex="-1">${title}</a>`
          : title;

        return `
          <article class="project-card">
            <div class="video-container">${video}</div>
            <h3>${heading}</h3>
            <p>${data.description ?? ''}</p>
            ${features}
          </article>
        `;
      })
      .join('');

    initCarousel();
  }

  function renderUpcomingProjects() {
    const carousel = document.querySelector<HTMLElement>('.upcoming-carousel');
    if (!carousel) return;

    carousel.innerHTML = projectsData.upcoming
      .map((project: ProjectCard) => {
        const data = (project[locale] as ProjectLocale | undefined) ?? project.en ?? {};

        const features = data.features?.length
          ? `<ul class="features-list">${data.features.map((f) => `<li>${f}</li>`).join('')}</ul>`
          : '';

        return `
          <article class="project-card">
            <h3>${data.title ?? ''}</h3>
            <p>${data.description ?? ''}</p>
            ${features}
          </article>
        `;
      })
      .join('');

    initCarousel();
  }

  renderActiveProjects();
  renderUpcomingProjects();
}
