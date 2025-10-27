// ===========================================
// Main JavaScript File
// ===========================================

document.addEventListener('DOMContentLoaded', function() {
    // Initialize GSAP animations
    initAnimations();
    
    // Initialize scroll effects
    initScrollEffects();
    
    // Initialize mobile menu
    initMobileMenu();
});

// ===========================================
// GSAP Animations
// ===========================================

function initAnimations() {
    // Set initial states for animations
    gsap.set('.c-hero__title', { opacity: 0, y: 50 });
    gsap.set('.c-hero .c-btn', { opacity: 0, y: 30 });
    gsap.set('.c-search', { opacity: 0, y: 40 });
    gsap.set('.c-section__title', { opacity: 0, y: 30 });
    gsap.set('.c-destinations__item', { opacity: 0, y: 50 });
    gsap.set('.c-hotels__item', { opacity: 0, y: 50 });
    gsap.set('.c-travel-tips__item', { opacity: 0, y: 50 });
    gsap.set('.c-activities__item', { opacity: 0, y: 50 });
    gsap.set('.c-about__content', { opacity: 0, y: 50 });
    gsap.set('.c-about__img', { opacity: 0, y: 50 });

    // Hero section animation
    const heroTimeline = gsap.timeline({ delay: 0.5 });
    heroTimeline
        .to('.c-hero__title', { 
            opacity: 1, 
            y: 0, 
            duration: 1, 
            ease: 'power2.out' 
        })
        .to('.c-hero .c-btn', { 
            opacity: 1, 
            y: 0, 
            duration: 0.8, 
            ease: 'power2.out' 
        }, '-=0.5')
        .to('.c-search', { 
            opacity: 1, 
            y: 0, 
            duration: 0.8, 
            ease: 'power2.out' 
        }, '-=0.3');

    // Scroll-triggered animations
    gsap.registerPlugin(ScrollTrigger);

    // Section titles animation
    gsap.to('.c-section__title', {
        scrollTrigger: {
            trigger: '.c-section__title',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out'
    });

    // Destinations animation
    gsap.to('.c-destinations__item', {
        scrollTrigger: {
            trigger: '.c-destinations',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        stagger: 0.1
    });

    // Hotels animation
    gsap.to('.c-hotels__item', {
        scrollTrigger: {
            trigger: '.c-hotels',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        stagger: 0.1
    });

    // Travel tips animation
    gsap.to('.c-travel-tips__item', {
        scrollTrigger: {
            trigger: '.c-travel-tips',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        stagger: 0.2
    });

    // Activities animation
    gsap.to('.c-activities__item', {
        scrollTrigger: {
            trigger: '.c-activities',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        stagger: 0.1
    });

    // About section animation
    gsap.to('.c-about__content', {
        scrollTrigger: {
            trigger: '.c-about',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        },
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    });

    gsap.to('.c-about__img', {
        scrollTrigger: {
            trigger: '.c-about',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        },
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    });

    // Button hover animations
    document.querySelectorAll('.c-btn').forEach(button => {
        button.addEventListener('mouseenter', () => {
            gsap.to(button, { 
                scale: 1.05, 
                duration: 0.3, 
                ease: 'power2.out' 
            });
        });

        button.addEventListener('mouseleave', () => {
            gsap.to(button, { 
                scale: 1, 
                duration: 0.3, 
                ease: 'power2.out' 
            });
        });
    });

    // Card hover animations
    document.querySelectorAll('.c-destinations__item, .c-hotels__item, .c-activities__item').forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, { 
                y: -10, 
                duration: 0.3, 
                ease: 'power2.out' 
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, { 
                y: 0, 
                duration: 0.3, 
                ease: 'power2.out' 
            });
        });
    });
}

// ===========================================
// Scroll Effects
// ===========================================

function initScrollEffects() {
    // Header scroll effect
    let lastScrollY = window.scrollY;
    const header = document.querySelector('.l-header');

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            header.classList.add('l-header--scrolled');
        } else {
            header.classList.remove('l-header--scrolled');
        }

        lastScrollY = currentScrollY;
    });

    // Parallax effect for hero background
    gsap.to('.l-hero__bg-img', {
        scrollTrigger: {
            trigger: '.l-hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 1
        },
        y: '50%',
        ease: 'none'
    });

    // Floating animation for search form
    gsap.to('.c-search', {
        y: '10px',
        duration: 2,
        ease: 'power2.inOut',
        yoyo: true,
        repeat: -1
    });
}

// ===========================================
// Mobile Menu
// ===========================================

function initMobileMenu() {
    const mobileMenuBtn = document.querySelector('.c-mobile-menu-btn');
    const nav = document.querySelector('.c-header__nav');
    
    if (mobileMenuBtn && nav) {
        mobileMenuBtn.addEventListener('click', (e) => {
            e.preventDefault();
            nav.classList.toggle('c-header__nav--active');
            mobileMenuBtn.classList.toggle('c-mobile-menu-btn--active');
            
            // Prevent body scroll when menu is open
            if (nav.classList.contains('c-header__nav--active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
        
        // Close menu on resize to desktop
        window.addEventListener('resize', () => {
            if (window.innerWidth > 960) {
                nav.classList.remove('c-header__nav--active');
                mobileMenuBtn.classList.remove('c-mobile-menu-btn--active');
                document.body.style.overflow = '';
            }
        });
    }
}

// ===========================================
// Utility Functions
// ===========================================

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            gsap.to(window, {
                duration: 1,
                scrollTo: target,
                ease: 'power2.inOut'
            });
        }
    });
});






