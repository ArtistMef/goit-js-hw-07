const categoriesList = document.getElementById('categories');

const categoryItems = categoriesList.querySelectorAll('li.item');
console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach((item) => {

    const categoryTitle= item.querySelector('h2');
    const categoryLi = item.querySelectorAll('ul > li'); 

    console.log(`Category: ${categoryTitle.textContent}`);
    console.log(`Elements: ${categoryLi.length}`);
});