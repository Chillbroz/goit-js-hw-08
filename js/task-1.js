const categories = document.querySelector('#categories');

console.log(`Number of categories: ${categories.children.length}`);

const categoryItems = document.querySelectorAll('.item');

categoryItems.forEach(category => {
  const categoryName = category.querySelector('h2').textContent;
  const elements = category.querySelectorAll('ul li');
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${elements.length}`);
});
