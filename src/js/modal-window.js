const openBtn = document.getElementById('openModalBtn');
const closeBtn = document.getElementById('closeModalBtn');
const modalBackdrop = document.getElementById('modalBackdrop');


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
  modalOBackdrop.style.display = 'none';
  document.body.style.overflow = 'auto';
}

