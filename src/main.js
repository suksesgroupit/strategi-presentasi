/**
 * Main Entry Point
 * Imports all modules and styles
 */

// Import styles
import './styles/variables.css';
import './styles/base.css';
import './styles/layout.css';
import './styles/components.css';
import './styles/animations.css';

// Import modules
import { initShootingStars } from './scripts/shooting-stars.js';
import { initNavigation } from './scripts/navigation.js';
import { initScrollEffects } from './scripts/scroll-effects.js';

// Initialize all effects when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    initShootingStars();
    initNavigation();
    initScrollEffects();

    console.log('🚀 All effects initialized!');
});
