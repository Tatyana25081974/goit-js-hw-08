// Отримуємо посилання на форму
const loginForm = document.querySelector('.login-form');

// Додаємо обробник події submit
loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Забороняємо перезавантаження сторінки

  // Отримуємо значення полів форми
  const email = event.target.elements.email.value.trim();
  const password = event.target.elements.password.value.trim();

  // Перевіряємо, чи всі поля заповнені
  if (!email || !password) {
    alert('All form fields must be filled in');
    return; // Зупиняємо виконання функції
  }

  // Формуємо об'єкт із даними
  const formData = {
    email,
    password,
  };

  // Виводимо об'єкт у консоль
  console.log(formData);

  // Очищуємо форму
  loginForm.reset();
});
