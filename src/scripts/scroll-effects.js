/**
 * Scroll Effects Module
 * Scroll reveal animations with various effects
 */

export function initScrollEffects() {
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');

                // Once visible, stop observing (animate only once)
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Cards - fade up
    document.querySelectorAll('.card').forEach(el => {
        el.classList.add('scroll-reveal');
        observer.observe(el);
    });

    // Section headers - fade up
    document.querySelectorAll('.section-header').forEach(el => {
        el.classList.add('scroll-reveal');
        observer.observe(el);
    });

    // Goal cards - scale
    document.querySelectorAll('.goal-card').forEach((el, i) => {
        el.classList.add('scroll-reveal-scale');
        el.style.transitionDelay = `${i * 0.1}s`;
        observer.observe(el);
    });

    // Skill cards - scale with stagger
    document.querySelectorAll('.skill-card').forEach((el, i) => {
        el.classList.add('scroll-reveal-scale');
        el.style.transitionDelay = `${i * 0.15}s`;
        observer.observe(el);
    });

    // Requirement items - slide from left
    document.querySelectorAll('.requirement-item').forEach((el, i) => {
        el.classList.add('scroll-reveal-left');
        el.style.transitionDelay = `${i * 0.1}s`;
        observer.observe(el);
    });

    // Personal section - alternate directions
    const personalContent = document.querySelector('.personal-content');
    const personalImage = document.querySelector('.personal-image');

    if (personalContent) {
        personalContent.classList.add('scroll-reveal-left');
        observer.observe(personalContent);
    }

    if (personalImage) {
        personalImage.classList.add('scroll-reveal-right');
        observer.observe(personalImage);
    }

    // Quote section
    const quoteSection = document.querySelector('.quote-section');
    if (quoteSection) {
        observer.observe(quoteSection);
    }

    // Comparison rows - stagger
    document.querySelectorAll('.comparison-row:not(.header)').forEach((el, i) => {
        el.classList.add('scroll-reveal');
        el.style.transitionDelay = `${i * 0.1}s`;
        observer.observe(el);
    });

    console.log('📜 Scroll reveal effects initialized');
}
