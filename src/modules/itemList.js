import {
  getRegionWiseMeal, getLikesCount, createApp, addLike, submitComment, getComments,
} from './api.js';

import { showLoader, hideLoader } from './loader.js';
import countItems from './counter.js';
import displayCommentCount from './comment-counter.js';

// Retrieve the app ID
const appID = await createApp();

const updateHomepageCounters = () => {
  const itemsCounter = document.getElementById('items-counter');
  itemsCounter.textContent = `( ${countItems()} )`;
};

const displayComments = (comments) => {
  const commentsContainer = document.getElementById('commentsContainer');
  commentsContainer.innerHTML = '';

  if (comments.length === 0) {
    commentsContainer.innerHTML = '<p>No comments available.</p>';
  } else {
    comments.forEach((comment) => {
      const commentElement = `
        <div class="comment">
          <h4>${comment.username}</h4>
          <p>:</p>
          <p> "${comment.comment}"</p>
          <p> ${comment.date}</p>
          </div>`;
      commentsContainer.innerHTML += commentElement;
    });
  }
};

const populateItemList = async () => {
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

    const openModal = async (meal) => {
      const modal = document.getElementById('myModal');
      const modalItemDetails = document.getElementById('modal-item-details');

      // Retrieve additional item details (e.g., comments) based on the meal ID
      try {
        const comments = await getComments(appID, meal.idMeal);

        // Populate the modal with the target item's information and comments
        modalItemDetails.innerHTML = `
          <h3 class="modal-title">${meal.strMeal}</h3>
          <img class="modal-image" src="${meal.strMealThumb}" alt="${meal.strMeal}" />
          <p>Category: ${meal.strCategory}</p>
          <p>Area: ${meal.strArea}</p>
          <h3 class="comments-title">Comments</h3>
          <div class="commentSection">
            <div id="commentsContainer">
            </div>
            <form class="form-elements">
              <input type="text" id="nameInput" placeholder="Your Name" required>
              <input type="text" id="commentInput" placeholder="Your Comment" required>
              <button type="submit" id="submitCommentButton">Submit Comment</button>
            </form>
          </div>
        `;

        // Display existing comments
        displayComments(comments);
      } catch (error) {
        console.error('Failed to retrieve comments:', error);
      }

      const updateCommentCount = async () => {
        const commentCount = await displayCommentCount(appID, meal.idMeal);
        const commentsTitle = document.querySelector('.comments-title');
        if (commentsTitle) {
          commentsTitle.textContent = `Comments (${commentCount})`;
        }
      };

      const submitButton = document.getElementById('submitCommentButton');
      submitButton.addEventListener('click', async (event) => {
        event.preventDefault(); // Prevent form submission and page reload

        const nameInput = document.getElementById('nameInput');
        const commentInput = document.getElementById('commentInput');
        const name = nameInput.value;
        const comment = commentInput.value;

        try {
          // Submit the comment
          await submitComment(appID, meal.idMeal, name, comment);
          // Retrieve updated comments and display them
          const updatedComments = await getComments(appID, meal.idMeal);
          displayComments(updatedComments);
          // Clear input fields
          nameInput.value = '';
          commentInput.value = '';
        } catch (error) {
          console.error('Failed to submit comment:', error);
        }
        await updateCommentCount();
      });

      modal.style.display = 'block';
      // Display comment count
      await updateCommentCount();
    };

    commentButton.addEventListener('click', () => {
      openModal(meal);
    });
    card.appendChild(commentButton);

    itemList.appendChild(card);

    // Update the homepage counters after each meal card is created
    updateHomepageCounters();
  });
};

// Close the modal when the close button or outside modal area is clicked
window.addEventListener('click', (event) => {
  const modal = document.getElementById('myModal');
  if (event.target === modal || event.target.classList.contains('close')) {
    modal.style.display = 'none';
  }
});

export default populateItemList;