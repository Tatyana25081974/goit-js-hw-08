// Функція для генерації випадкового кольору у форматі HEX
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

// Отримання елементів DOM
const body = document.body; // Елемент body
const colorSpan = document.querySelector('.color'); // Елемент для відображення кольору
const changeColorButton = document.querySelector('.change-color'); // Кнопка зміни кольору

// Обробник події на кнопку
changeColorButton.addEventListener('click', () => {
  const randomColor = getRandomHexColor(); // Генеруємо випадковий колір
  body.style.backgroundColor = randomColor; // Змінюємо колір фону <body>
  colorSpan.textContent = randomColor; // Вставляємо значення кольору у span
});
