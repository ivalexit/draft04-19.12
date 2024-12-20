const modalBackdrop = document.querySelector('.backdrop');
const openModalBtn = document.querySelector('[data-modal-open]');
const closeModalBtn = document.querySelector('[data-modal-close]');

// Відкриття модального вікна
function openModal() {
  modalBackdrop.classList.add('is-open');
  document.body.style.overflow = 'hidden';
}

// Закриття модального вікна
function closeModal() {
  modalBackdrop.classList.remove('is-open');
  document.body.style.overflow = '';
}

// Слухачі подій
openModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);

// Закриття по кліку на backdrop
modalBackdrop.addEventListener('click', (event) => {
  if (event.target === modalBackdrop) {
    closeModal();
  }
});

// Закриття по Escape
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modalBackdrop.classList.contains('is-open')) {
    closeModal();
  }
});