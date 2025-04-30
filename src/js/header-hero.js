// header-hero.js
import heroLight1x from '../img/imghero-picture@1x.jpg';
import heroLight2x from '../img/imghero-picture@2x.jpg';
import heroDarkDesktop1x from '../img/imgdark-bg-hero-desktop@1x.webp';
import heroDarkDesktop2x from '../img/imgdark-bg-hero-desktop@2x.webp';
import heroDarkTablet1x from '../img/imgdark-bg-hero-tablet@1x.webp';
import heroDarkTablet2x from '../img/imgdark-bg-hero-tablet@2x.webp';
import heroDarkMobile1x from '../img/imgdark-bg-hero-mobile@1x.webp';
import heroDarkMobile2x from '../img/imgdark-bg-hero-mobile@2x.webp';

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
      heroSource.srcset = `${heroDarkDesktop1x} 1x, ${heroDarkDesktop2x} 2x`;
      heroImg.src = heroDarkDesktop1x;
      heroPicture.style.display = "block";
    } else if (isTablet) {
      heroSource.srcset = `${heroDarkTablet1x} 1x, ${heroDarkTablet2x} 2x`;
      heroImg.src = heroDarkTablet1x;
      heroPicture.style.display = "block";
    } else {
      heroSource.srcset = `${heroDarkMobile1x} 1x, ${heroDarkMobile2x} 2x`;
      heroImg.src = heroDarkMobile1x;
      heroPicture.style.display = "block";
    }
  } else {
    if (isDesktop) {
      heroSource.srcset = `${heroLight1x} 1x, ${heroLight2x} 2x`;
      heroImg.src = heroLight1x;
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
