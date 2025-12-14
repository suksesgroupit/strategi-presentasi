/**
 * Ripple Effect Module
 * Adds material-like ripple effect on click/touch
 */

export function initRipple() {
    const rippleElements = document.querySelectorAll(
        '.impact-item, .goal-card, .skill-card, .requirement-item, .status-badge'
    );

    rippleElements.forEach(el => {
        el.addEventListener('click', createRipple);
        el.addEventListener('touchstart', createRipple, { passive: true });
    });

    function createRipple(e) {
        const element = e.currentTarget;
        const rect = element.getBoundingClientRect();

        // Get click/touch position
        let x, y;
        if (e.type === 'touchstart') {
            x = e.touches[0].clientX - rect.left;
            y = e.touches[0].clientY - rect.top;
        } else {
            x = e.clientX - rect.left;
            y = e.clientY - rect.top;
        }

        // Create ripple element
        const ripple = document.createElement('span');
        ripple.className = 'ripple';

        const size = Math.max(rect.width, rect.height);
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = (x - size / 2) + 'px';
        ripple.style.top = (y - size / 2) + 'px';

        // Add to element
        element.appendChild(ripple);

        // Remove after animation
        setTimeout(() => ripple.remove(), 600);
    }

    console.log('💫 Ripple effects initialized');
}
