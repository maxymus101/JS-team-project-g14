// header-hero.js

const toggleButton = document.getElementById('toggle-background');
const whiteIcon = document.querySelector('.toggle-icon-white');
const blackIcon = document.querySelector('.toggle-icon-black');
const heroSource = document.getElementById('hero-source');
const heroImg = document.getElementById('hero-img');
const heroPicture = document.getElementById('hero-picture');
const openMenuBtn = document.getElementById('mobile-burger-menu'); 
const closeMenuBtn = document.querySelector('.modal-close-btn');
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelectorAll('.mobil-menu-list a');

// Function to toggle dark mode
export function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  whiteIcon.classList.toggle('is-hidden');
  blackIcon.classList.toggle('is-hidden');

  const isDesktop = window.innerWidth >= 1280;
  const isTablet = window.innerWidth >= 768 && window.innerWidth < 1280;
  const isMobile = window.innerWidth < 768;

  if (document.body.classList.contains('dark-mode')) {
    if (isDesktop) {
      heroSource.srcset = "/img/imgdark-bg-hero-desktop@1x.webp 1x, /img/imgdark-bg-hero-desktop@2x.webp 2x";
      heroImg.src = "/img/imgdark-bg-hero-desktop@1x.webp";
      heroPicture.style.display = "block";
    } else if (isTablet) {
      heroSource.srcset = "/img/imgdark-bg-hero-tablet@1x.webp 1x, /img/imgdark-bg-hero-tablet@2x.webp 2x";
      heroImg.src = "/img/imgdark-bg-hero-tablet@1x.webp";
      heroPicture.style.display = "block";
    } else {
      heroSource.srcset = "/img/imgdark-bg-hero-mobile@1x.webp 1x, /img/imgdark-bg-hero-mobile@2x.webp 2x";
      heroImg.src = "/img/imgdark-bg-hero-mobile@1x.webp";
      heroPicture.style.display = "block";
    }
  } else {
    if (isDesktop) {
      heroSource.srcset = "/img/imghero-picture@1x.jpg 1x, /img/imghero-picture@2x.jpg 2x";
      heroImg.src = "/img/imghero-picture@1x.jpg";
      heroPicture.style.display = "block";
    } else {
      heroPicture.style.display = "none";
    }
  }
}


// Function to update hero picture on page load or resize
export function updateHeroPictureOnLoad() {
  if (!document.body.classList.contains('dark-mode')) {
    if (window.innerWidth < 1280) {
      heroPicture.style.display = "none";
    } else {
      heroPicture.style.display = "block";
    }
  }
}

// Functions to open/close mobile menu
export function openMobileMenu() {
  mobileMenu.classList.add('active');
  document.body.classList.add('no-scroll');
}

export function closeMobileMenu() {
  mobileMenu.classList.remove('active');
  document.body.classList.remove('no-scroll');
}

// Function to setup mobile menu listeners
export function setupMobileMenuListeners() {
  openMenuBtn.addEventListener('click', openMobileMenu);
  closeMenuBtn.addEventListener('click', closeMobileMenu);
  navLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });
}
