import {
  getRegionWiseMeal, getLikesCount, createApp, addLike,
} from './api.js';
import addComment from './popup.js';
import { showLoader, hideLoader } from './loader.js';
import countItems from './counter.js';

const updateHomepageCounters = () => {
  const itemsCounter = document.getElementById('items-counter');
  itemsCounter.textContent = `( ${countItems()} )`;
};

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
    likes.innerHTML = '<i class="fa-regular fa-heart"></i>';
    cardHeader.appendChild(likes);

    const likeCountDiv = document.createElement('div');
    likeCountDiv.classList.add('card-label');

    const likeCount = document.createElement('label');
    likeCount.classList.add('label');
    const count = await getLikesCount(appID, meal.idMeal);
    likeCount.innerHTML = `${count} likes`;
    likeCountDiv.appendChild(likeCount);
    card.appendChild(likeCountDiv);

    // Add like function
    likes.addEventListener('click', async () => {
      showLoader(likeCountDiv, likeCount); // Show the loader
      await addLike(appID, meal.idMeal);
      const countLabel = card.querySelector('.label'); // Find the like count label within the card
      if (countLabel) {
        const count = await getLikesCount(appID, meal.idMeal);
        hideLoader(likeCountDiv, countLabel); // Hide the loader
        countLabel.innerHTML = `${count} likes`; // Update the like count label
      }
    });

    const commentButton = document.createElement('button');
    commentButton.textContent = 'Comments';
    commentButton.id = 'Comments';
    commentButton.setAttribute('data-btn', `${meal.idMeal}`);
    card.appendChild(commentButton);

    commentButton.addEventListener('click', (e) => {
      const id = e.target.dataset.btn;
      addComment(id, meals);
    });

    itemList.appendChild(card);

    // Update the homepage counters after each meal card is created
    updateHomepageCounters();
  });
};

export default populateItemList;
