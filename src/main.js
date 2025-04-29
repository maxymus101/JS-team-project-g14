
import { } from 'module';

// Heasder and Hero

import { toggleDarkMode, updateHeroPictureOnLoad, setupMobileMenuListeners } from './js/header-hero.js';

// Attach dark mode toggle to button
const toggleButton = document.getElementById('toggle-background');
toggleButton.addEventListener('click', toggleDarkMode);

// Handle hero picture visibility
window.addEventListener('load', updateHeroPictureOnLoad);
window.addEventListener('resize', updateHeroPictureOnLoad);

// Setup mobile menu listeners
setupMobileMenuListeners();

