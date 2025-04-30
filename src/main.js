import './js/modal-window';
import './js/work-tgthr-footer';
import './js/reviews.js';
import { faqProjects } from './js/faq.js';
import './js/projects-render';
import {} from 'module';

import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

// Header and Hero

import {
  toggleDarkMode,
  updateHeroPictureOnLoad,
  setupMobileMenuListeners,
} from './js/header-hero.js';

// Attach dark mode toggle to button
const toggleButton = document.getElementById('toggle-background');
toggleButton.addEventListener('click', toggleDarkMode);

// Handle hero picture visibility
window.addEventListener('load', updateHeroPictureOnLoad);
window.addEventListener('resize', updateHeroPictureOnLoad);

// Setup mobile menu listeners
setupMobileMenuListeners();

document.addEventListener('DOMContentLoaded', faqProjects);
// import {} from 'module';
