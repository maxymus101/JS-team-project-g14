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
  setupMobileMenuListeners,
} from './js/header-hero.js';

document
  .getElementById('toggle-background')
  .addEventListener('click', toggleDarkMode);

setupMobileMenuListeners();
document.addEventListener('DOMContentLoaded', faqProjects);
// import {} from 'module';
