// Translation system
const translations = {
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

let currentLang = localStorage.getItem("lang") || "en";
const langElements = document.querySelectorAll("[data-lang]");
const flagEn = document.getElementById("flag-en");
const flagRu = document.getElementById("flag-ru");
const themeToggle = document.getElementById("theme-toggle");
const themeMeta = document.querySelector('meta[name="theme-color"]');

function getPreferredTheme() {
  const stored = localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  if (themeMeta) {
    themeMeta.setAttribute("content", theme === "dark" ? "#0b1220" : "#ffffff");
  }
  if (themeToggle) {
    const nextLabel =
      theme === "dark" ? "Switch to light theme" : "Switch to dark theme";
    themeToggle.setAttribute("aria-label", nextLabel);
    themeToggle.setAttribute("title", nextLabel);
  }
}

let currentTheme = getPreferredTheme();
setTheme(currentTheme);

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    currentTheme = currentTheme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", currentTheme);
    setTheme(currentTheme);
  });

  const media = window.matchMedia("(prefers-color-scheme: dark)");
  const handleSystemTheme = (e) => {
    if (!localStorage.getItem("theme")) {
      currentTheme = e.matches ? "dark" : "light";
      setTheme(currentTheme);
    }
  };

  if (media.addEventListener) {
    media.addEventListener("change", handleSystemTheme);
  } else if (media.addListener) {
    media.addListener(handleSystemTheme);
  }
}

