// Отримання елементів
const overlay = document.querySelector('.overlay'); // Контейнер модального вікна
const dialogBox = document.querySelector('.dialog-box'); // Саме модальне вікно
const openButton = document.querySelector('[data-dialog]'); // Кнопка для відкриття
const closeButton = document.querySelector('[data-dialog-close]'); // Кнопка для закриття

// Функція для відкриття модального вікна
function openModal() {
    overlay.classList.add('is-open');
    document.body.style.overflow = 'hidden'; // Блокує прокручування фону
}

// Функція для закриття модального вікна
function closeModal() {
    overlay.classList.remove('is-open');
    document.body.style.overflow = ''; // Відновлює прокручування фону
}

// Обробник для кнопки відкриття
openButton.addEventListener('click', openModal);

// Обробник для кнопки закриття
closeButton.addEventListener('click', closeModal);

// Закриття модального вікна при кліку на фон
overlay.addEventListener('click', (event) => {
    if (event.target === overlay) {
        closeModal();
    }
});

// Закриття модального вікна при натисканні клавіші Esc
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && overlay.classList.contains('is-open')) {
        closeModal();
    }
});