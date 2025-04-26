import { projectsData } from './my-project.js';

const projectsList = document.getElementById('projects-list');
const loadMoreBtn = document.getElementById('load-more');

let currentIndex = 0;
const itemsPerPage = 3;

function renderProjects() {
  const nextProjects = projectsData.slice(currentIndex, currentIndex + itemsPerPage);

  nextProjects.forEach(({ title, image, stack, link }) => {
    const projectCard = document.createElement('li');
    projectCard.className = 'project-card';

    projectCard.innerHTML = `
      <img src="${image}" alt="${title}" class="project-image" />
      <div class="project-info">
        <div class="project-text">
          <p class="project-stack">${stack}</p>
          <h3 class="project-title">${title}</h3>
        </div>
        <a href="${link}" target="_blank" class="visit-btn">
          VISIT <svg class="visit-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="#00B068" d="M14 3h7v7h-2V6.41l-9.29 9.3l-1.42-1.42L17.59 5H14V3Z"/></svg>
        </a>
      </div>
    `;

    projectsList.appendChild(projectCard);
  });

  currentIndex += itemsPerPage;

  if (currentIndex >= projectsData.length) {
    loadMoreBtn.style.display = 'none';
  }
}

loadMoreBtn.addEventListener('click', renderProjects);

renderProjects();
