// Translation system
const translations = {
    en: {
        "title": "Hi there, I'm MaestroFusion360",
        "about-title": "About Me",
        "about-desc": `I am a CNC Software Engineer with experience in developing postprocessors and integrating solutions for <strong>Fusion 360</strong>. 
        I focus on creating and customizing software <strong>that improves the quality and efficiency of CNC program preparation</strong>. 
        My expertise lies in deep CAM process configuration and optimization of machining workflows.`,
        "tech-title": "Technologies",
        "tech-stack": "Main Stack:",
        "tech-other": "Other Tools & Skills:",
        "projects-title": "Projects",
        "upcoming-title": "Future Projects",
        "contact-title": "Contact Me",
        "skill-post": "<strong>Post Processors</strong> & <strong>CAM Automation</strong>",
        "skill-workflows": "<strong>Custom Workflows</strong>",
        "skill-ui": "<strong>UI/UX for Fusion 360 Add-Ins</strong>",
        "skill-vba": "<strong>Excel VBA Automation</strong>",
        "skill-macros": "<strong>Macros Development</strong>",
        "skill-telegram": "<strong>Aiogram Bots</strong>",
        "skill-web": "<strong>Static websites (HTML/CSS/JS)</strong>",
        "video-missing": "🎥 Video not available"
    },
    ru: {
        "title": "Привет, я MaestroFusion360",
        "about-title": "Обо мне",
        "about-desc": `Я инженер-программист ЧПУ с опытом разработки постпроцессоров и интеграции решений для <strong>Fusion 360</strong>.
        Занимаюсь созданием и адаптацией программного обеспечения, <strong>повышающего качество и эффективность подготовки управляющих программ</strong> для станков с числовым программным управлением.
        Специализируюсь на глубокой настройке CAM-процессов и оптимизации рабочих циклов.`,
        "tech-title": "Технологии",
        "tech-stack": "Основной стек:",
        "tech-other": "Другие инструменты и навыки:",
        "projects-title": "Проекты",
        "upcoming-title": "Будущие проекты",
        "contact-title": "Контакты",
        "skill-post": "<strong>Постпроцессоры</strong> и <strong>автоматизация CAM</strong>",
        "skill-workflows": "<strong>Пользовательские рабочие процессы</strong>",
        "skill-ui": "<strong>UI/UX для Fusion 360 Add-Ins</strong>",
        "skill-vba": "<strong>Автоматизация Excel VBA</strong>",
        "skill-macros": "<strong>Разработка макросов</strong>",
        "skill-telegram": "<strong>Aiogram боты</strong>",
        "skill-web": "<strong>Статичные сайты (HTML/CSS/JS)</strong>",
        "video-missing": "🎥 Видео отсутствует"
    }
};

let currentLang = localStorage.getItem("lang") || "en";
const langElements = document.querySelectorAll("[data-lang]");
const flagEn = document.getElementById("flag-en");
const flagRu = document.getElementById("flag-ru");

