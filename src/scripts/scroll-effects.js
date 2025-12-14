/**
 * Scroll Effects Module
 * Scroll reveal animations
 */

export function initScrollEffects() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all cards and sections
    document.querySelectorAll('.card, .goal-card, .skill-card, .section-header').forEach(el => {
        el.classList.add('scroll-reveal');
        observer.observe(el);
    });

    console.log('📜 Scroll effects initialized');
}
