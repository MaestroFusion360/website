// ==================== 
// Translation System
// ====================

//Translation constants
const translations = {
    en: {
        "title": "Hi there, I'm MaestroFusion360",
        "about-title": "About Me",
        "about-desc": "CNC Software Engineer and <strong>Fusion 360 Developer</strong> passionate about automating G-code generation and optimizing CNC programming.",
        "tech-title": "Technologies",
        "tech-stack": "Main Stack:",
        "tech-other": "Other Tools & Skills:",
        "projects-title": "Featured Projects",
        "smartpost-title": "SmartPost",
        "smartpost-desc": "A powerful tool that accelerates <strong>G-code generation</strong> and removes the <strong>tool change restriction</strong> in Fusion 360 Personal.",
        "smartpost-feature1": "<strong>Faster post-processing</strong> – reduce CAM processing time.",
        "smartpost-feature2": "<strong>No tool change limitations</strong> – unrestricted multi-tool operations.",
        "smartpost-feature3": "<strong>Improved workflow efficiency</strong> – streamlined G-code generation.",
        "automation-title": "Automation",
        "automation-desc": "Streamlines the CAM workflow by automating the import of <strong>CAM data</strong> from templates, eliminating the need for manual toolpath creation.",
        "automation-feature1": "<strong>Smart Templates</strong> – automatic geometry handling for machining.",
        "automation-feature2": "<strong>Offline Mode Support</strong> – work without a Fusion 360 cloud connection.",
        "automation-feature3": "<strong>WCS Parameter Setup</strong> – auto-detect stock zero points.",
        "automation-feature4": "<strong>Automatic Setup Sheet Generation</strong> – generate machining reports with tool and view data.",
        "automation-feature5": "<strong>Automatic NC Program Creation</strong> – produce G-code based on predefined parameters.",
        "automation-feature6": "<strong>Flexible Post-Processor Configuration</strong> – customize G-code formats and output settings.",
        "automation-feature7": "<strong>Action Logging</strong> – track operations for diagnostics and debugging.",
        "contact-title": "Contact Me",
        "skill-post": "<strong>Post Processors</strong> & <strong>CAM Automation</strong>",
        "skill-workflows": "<strong>Custom Workflows</strong>",
        "skill-ui": "<strong>UI/UX for Fusion 360 Add-Ins</strong>",
        "skill-vba": "<strong>Excel VBA Automation</strong>",
        "skill-macros": "<strong>Macros Development</strong>"
    },
    ru: {
        "title": "Привет, я MaestroFusion360",
        "about-title": "Обо мне",
        "about-desc": "Инженер-программист по ЧПУ и <strong>разработчик Fusion 360</strong>, увлеченный автоматизацией генерации G-кода и оптимизацией программирования ЧПУ.",
        "tech-title": "Технологии",
        "tech-stack": "Основной стек:",
        "tech-other": "Другие инструменты и навыки:",
        "projects-title": "Проекты",
        "smartpost-title": "SmartPost",
        "smartpost-desc": "Мощный инструмент, который ускоряет <strong>генерацию G-кода</strong> и устраняет <strong>ограничение на смену инструмента</strong> в Fusion 360 Personal.",
        "smartpost-feature1": "<strong>Быстрый постпроцессинг</strong> – сокращение времени обработки CAM.",
        "smartpost-feature2": "<strong>Нет ограничений на смену инструмента</strong> – неограниченные операции с несколькими инструментами.",
        "smartpost-feature3": "<strong>Улучшенная эффективность</strong> – упрощенная генерация G-кода.",
        "automation-title": "Automation",
        "automation-desc": "Упрощает рабочий процесс разработки УП, автоматизируя импорт <strong>данных для УП</strong> из шаблонов, устраняя необходимость в ручном создании траекторий.",
        "automation-feature1": "<strong>Умные шаблоны</strong> – автоматическая определение геометрии.",
        "automation-feature2": "<strong>Поддержка офлайн-режима</strong> – работа без интернета Fusion 360.",
        "automation-feature3": "<strong>Настройка РСК</strong> – автоматическое определение нулевых точек.",
        "automation-feature4": "<strong>Автогенерация отчетов</strong> – создание любых отчетов для обработки.",
        "automation-feature5": "<strong>Автосоздание NC-программ</strong> – автоматическая генерация УП",
        "automation-feature6": "<strong>Гибкая настройка</strong> – изменение форматов вывода УП",
        "automation-feature7": "<strong>Журналирование</strong> – отслеживание операций.",
        "contact-title": "Контакты",
        "skill-post": "<strong>Постпроцессоры</strong> и <strong>автоматизация CAM</strong>",
        "skill-workflows": "<strong>Пользовательские рабочие процессы</strong>",
        "skill-ui": "<strong>UI/UX для Fusion 360 Add-Ins</strong>",
        "skill-vba": "<strong>Автоматизация Excel VBA</strong>",
        "skill-macros": "<strong>Разработка макросов</strong>"
    }
};

