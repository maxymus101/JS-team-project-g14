import Swiper from 'swiper';
import 'swiper/css';

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
    alert('Oops! Failed to load reviews. Please try again later.');
  }
}

function renderReviews(reviews) {
  const list = document.getElementById('reviews-list');
  list.innerHTML = '';

  reviews.forEach(({ avatar_url, author, review }) => {
    const li = document.createElement('li');
    li.className = 'swiper-slide';
    li.innerHTML = `
      <p class="review-text">${review}</p>
      <div class="review-author">
        <img src="${avatar_url}" alt="${author}">
        <div class="review-author-name">${author}</div>
      </div>
    `;
    list.appendChild(li);
  });
}

function initSwiper() {
  const swiper = new Swiper('.reviews-swiper', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    navigation: {
      nextEl: '.reviews-button-next',
      prevEl: '.reviews-button-prev',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    mousewheel: true,
    on: {
      reachEnd: function () {
        document
          .querySelector('.reviews-button-next')
          .classList.add('swiper-button-disabled');
      },
      reachBeginning: function () {
        document
          .querySelector('.reviews-button-prev')
          .classList.add('swiper-button-disabled');
      },
      fromEdge: function () {
        document
          .querySelector('.reviews-button-next')
          .classList.remove('swiper-button-disabled');
        document
          .querySelector('.reviews-button-prev')
          .classList.remove('swiper-button-disabled');
      },
    },
  });
}
