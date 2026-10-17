/* =========================================================
   REAVEN - PORTFOLIO SCRIPT
   -----------------------------------------------------------
   Table of Contents:
   1. Translations (EN / AR)
   2. Project Data
   3. Language System (i18n + RTL)
   4. Project Rendering & Category Filtering
   5. Navbar Scroll Effect + Mobile Menu
   6. 3D Tilt Effect on Project Cards (pointer devices only)
   7. Custom Cursor (pointer devices only)
   8. Scroll Progress Bar
   9. Reveal on Scroll Animation
   10. Page Loader + Hero Entrance Animation
   11. WhatsApp Quick-Contact Links
   12. Toast Notification Helper
   13. Copy Email to Clipboard
   14. Back to Top Button
   15. Mobile Sticky Contact Bar
   ========================================================= */


/* =========================================================
   1. TRANSLATIONS (EN / AR)
   ========================================================= */

const translations = {
    en: {
        nav: {
            home: "Home",
            about: "About",
            projects: "Projects",
            contact: "Contact",
            cta: "Hire Me"
        },
        hero: {
            greeting: "Hi, I'm",
            subtitle: "Web developer building modern websites for businesses and brands.",
            ctaPrimary: "View My Work",
            ctaSecondary: "Let's Work Together",
            scroll: "scroll",
            status: "Available for new projects"
        },
        mobileBar: {
            whatsapp: "WhatsApp",
            email: "Email"
        },
        toast: {
            emailCopied: "Email copied!"
        },
        about: {
            label: "01 — ABOUT",
            titlePrefix: "Who is",
            text: "I'm a web developer who builds clean, modern, responsive websites that help businesses and brands look professional online — and make it easy for visitors to become customers.",
            highlight: "2+ years building websites, backed by a game-development background."
        },
        projects: {
            label: "02 — PROJECTS",
            title: "Latest Work",
            emptyState: "More projects in this category are coming soon.",
            followupText: "Like what you see?",
            followupLink: "Let's work together",
            viewProject: "View Project"
        },
        category: {
            all: "All",
            websites: "Websites",
            webapps: "Web Apps",
            games: "Games"
        },
        contact: {
            label: "03 — CONTACT",
            title: "Let's Talk",
            heading: "Have a project in mind?",
            text: "Let's talk about it. If you have an idea and want to turn it into a real website, get in touch — I'll get back to you as soon as I can.",
            button: "Contact Me",
            findMe: "Find me everywhere.",
            viewProjects: "View My Projects",
            viewProjectsDesc: "See all my work on GitHub.",
            linkedin: "YouTube",
            instagram: "Instagram",
            twitter: "Facebook",
            tiktok: "TikTok",
            email: "Email"
        },
        footer: {
            ctaHeading: "Have a project in mind?",
            ctaText: "Let's build something great together.",
            ctaButton: "Start a Project",
            tagline: "Web Developer building modern digital experiences for businesses and brands.",
            navHeading: "Navigation",
            projectsHeading: "Projects",
            connectHeading: "Connect",
            copyright: "© 2026 Reaven. All rights reserved.",
            credit: "Designed & Developed by Reaven"
        }
    },

    ar: {
        nav: {
            home: "الرئيسية",
            about: "عني",
            projects: "المشاريع",
            contact: "تواصل معي",
            cta: "كلمني"
        },
        hero: {
            greeting: "أنا",
            subtitle: "مطور مواقع بعمل مواقع حديثة للشركات والمشاريع والبراندات.",
            ctaPrimary: "شوف شغلي",
            ctaSecondary: "يلا نشتغل مع بعض",
            scroll: "مرر لأسفل",
            status: "متاح لمشاريع جديدة"
        },
        mobileBar: {
            whatsapp: "واتساب",
            email: "إيميل"
        },
        toast: {
            emailCopied: "تم نسخ الإيميل!"
        },
        about: {
            label: "01 — نبذة عني",
            titlePrefix: "مين هو",
            text: "أنا مطور مواقع بعمل مواقع نظيفة وحديثة ومتجاوبة بتساعد الشركات والبراندات تظهر باحترافية أونلاين، وتسهّل على الزائر إنه يتحول لعميل.",
            highlight: "أكتر من سنتين في تطوير المواقع، مبنية على خلفية في تطوير الألعاب."
        },
        projects: {
            label: "02 — المشاريع",
            title: "أحدث أعمالي",
            emptyState: "مشاريع أكتر في القسم ده جاية قريب.",
            followupText: "عجبك اللي شفته؟",
            followupLink: "يلا نشتغل مع بعض",
            viewProject: "شاهد المشروع"
        },
        category: {
            all: "الكل",
            websites: "مواقع",
            webapps: "تطبيقات ويب",
            games: "ألعاب"
        },
        contact: {
            label: "03 — تواصل معي",
            title: "يلا نتكلم",
            heading: "عندك مشروع في بالك؟",
            text: "يلا نتكلم عنه. لو عندك فكرة وعايز تحولها لموقع حقيقي، كلمني وهرد عليك في أقرب وقت.",
            button: "كلمني",
            findMe: "تلاقيني في كل مكان.",
            viewProjects: "شاهد مشاريعي",
            viewProjectsDesc: "شوف كل شغلي على GitHub.",
            linkedin: "يوتيوب",
            instagram: "إنستجرام",
            twitter: "فيسبوك",
            tiktok: "تيك توك",
            email: "إيميل"
        },
        footer: {
            ctaHeading: "عندك مشروع في بالك؟",
            ctaText: "يلا نبني حاجة حلوة مع بعض.",
            ctaButton: "ابدأ مشروعك",
            tagline: "مطور مواقع بيصمم تجارب رقمية حديثة للشركات والبراندات.",
            navHeading: "التنقل",
            projectsHeading: "المشاريع",
            connectHeading: "تواصل",
            copyright: "© 2026 Reaven. جميع الحقوق محفوظة.",
            credit: "تصميم وتطوير Reaven"
        }
    }
};


