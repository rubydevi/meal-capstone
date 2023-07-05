import {
  getRegionWiseMeal, getLikesCount, createApp, addLike,
} from './api.js';

const populateItemList = async () => {
  // Retrieve the app ID
  const appID = await createApp();
  const meals = await getRegionWiseMeal();
  const itemList = document.getElementById('item-list');

  // Clear existing items
  itemList.innerHTML = '';

  // Iterate through the meals and create card elements for each
  meals.forEach(async (meal) => {
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
    likes.addEventListener('click', async () => {
      await addLike(appID, meal.idMeal);
      const likeCount = card.querySelector('.card-label'); // Find the like count label within the card
      if (likeCount) {
        const count = await getLikesCount(appID, meal.idMeal);
        likeCount.innerHTML = `${count} likes`; // Update the like count label
      }
    });
    cardHeader.appendChild(likes);

    const likeCount = document.createElement('label');
    likeCount.classList.add('card-label');
    const count = await getLikesCount(appID, meal.idMeal);
    likeCount.innerHTML = `${count} likes`;
    card.appendChild(likeCount);

    const commentButton = document.createElement('button');
    commentButton.textContent = 'Comments';
    card.appendChild(commentButton);

    itemList.appendChild(card);
  });
};

export default populateItemList;