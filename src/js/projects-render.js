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
          <div class="project-title-wrapper">
            <h3 class="project-title">${title}</h3>
            <a href="${link}" target="_blank" class="visit-btn">
             VISIT
             <svg class="visit-icon" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.75 16.25L16.25 1.75M16.25 1.75H2.75M16.25 1.75V15.25" stroke="#00B068" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
             </svg>
            </a>
          </div>
        </div>
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