// Initializing the language
let currentLang = localStorage.getItem("lang") || "en";

// Caching DOM elements
const langElements = document.querySelectorAll("[data-lang]");
const flagEn = document.getElementById("flag-en");
const flagRu = document.getElementById("flag-ru");

// A function for applying transfers
function applyTranslations(lang) {
    langElements.forEach(el => {
        const key = el.getAttribute("data-lang");
        if (translations[lang]?.[key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    // Updating flag styles
    if (flagEn && flagRu) {
        flagEn.style.opacity = lang === "en" ? "1" : "0.5";
        flagRu.style.opacity = lang === "ru" ? "1" : "0.5";
    }
}

// Language switch handlers
if (flagEn && flagRu) {
    flagEn.addEventListener("click", () => {
        currentLang = "en";
        localStorage.setItem("lang", currentLang);
        applyTranslations(currentLang);
    });

    flagRu.addEventListener("click", () => {
        currentLang = "ru";
        localStorage.setItem("lang", currentLang);
        applyTranslations(currentLang);
    });
}

// ==================== 
// Enhanced Carousel System
// ====================

function debounce(func, wait = 100) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func.apply(this, args);
        }, wait);
    };
}

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
    applyTranslations(currentLang);
    initCarousel();
});

// Initializing carousel points
function initCarousel() {
    const carousel = document.querySelector('.projects-carousel');
    const cards = document.querySelectorAll('.project-card');
    const dotsContainer = document.querySelector('.carousel-dots');
    
    if (!carousel || cards.length === 0) return;

    // Initialize dots navigation
    function initDots() {
        if (cards.length <= 1) {
            if (dotsContainer) dotsContainer.style.display = 'none';
            return;
        }

        cards.forEach((_, index) => {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            dot.addEventListener('click', () => scrollToCard(index));
            dotsContainer.appendChild(dot);
        });
    }

    // Smooth scroll to specific card
    function scrollToCard(index) {
        const card = cards[index];
        const container = card.parentElement;
        const containerWidth = container.offsetWidth;
        const cardWidth = card.offsetWidth;
        const targetScroll = card.offsetLeft - (containerWidth / 2) + (cardWidth / 2);
        
        container.scrollTo({
            left: targetScroll,
            behavior: 'smooth'
        });
    }

    // Update active card and dot states
    function updateActiveStates() {
        const container = document.querySelector('.projects-carousel');
        const containerCenter = container.scrollLeft + (container.offsetWidth / 2);
        
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

    // Initialize navigation buttons
    function initNavButtons() {
        const prevBtn = document.querySelector('.carousel-prev');
        const nextBtn = document.querySelector('.carousel-next');
        
        if (!prevBtn || !nextBtn) return;
        
        prevBtn.addEventListener('click', () => {
            const currentIndex = getCurrentCardIndex();
            if (currentIndex > 0) scrollToCard(currentIndex - 1);
        });
        
        nextBtn.addEventListener('click', () => {
            const currentIndex = getCurrentCardIndex();
            if (currentIndex < cards.length - 1) scrollToCard(currentIndex + 1);
        });
    }

    // Get currently centered card index
    function getCurrentCardIndex() {
        const carouselRect = carousel.getBoundingClientRect();
        const carouselCenter = carouselRect.left + carouselRect.width / 2;
        
        for (let i = 0; i < cards.length; i++) {
            const cardRect = cards[i].getBoundingClientRect();
            const cardCenter = cardRect.left + cardRect.width / 2;
            if (Math.abs(cardCenter - carouselCenter) < cardRect.width / 2) {
                return i;
            }
        }
        return 0;
    }

    // Initialize all carousel components
    initDots();
    initNavButtons();
    updateActiveStates(); // Set initial active state
    
    // Update event handlers
    carousel.addEventListener('scroll', debounce(updateActiveStates));
    window.addEventListener('resize', debounce(updateActiveStates));
    
    // Update on scroll with debounce
    let scrollTimeout;
    carousel.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(updateActiveStates, 100);
    });

    // Update on window resize
    window.addEventListener('resize', () => {
        updateActiveStates();
    });
}