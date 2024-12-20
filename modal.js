(() => {
    const refs = {
        // Кнопка для відкриття модального вікна
        openDialogBtn: document.querySelector("[data-dialog-open]"),
        // Кнопка для закриття модального вікна
        closeDialogBtn: document.querySelector("[data-dialog-close]"),
        // Бекдроп діалогового вікна
        dialog: document.querySelector("[data-dialog]"),
    };

    // Додаємо слухачі подій
    refs.openDialogBtn.addEventListener("click", toggleDialog);
    refs.closeDialogBtn.addEventListener("click", toggleDialog);

    // Додаткове закриття по кліку на бекдроп
    refs.dialog.addEventListener("click", (event) => {
        if (event.target === refs.dialog) {
            toggleDialog();
        }
    });

    // Додаткове закриття по клавіші "Escape"
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && refs.dialog.classList.contains("is-visible")) {
            toggleDialog();
        }
    });

    // Функція для управління відкриттям/закриттям діалогового вікна
    function toggleDialog() {
        refs.dialog.classList.toggle("is-visible");
    }
})();