function applyTranslations(lang) {
  document.documentElement.lang = lang;
  langElements.forEach((el) => {
    const key = el.getAttribute("data-lang");
    if (translations[lang]?.[key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  if (flagEn && flagRu) {
    flagEn.style.opacity = lang === "en" ? "1" : "0.5";
    flagRu.style.opacity = lang === "ru" ? "1" : "0.5";
  }
}

if (flagEn && flagRu) {
  flagEn.addEventListener("click", () => {
    currentLang = "en";
    localStorage.setItem("lang", currentLang);
    applyTranslations(currentLang);
    initProjects();
  });

  flagRu.addEventListener("click", () => {
    currentLang = "ru";
    localStorage.setItem("lang", currentLang);
    applyTranslations(currentLang);
    initProjects();
  });
}

// Carousel system

function initCarousel() {
  // Re-creating buttons to reset handlers
  document.querySelectorAll(".carousel-prev, .carousel-next").forEach((btn) => {
    btn.replaceWith(btn.cloneNode(true));
  });

  initSingleCarousel(".projects-carousel", ".carousel-dots");
  initSingleCarousel(".upcoming-carousel", ".upcoming-dots");
}

function initSingleCarousel(carouselSelector, dotsSelector) {
  const carousel = document.querySelector(carouselSelector);
  const cards = carousel ? carousel.querySelectorAll(".project-card") : [];
  const dotsContainer = document.querySelector(dotsSelector);
  const parentWrapper = carousel
    ? carousel.closest(".projects-carousel-wrapper")
    : null;
  const prevBtn = parentWrapper
    ? parentWrapper.querySelector(".carousel-prev")
    : null;
  const nextBtn = parentWrapper
    ? parentWrapper.querySelector(".carousel-next")
    : null;

  if (!carousel || cards.length === 0) return;

  if (prevBtn) {
    prevBtn.textContent = "<";
    prevBtn.setAttribute("aria-label", "Previous project");
  }
  if (nextBtn) {
    nextBtn.textContent = ">";
    nextBtn.setAttribute("aria-label", "Next project");
  }

  function initDots() {
    if (!dotsContainer) return;

    dotsContainer.innerHTML = "";
    cards.forEach((_, index) => {
      const dot = document.createElement("span");
      dot.classList.add("dot");
      dot.addEventListener("click", () => scrollToCard(index));
      dotsContainer.appendChild(dot);
    });
    updateActiveStates();
  }

  function scrollToCard(index) {
    const card = cards[index];
    const container = carousel.parentElement;
    const containerWidth = container.offsetWidth;
    const cardWidth = card.offsetWidth;
    const targetScroll = card.offsetLeft - containerWidth / 2 + cardWidth / 2;

    carousel.scrollTo({
      left: targetScroll,
      behavior: "smooth",
    });
  }

  function updateActiveStates() {
    const containerCenter = carousel.scrollLeft + carousel.offsetWidth / 2;

    cards.forEach((card, index) => {
      const cardStart = card.offsetLeft;
      const cardEnd = cardStart + card.offsetWidth;
      const isActive =
        containerCenter >= cardStart && containerCenter <= cardEnd;

      card.classList.toggle("active", isActive);
      if (dotsContainer && dotsContainer.children[index]) {
        dotsContainer.children[index].classList.toggle("active", isActive);
      }
    });
  }

  if (prevBtn && nextBtn) {
    prevBtn.addEventListener("click", () => {
      const currentIndex = Array.from(cards).findIndex((card) =>
        card.classList.contains("active")
      );
      if (currentIndex > 0) scrollToCard(currentIndex - 1);
    });

    nextBtn.addEventListener("click", () => {
      const currentIndex = Array.from(cards).findIndex((card) =>
        card.classList.contains("active")
      );
      if (currentIndex < cards.length - 1) scrollToCard(currentIndex + 1);
    });
  }

  initDots();

  let isScrolling;
  carousel.addEventListener("scroll", () => {
    clearTimeout(isScrolling);
    isScrolling = setTimeout(() => {
      updateActiveStates();
    }, 100);
  });

  updateActiveStates();
}

// Project rendering for active projects
function renderActiveProjects() {
  const carousel = document.querySelector(".projects-carousel");
  if (!carousel || !window.projectsData?.active) return;

  carousel.innerHTML = window.projectsData.active
    .map((project) => {
      const projectData = project[currentLang] || {};

      const videoContent = project.youtubeId
        ? `<iframe src="https://www.youtube.com/embed/${project.youtubeId}" 
                    title="${projectData.title || ""}"
                    allowfullscreen loading="lazy" tabindex="-1"></iframe>`
        : `<div class="video-placeholder">${translations[currentLang]["video-missing"]}</div>`;

      return `
        <article class="project-card">
            <div class="video-container">
                ${videoContent}
            </div>
            <h3>
                ${
                  project.link
                    ? `
                <a href="${project.link}" target="_blank" class="project-link" 
                   style="position: relative; z-index: 10;" tabindex="-1">
                    ${projectData.title || ""}
                </a>
                `
                    : projectData.title || ""
                }
            </h3>
            <p>${projectData.description || ""}</p>
            ${
              projectData.features
                ? `
            <ul class="features-list">
                ${projectData.features.map((f) => `<li>${f}</li>`).join("")}
            </ul>`
                : ""
            }
        </article>`;
    })
    .join("");

  initCarousel();
}

// Project rendering for future projects
function renderUpcomingProjects() {
  const carousel = document.querySelector(".upcoming-carousel");
  if (!carousel || !window.projectsData?.upcoming) return;

  carousel.innerHTML = window.projectsData.upcoming
    .map(
      (project) => `
        <article class="project-card">
            <h3>${project[currentLang]?.title || project.title}</h3>
            <p>${project[currentLang]?.description || project.description}</p>
            
            ${
              project[currentLang]?.features
                ? `
            <ul class="features-list">
                ${project[currentLang].features
                  .map((f) => `<li>${f}</li>`)
                  .join("")}
            </ul>
            `
                : ""
            }
        </article>
    `
    )
    .join("");

  initCarousel();
}

// Initialize all project sections
function initProjects() {
  renderActiveProjects();
  renderUpcomingProjects();
}

// Register the service worker for offline support (HTTPS or localhost only)
if ("serviceWorker" in navigator) {
  const isSecureContext =
    window.location.protocol === "https:" ||
    window.location.hostname === "localhost";

  if (isSecureContext) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("sw.js", { scope: "./", updateViaCache: "none" })
        .then((reg) => {
          if (reg?.update) reg.update();

          if (reg?.waiting) {
            reg.waiting.postMessage({ type: "SKIP_WAITING" });
          }

          reg?.addEventListener?.("updatefound", () => {
            const installing = reg.installing;
            if (!installing) return;
            installing.addEventListener("statechange", () => {
              if (installing.state === "installed" && reg.waiting) {
                reg.waiting.postMessage({ type: "SKIP_WAITING" });
              }
            });
          });
        })
        .catch((err) =>
          console.error("Service worker registration failed", err)
        );
    });
  }
}

// Main initialization
document.addEventListener("DOMContentLoaded", () => {
  applyTranslations(currentLang);
  initProjects();
});
