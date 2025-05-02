// ====== DOM Elements ======
const toggleButton = document.getElementById('toggle-background');
const whiteIcon = document.querySelector('.toggle-icon-white');
const blackIcon = document.querySelector('.toggle-icon-black');
const openMenuBtn = document.getElementById('mobile-burger-menu');
const closeMenuBtn = document.querySelector('.modal-close-btn');
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelectorAll('.mobil-menu-list a');

// ====== Dark Mode Toggle ======
export function toggleDarkMode() {
  const isNowDark = document.body.classList.toggle('dark-mode');

  whiteIcon.classList.toggle('is-hidden', isNowDark);
  blackIcon.classList.toggle('is-hidden', !isNowDark);
}

// ====== Mobile Menu Functions ======
export function openMobileMenu() {
  mobileMenu.classList.add('active');
  document.body.classList.add('no-scroll');
}

export function closeMobileMenu() {
  mobileMenu.classList.remove('active');
  document.body.classList.remove('no-scroll');
}

export function setupMobileMenuListeners() {
  openMenuBtn.addEventListener('click', openMobileMenu);
  closeMenuBtn.addEventListener('click', closeMobileMenu);
  navLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });
}