/* =========================================================
   QUICK CONTACT SETTINGS
   -----------------------------------------------------------
   Replace with your real WhatsApp number in international
   format, digits only (country code, no "+", no spaces,
   no dashes). Example for Egypt: "201001234567"
   ========================================================= */

const WHATSAPP_NUMBER = "201000000000"; // TODO: put your real number here


/* =========================================================
   2. PROJECT DATA
   ========================================================= */

const projects = [
    {
        category: "websites",
        image: "images/project-personal-site.jpg",
        link: "https://math-tutor-pro--powerdv9.replit.app/",
        title: { en: "Personal Website", ar: "موقع شخصي" },
        type: { en: "Personal Website", ar: "موقع شخصي" },
        technologies: "HTML • CSS • JavaScript",
        description: {
            en: "A clean personal website built to introduce a teacher and their courses to visitors.",
            ar: "موقع شخصي بسيط بيعرّف الزوار بمدرّس وبالكورسات اللي بيقدمها."
        }
    },
    {
        category: "websites",
        image: "images/project-restaurant.jpg",
        link: "https://abdocorv.github.io/luuma/",
        title: { en: "Restaurant Website", ar: "موقع مطعم" },
        type: { en: "Business Website", ar: "موقع تجاري" },
        technologies: "HTML • CSS • JavaScript",
        description: {
            en: "A modern, responsive restaurant website with a menu, gallery, and reservation details.",
            ar: "موقع مطعم حديث ومتجاوب فيه المنيو والمعرض وتفاصيل الحجز."
        }
    },
    {
        category: "websites",
        image: "images/project-coffee.jpg",
        link: "#",
        title: { en: "Coffee Shop Website", ar: "موقع محل قهوة" },
        type: { en: "Business Website", ar: "موقع تجاري" },
        technologies: "HTML • CSS • JavaScript",
        description: {
            en: "A warm, welcoming website for a coffee shop, designed to showcase its menu and vibe.",
            ar: "موقع دافئ ومريح لمحل قهوة، اتصمم عشان يعرض المنيو وجو المكان."
        }
    }
];


/* =========================================================
   3. LANGUAGE SYSTEM (i18n + RTL)
   ========================================================= */

let currentLang = localStorage.getItem('reaven-lang') || 'en';
let currentCategory = 'all';

function t(lang, path) {
    return path.split('.').reduce((obj, key) => (obj ? obj[key] : undefined), translations[lang]);
}

