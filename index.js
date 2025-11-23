window.addEventListener('load', () => {
    document.querySelector('.preloader').classList.add('hide');
    document.body.classList.remove('loading');
});
// Перебираем все секции
document.querySelectorAll('.screen').forEach(screen => {
  const food = screen.querySelector('.food');
  const checkbox = screen.querySelector('.toggle');
  const overlay = screen.querySelector('.close-overlay');
  const productName = screen.querySelector('.product-name');

  // Следим за сменой состояния checkbox
  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      food.classList.add('blurred');
      productName.classList.add('visible');
      overlay.classList.add('active');
    } else {
      food.classList.remove('blurred');
      productName.classList.remove('visible');
      overlay.classList.remove('active');
    }
  });

  // Клик по overlay снимает чек и скрывает блюр
  overlay.addEventListener('click', () => {
    checkbox.checked = true;
    food.classList.remove('blurred');
    productName.classList.remove('visible');
    overlay.classList.remove('active');
  });
});