function applyTranslations(lang) {
    langElements.forEach(el => {
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
    document.querySelectorAll('.carousel-prev, .carousel-next').forEach(btn => {
        btn.replaceWith(btn.cloneNode(true));
    });
    
    initSingleCarousel('.projects-carousel', '.carousel-dots');
    initSingleCarousel('.upcoming-carousel', '.upcoming-dots');
}

function initSingleCarousel(carouselSelector, dotsSelector) {
    const carousel = document.querySelector(carouselSelector);
    const cards = carousel ? carousel.querySelectorAll('.project-card') : [];
    const dotsContainer = document.querySelector(dotsSelector);
    const parentWrapper = carousel ? carousel.closest('.projects-carousel-wrapper') : null;
    const prevBtn = parentWrapper ? parentWrapper.querySelector('.carousel-prev') : null;
    const nextBtn = parentWrapper ? parentWrapper.querySelector('.carousel-next') : null;
    
    if (!carousel || cards.length === 0) return;

    function initDots() {
        if (!dotsContainer) return;
        
        dotsContainer.innerHTML = '';
        cards.forEach((_, index) => {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            dot.addEventListener('click', () => scrollToCard(index));
            dotsContainer.appendChild(dot);
        });
        updateActiveStates();
    }

    function scrollToCard(index) {
        const card = cards[index];
        const container = carousel.parentElement;
        const containerWidth = container.offsetWidth;
        const cardWidth = card.offsetWidth;
        const targetScroll = card.offsetLeft - (containerWidth / 2) + (cardWidth / 2);
        
        carousel.scrollTo({
            left: targetScroll,
            behavior: 'smooth'
        });
    }

    function updateActiveStates() {
        const containerCenter = carousel.scrollLeft + (carousel.offsetWidth / 2);
        
        cards.forEach((card, index) => {
            const cardStart = card.offsetLeft;
            const cardEnd = cardStart + card.offsetWidth;
            const isActive = containerCenter >= cardStart && containerCenter <= cardEnd;
            
            card.classList.toggle('active', isActive);
            if (dotsContainer && dotsContainer.children[index]) {
                dotsContainer.children[index].classList.toggle('active', isActive);
            }
        });
    }

    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            const currentIndex = Array.from(cards).findIndex(card => 
                card.classList.contains('active')
            );
            if (currentIndex > 0) scrollToCard(currentIndex - 1);
        });
        
        nextBtn.addEventListener('click', () => {
            const currentIndex = Array.from(cards).findIndex(card => 
                card.classList.contains('active')
            );
            if (currentIndex < cards.length - 1) scrollToCard(currentIndex + 1);
        });
    }

    initDots();
    
    let isScrolling;
    carousel.addEventListener('scroll', () => {
        clearTimeout(isScrolling);
        isScrolling = setTimeout(() => {
            updateActiveStates();
        }, 100);
    });

    updateActiveStates();
}

// Project rendering for active projects
function renderActiveProjects() {
    const carousel = document.querySelector('.projects-carousel');
    if (!carousel || !window.projectsData?.active) return;

    carousel.innerHTML = window.projectsData.active.map(project => {
        const projectData = project[currentLang] || {};

        const videoContent = project.youtubeId
            ? `<iframe src="https://www.youtube.com/embed/${project.youtubeId}" 
                    title="${projectData.title || ''}"
                    allowfullscreen loading="lazy"></iframe>`
            : `<div class="video-placeholder">${translations[currentLang]['video-missing']}</div>`;

        return `
        <article class="project-card">
            <div class="video-container">
                ${videoContent}
            </div>
            <h3>
                ${project.link ? `
                <a href="${project.link}" target="_blank" class="project-link" 
                   style="position: relative; z-index: 10;">
                    ${projectData.title || ''}
                </a>
                ` : projectData.title || ''}
            </h3>
            <p>${projectData.description || ''}</p>
            ${projectData.features ? `
            <ul class="features-list">
                ${projectData.features.map(f => `<li>${f}</li>`).join('')}
            </ul>` : ''}
        </article>`;
    }).join('');

    initCarousel();
}

// Project rendering for future projects
function renderUpcomingProjects() {
    const carousel = document.querySelector('.upcoming-carousel');
    if (!carousel || !window.projectsData?.upcoming) return;

    carousel.innerHTML = window.projectsData.upcoming.map(project => `
        <article class="project-card">
            <h3>${project[currentLang]?.title || project.title}</h3>
            <p>${project[currentLang]?.description || project.description}</p>
            
            ${project[currentLang]?.features ? `
            <ul class="features-list">
                ${project[currentLang].features.map(f => `<li>${f}</li>`).join('')}
            </ul>
            ` : ''}
        </article>
    `).join('');

    initCarousel();
}

// Initialize all project sections
function initProjects() {
    renderActiveProjects();
    renderUpcomingProjects();
}

// Main initialization
document.addEventListener("DOMContentLoaded", () => {
    applyTranslations(currentLang);
    initProjects();
});