function applyTranslations(lang) {
    // Text content for every element carrying a data-i18n key
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const value = t(lang, el.getAttribute('data-i18n'));
        if (value !== undefined) el.textContent = value;
    });

    // Standalone spans that sit next to the static "Reaven" brand name
    const heroGreeting = document.getElementById('heroGreeting');
    if (heroGreeting) heroGreeting.textContent = t(lang, 'hero.greeting');

    const aboutTitlePrefix = document.getElementById('aboutTitlePrefix');
    if (aboutTitlePrefix) aboutTitlePrefix.textContent = t(lang, 'about.titlePrefix');

    // Language toggle button always shows the *other* language name
    const langBtn = document.getElementById('langBtn');
    if (langBtn) langBtn.textContent = lang === 'en' ? 'العربية' : 'English';
}

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('reaven-lang', lang);

    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.body.classList.toggle('font-ar', lang === 'ar');

    applyTranslations(lang);
    renderCategories();
    renderProjects();
}

document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLang);

    const langBtn = document.getElementById('langBtn');
    if (langBtn) {
        langBtn.addEventListener('click', () => {
            setLanguage(currentLang === 'en' ? 'ar' : 'en');
        });
    }
});


/* =========================================================
   4. PROJECT RENDERING & CATEGORY FILTERING
   ========================================================= */

function getAvailableCategories() {
    const present = new Set(projects.map(p => p.category));
    // Preserve a stable, meaningful order; only show categories that have content
    return ['all', 'websites', 'webapps', 'games'].filter(cat => cat === 'all' || present.has(cat));
}

function renderCategories() {
    const wrap = document.getElementById('projectCategories');
    if (!wrap) return;

    wrap.innerHTML = '';

    getAvailableCategories().forEach(cat => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'category-btn' + (cat === currentCategory ? ' active' : '');
        btn.setAttribute('role', 'tab');
        btn.setAttribute('aria-selected', cat === currentCategory ? 'true' : 'false');
        btn.textContent = t(currentLang, `category.${cat}`);
        btn.addEventListener('click', () => {
            currentCategory = cat;
            renderCategories();
            renderProjects();
        });
        wrap.appendChild(btn);
    });
}

function renderProjects() {
    const grid = document.getElementById('projectsGrid');
    const emptyState = document.getElementById('projectsEmpty');
    if (!grid) return;

    grid.innerHTML = '';

    const visible = projects.filter(p => currentCategory === 'all' || p.category === currentCategory);

    if (visible.length === 0) {
        grid.hidden = true;
        if (emptyState) emptyState.hidden = false;
        return;
    }

    grid.hidden = false;
    if (emptyState) emptyState.hidden = true;

    visible.forEach(project => {
        const card = document.createElement('a');
        card.className = 'project-card';
        card.href = project.link;
        if (project.link && project.link !== '#') card.target = '_blank';

        card.innerHTML = `
            <div class="card-image">
                <img src="${project.image}" alt="${project.title[currentLang]}">
            </div>
            <div class="card-content">
                <span class="card-type">${project.type[currentLang]}</span>
                <h3>${project.title[currentLang]}</h3>
                <p class="card-tech">${project.technologies}</p>
                <p class="card-desc">${project.description[currentLang]}</p>
                <span class="card-link">${t(currentLang, 'projects.viewProject')} <span class="arrow"></span></span>
            </div>
        `;

        grid.appendChild(card);
    });

    attachTiltEffect();
}

// Footer "Projects" links act as category filters
document.addEventListener('click', (e) => {
    const link = e.target.closest('[data-filter-link]');
    if (!link) return;

    currentCategory = link.getAttribute('data-filter-link');
    renderCategories();
    renderProjects();
});


/* =========================================================
   5. NAVBAR SCROLL EFFECT + MOBILE MENU
   ========================================================= */

const nav = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        nav.classList.add("active");
    } else {
        nav.classList.remove("active");
    }
});

const menu = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menu.onclick = () => {
    const isOpen = navLinks.classList.toggle("active");
    menu.innerHTML = isOpen ? "✕" : "☰";
    menu.setAttribute("aria-expanded", isOpen ? "true" : "false");
};

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menu.innerHTML = "☰";
        menu.setAttribute("aria-expanded", "false");
    });
});


/* =========================================================
   6. 3D TILT EFFECT ON PROJECT CARDS (pointer devices only)
   ========================================================= */

const supportsHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

