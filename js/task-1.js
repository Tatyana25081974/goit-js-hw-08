// Отримуємо весь список категорій
const categoriesList = document.getElementById('categories');

// Отримуємо всі елементи li.item (категорії)
const categories = categoriesList.querySelectorAll('li.item');

// Виводимо кількість категорій
console.log(`Кількість категорій: ${categories.length}`);

// Перебираємо кожну категорію
categories.forEach(category => {
  // Отримуємо заголовок h2 для кожної категорії
  const categoryTitle = category.querySelector('h2').textContent;

  // Отримуємо всі елементи li в категорії
  const categoryItems = category.querySelectorAll('ul li');

  // Виводимо назву категорії та кількість елементів
  console.log(`Категорія: ${categoryTitle}`);
  console.log(`Кількість елементів: ${categoryItems.length}`);
});