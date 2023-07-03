import { getRegionWiseMeal } from './api.js';

export default async function populateItemList() {
  const meals = await getRegionWiseMeal();
  const itemList = document.getElementById('item-list');

  // Clear existing items
  itemList.innerHTML = '';

  // Iterate through the meals and create card elements for each
  meals.forEach((meal) => {
    const card = document.createElement('div');
    card.classList.add('card');

    const image = document.createElement('img');
    image.src = meal.strMealThumb;
    card.appendChild(image);

    const cardHeader = document.createElement('div');
    cardHeader.classList.add('card-header');
    card.appendChild(cardHeader);

    const name = document.createElement('h3');
    name.textContent = meal.strMeal;
    cardHeader.appendChild(name);

    const likes = document.createElement('span');
    likes.innerHTML = '<i class="fa-regular fa-heart"></i>'; // icon for liked: <i class="fa-solid fa-heart"></i>
    cardHeader.appendChild(likes);

    const likeCount = document.createElement('label');
    likeCount.innerHTML = '6 likes';
    card.appendChild(likeCount);

    const commentButton = document.createElement('button');
    commentButton.textContent = 'Comments';
    card.appendChild(commentButton);

    itemList.appendChild(card);
  });
}

// Populate the item list when the page loads
window.addEventListener('load', populateItemList);