function attachTiltEffect() {
    if (!supportsHover) return;

    document.querySelectorAll(".project-card").forEach(card => {

        card.addEventListener("mousemove", (e) => {
            const rect = card.getBoundingClientRect();

            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const rotateY = ((x / rect.width) - 0.5) * 18;
            const rotateX = ((y / rect.height) - 0.5) * -18;

            card.style.transform = `
                perspective(900px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                translateY(-10px)
            `;
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform =
                "perspective(900px) rotateX(0) rotateY(0) translateY(0)";
        });

    });
}


/* =========================================================
   7. CUSTOM CURSOR (pointer devices only)
   ========================================================= */

if (supportsHover) {
    const cursor = document.querySelector(".cursor");
    const blur = document.querySelector(".cursor-blur");

    document.addEventListener("mousemove", (e) => {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";

        blur.style.left = e.clientX + "px";
        blur.style.top = e.clientY + "px";
    });

    document.addEventListener("mouseenter", (e) => {
        const item = e.target.closest("a, button, .project-card");
        if (!item) return;
        cursor.style.width = "55px";
        cursor.style.height = "55px";
        cursor.style.background = "rgba(95,99,127,.15)";
    }, true);

    document.addEventListener("mouseleave", (e) => {
        const item = e.target.closest && e.target.closest("a, button, .project-card");
        if (!item) return;
        cursor.style.width = "16px";
        cursor.style.height = "16px";
        cursor.style.background = "transparent";
    }, true);
} else {
    document.body.classList.add("no-hover");
}


/* =========================================================
   8. SCROLL PROGRESS BAR
   ========================================================= */

const progress = document.getElementById("progress-bar");

window.addEventListener("scroll", () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progressHeight = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;

    progress.style.width = progressHeight + "%";
});


/* =========================================================
   9. REVEAL ON SCROLL ANIMATION
   ========================================================= */

const reveals = document.querySelectorAll(".reveal");

function revealSection() {
    reveals.forEach(item => {
        const top = item.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (top < windowHeight - 120) {
            item.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealSection);
revealSection(); // run once on load in case content is already in view


/* =========================================================
   10. PAGE LOADER + HERO ENTRANCE ANIMATION
   ========================================================= */

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    const hero = document.querySelector(".hero");

    setTimeout(() => {
        loader.classList.add("hide");

        setTimeout(() => {
            hero.classList.add("show");
        }, 300);

    }, 1200);
});


/* =========================================================
   11. WHATSAPP QUICK-CONTACT LINKS
   ========================================================= */

document.querySelectorAll("[data-whatsapp-link]").forEach(link => {
    link.href = `https://wa.me/${+201035326978}`;
});


/* =========================================================
   12. TOAST NOTIFICATION HELPER
   ========================================================= */

let toastTimer = null;

function showToast(message) {
    const toast = document.getElementById("toast");
    if (!toast) return;

    toast.textContent = message;
    toast.classList.add("show");

    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
        toast.classList.remove("show");
    }, 2200);
}


/* =========================================================
   13. COPY EMAIL TO CLIPBOARD
   ========================================================= */

const copyEmailBtn = document.getElementById("copyEmailBtn");
const emailCard = document.getElementById("emailCard");

if (copyEmailBtn && emailCard) {
    copyEmailBtn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();

        const email = emailCard.getAttribute("data-email") || "";

        if (navigator.clipboard && email) {
            navigator.clipboard.writeText(email)
                .then(() => showToast(t(currentLang, "toast.emailCopied")))
                .catch(() => {});
        }
    });
}


/* =========================================================
   14. BACK TO TOP BUTTON
   ========================================================= */

const backToTop = document.getElementById("backToTop");

if (backToTop) {
    window.addEventListener("scroll", () => {
        backToTop.classList.toggle("show", window.scrollY > 500);
    });

    backToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}


/* =========================================================
   15. MOBILE STICKY CONTACT BAR
   ========================================================= */

const mobileContactBar = document.getElementById("mobileContactBar");

if (mobileContactBar) {
    const heroSection = document.getElementById("home");

    window.addEventListener("scroll", () => {
        const heroBottom = heroSection ? heroSection.getBoundingClientRect().bottom : 0;
        mobileContactBar.classList.toggle("show", heroBottom < 0);
    });
}
