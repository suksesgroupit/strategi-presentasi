/**
 * Navigation Module
 * Sticky navigation on scroll
 */

export function initNavigation() {
    const nav = document.querySelector('nav');
    if (!nav) return;

    let lastScrollY = 0;
    const scrollThreshold = 100;

    function handleScroll() {
        const currentScrollY = window.scrollY;

        if (currentScrollY > scrollThreshold) {
            nav.classList.add('visible');
        } else {
            nav.classList.remove('visible');
        }

        lastScrollY = currentScrollY;
    }

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Check initial position
    handleScroll();

    console.log('🧭 Navigation initialized');
}
