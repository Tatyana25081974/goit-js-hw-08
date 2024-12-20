const nameInput = document.querySelector('#name-input'); // Знаходимо інпут
const nameOutput = document.querySelector('#name-output'); // Знаходимо спан

nameInput.addEventListener('input', (event) => {
  const inputValue = event.target.value.trim(); // Очищуємо значення від пробілів
  nameOutput.textContent = inputValue || 'Anonymous'; // Підставляємо текст або "Anonymous"
});