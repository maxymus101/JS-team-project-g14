const openBtn = document.querySelector('.work-together-form-btn');
const closeBtn = document.getElementById('closeModalBtn');
const modalBackdrop = document.getElementById('modalBackdrop');
const form = document.querySelector('.work-together-form');


openBtn.onclick = () => {
  modalBackdrop.style.display = 'flex';
  document.body.style.overflow = 'hidden'; 
};


closeBtn.onclick = closeModal;


modalBackdrop.onclick = (e) => {
  if (e.target === modalBackdrop) {
    closeModal();
  }
};

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
  }
});

function closeModal() {
  modalBackdrop.style.display = 'none';
  document.body.style.overflow = 'auto';
}

export default initModal;
