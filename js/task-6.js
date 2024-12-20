// Функція для генерації випадкового кольору у форматі HEX
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

// Отримуємо елементи з DOM
const controls = document.querySelector("#controls");
const input = controls.querySelector("input");
const createButton = controls.querySelector("[data-create]");
const destroyButton = controls.querySelector("[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

// Функція для створення колекції елементів
function createBoxes(amount) {
  // Очистимо попередню колекцію
  destroyBoxes();

  // Створюємо масив для зберігання елементів
  const boxes = [];
  let size = 30; // Початковий розмір

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div"); // Створюємо <div>
    box.style.width = `${size}px`; // Встановлюємо ширину
    box.style.height = `${size}px`; // Встановлюємо висоту
    box.style.backgroundColor = getRandomHexColor(); // Задаємо випадковий колір
    box.style.margin = "5px";
    size += 10; // Збільшуємо розмір на 10px для наступного елемента
    boxes.push(box); // Додаємо елемент у масив
  }

  // Додаємо всі елементи в DOM за одну операцію
  boxesContainer.append(...boxes);
}

// Функція для очищення колекції елементів
function destroyBoxes() {
  boxesContainer.innerHTML = ""; // Очищаємо вміст контейнера
}

// Обробник події для кнопки Create
createButton.addEventListener("click", () => {
  const amount = parseInt(input.value); // Отримуємо значення з input
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount); // Створюємо колекцію
    input.value = ""; // Очищаємо значення input
  } else {
    alert("Please enter a number between 1 and 100."); // Виводимо попередження
  }
});

// Обробник події для кнопки Destroy
destroyButton.addEventListener("click", destroyBoxes);
