import Swiper from 'swiper';
import 'swiper/css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { fetchReviews } from './api.js';

document.addEventListener('DOMContentLoaded', () => {
  initReviews();
});

async function initReviews() {
  const list = document.getElementById('reviews-list');

  if (!list) {
    console.error('Element #reviews-list not found');
    return;
  }

  try {
    const reviews = await fetchReviews();
    renderReviews(reviews);
    initSwiper();
  } catch (error) {
    console.error('Fetching error:', error);
    list.innerHTML = '<p class="error-message">Not found</p>';
    iziToast.error({
      title: 'Error',
      message: 'Oops! Failed to load reviews. Please try again later.',
      position: 'topRight',
      timeout: 5000,
    });

    // Приховуємо навігаційні кнопки
    const buttonsBlock = document.querySelector('.reviews-buttons');
    if (buttonsBlock) {
      buttonsBlock.style.display = 'none';
    }
  }
}

function renderReviews(reviews) {
  const list = document.getElementById('reviews-list');
  list.innerHTML = '';

  reviews.forEach(({ avatar_url, author, review }) => {
    const li = document.createElement('li');
    li.className = 'swiper-slide reviews-item';
    li.innerHTML = `
      <div class="reviews-card">
        <p class="reviews-text">${review}</p>
        <div class="reviews-author">
          <img src="${avatar_url}" alt="${author}">
          <p class="reviews-author-name">${author}</p>
        </div>
      </div>
    `;
    list.appendChild(li);
  });
}

let swiperInstance; // Змінна для доступу до Swiper

function initSwiper() {
  swiperInstance = new Swiper('.reviews-swiper', {
    slidesPerView: 'auto',
    spaceBetween: 32,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },
    mousewheel: true,
    breakpoints: {
      360: {
        spaceBetween: 16,
      },
      768: {
        spaceBetween: 32,
      },
      1280: {
        spaceBetween: 32,
      },
    },
    on: {
      init() {
        // Додаємо дизейбл для попередньої кнопки одразу при старті
        const prevButton = document.querySelector('.swiper-button-prev');
        if (prevButton) {
          prevButton.classList.add('swiper-button-disabled');
        }
      },
      reachEnd() {
        const nextButton = document.querySelector('.swiper-button-next');
        if (nextButton) nextButton.classList.add('swiper-button-disabled');
      },
      reachBeginning() {
        const prevButton = document.querySelector('.swiper-button-prev');
        if (prevButton) prevButton.classList.add('swiper-button-disabled');
      },
      fromEdge() {
        const nextButton = document.querySelector('.swiper-button-next');
        const prevButton = document.querySelector('.swiper-button-prev');
        if (nextButton) nextButton.classList.remove('swiper-button-disabled');
        if (prevButton) prevButton.classList.remove('swiper-button-disabled');
      },
    },
  });

  addNavigationListeners();
  addKeyboardListeners();
}

function addNavigationListeners() {
  const nextButton = document.querySelector('.swiper-button-next');
  const prevButton = document.querySelector('.swiper-button-prev');

  if (nextButton) {
    nextButton.addEventListener('click', () => {
      if (!nextButton.classList.contains('swiper-button-disabled')) {
        swiperInstance.slideNext();
      }
    });
    nextButton.addEventListener('keydown', e => {
      if (
        (e.key === 'Enter' || e.key === ' ') &&
        !nextButton.classList.contains('swiper-button-disabled')
      ) {
        e.preventDefault();
        swiperInstance.slideNext();
      }
    });
  }

  if (prevButton) {
    prevButton.addEventListener('click', () => {
      if (!prevButton.classList.contains('swiper-button-disabled')) {
        swiperInstance.slidePrev();
      }
    });
    prevButton.addEventListener('keydown', e => {
      if (
        (e.key === 'Enter' || e.key === ' ') &&
        !prevButton.classList.contains('swiper-button-disabled')
      ) {
        e.preventDefault();
        swiperInstance.slidePrev();
      }
    });
  }
}

function addKeyboardListeners() {
  const swiperContainer = document.querySelector('.reviews-swiper');

  if (swiperContainer) {
    swiperContainer.addEventListener('keydown', event => {
      if (event.key === 'ArrowRight') {
        swiperInstance.slideNext();
      } else if (event.key === 'ArrowLeft') {
        swiperInstance.slidePrev();
      }
    });
  }
}
