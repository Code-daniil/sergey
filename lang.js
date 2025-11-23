const langBtn = document.getElementById("langBtn");
const langMenu = document.getElementById("langMenu");
const langText = document.getElementById("langText");

// Открытие меню (если кнопка есть)
if (langBtn) {
    langBtn.addEventListener("click", () => {
        langMenu.style.display =
            langMenu.style.display === "flex" ? "none" : "flex";
    });
}

// Выбор языка
document.querySelectorAll(".lang-menu div").forEach(item => {
    item.addEventListener("click", () => {
        const lang = item.dataset.lang;

        // меняем текст на кнопке
        if (langText) langText.textContent = lang.toUpperCase();

        // заменяем текст на странице
        document.querySelectorAll("[data-en]").forEach(el => {
            el.textContent = el.getAttribute(`data-${lang}`);
        });

        // сохраняем выбранный язык
        localStorage.setItem("lang", lang);

        // закрываем меню
        if (langMenu) langMenu.style.display = "none";
    });
});

// Загружаем сохранённый язык при входе
window.addEventListener("load", () => {
    const lang = localStorage.getItem("lang") || "en";

    if (langText) langText.textContent = lang.toUpperCase();

    document.querySelectorAll("[data-en]").forEach(el => {
        el.textContent = el.getAttribute(`data-${lang}`);
    });
});