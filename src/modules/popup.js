import { createApp } from './api.js';
import countComments from './comment-counter.js';

const baseURL = 'https://www.themealdb.com/api/json/v1/1/';
const involvementAPIURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';

const getComments = async (id) => {
  try {
    const response = await fetch(`${involvementAPIURL}/apps/1FNl9krFuHr2YmoEXWQu/comments?itemId=${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch comments');
    }
    const data = await response.json();
    return data.map((comment) => comment.comment);
  } catch (error) {
    return [];
  }
};

const saveComments = (id, comments) => {
  localStorage.setItem(`comments_${id}`, JSON.stringify(comments));
};

const getSavedComments = (id) => {
  const savedComments = localStorage.getItem(`comments_${id}`);
  return savedComments ? JSON.parse(savedComments) : [];
};

const addComment = async (id, data) => {
  const meal = data.find((ele) => ele.idMeal === id);
  const mealContainer = document.getElementById('meal');
  mealContainer.style.display = 'flex';

  // Fetch meal details from the API using the id
  const response = await fetch(`${baseURL}lookup.php?i=${id}`);
  const mealDetails = await response.json();

  const mealElement = document.createElement('div');
  mealElement.className = 'meal-list';
  mealElement.innerHTML = '';

  const mealCategory = mealDetails.meals[0].strCategory;
  const mealArea = mealDetails.meals[0].strArea;

  mealElement.innerHTML = `
    <div class="close-btn">
      <button type="button" class="btn recipe-close-btn">
        <i class="fas fa-times"></i>
      </button>
    </div>
    <div class="meal-image-comment">
      <div class="meal-list-comment">
        <img src="${meal.strMealThumb}" alt="" class="meal-image">
        <div class="comment-meal">
          <h2 class="meal-name">${meal.strMeal}</h2>
          <h3>Category: ${mealCategory}</h3>
          <h3>Area: ${mealArea}</h3>
          <h3>Comments <span id="comment-count"></span></h3>
          <ul id="comments-list"></ul>
        </div>
      </div>
      <h3 class="comment-part">Add Comments</h3>
      <div class="form">
        <input type="text" class="name" id="name" placeholder="Name">
      </div><br>
      <div class="form">
        <textarea name="textarea" id="textArea" cols="40" rows="10"></textarea>
      </div>
      <div class="form">
        <button type="submit" id="submit">Submit</button>
      </div>
    </div>
  `;

  mealContainer.appendChild(mealElement);

  const closeBtn = mealElement.querySelector('.recipe-close-btn');
  closeBtn.addEventListener('click', () => {
    mealContainer.style.display = 'none';
    mealContainer.removeChild(mealElement);
  });

  const commentsList = mealElement.querySelector('#comments-list');
  const commentCountElement = mealElement.querySelector('#comment-count');

  const comments = await getComments(id);
  const savedComments = getSavedComments(id);

  comments.concat(savedComments).forEach((comment) => {
    const div = document.createElement('div');
    div.className = 'comment-name';
    div.innerHTML = comment;
    commentsList.appendChild(div);
  });

  // Update comment count initially
  const appID = await createApp();
  const commentCount = await countComments(appID, id);
  commentCountElement.textContent = `(${commentCount} comments)`;

  const submitBtn = mealElement.querySelector('#submit');
  submitBtn.addEventListener('click', async () => {
    const nameInput = mealElement.querySelector('#name');
    const commentInput = mealElement.querySelector('#textArea');
    const name = nameInput.value.trim();
    const comment = commentInput.value.trim();

    if (name !== '' && comment !== '') {
      const newComment = `<div>${name}</div><div>${comment}</div>`;
      const div = document.createElement('div');
      div.className = 'comment-name';
      div.innerHTML = newComment;
      commentsList.appendChild(div);
      nameInput.value = '';
      commentInput.value = '';

      // Save the new comment to localStorage
      const savedComments = getSavedComments(id);
      const updatedComments = savedComments.concat(newComment);
      saveComments(id, updatedComments);

      // Add the new comment to the API
      try {
        const response = await fetch(`${involvementAPIURL}/apps/1FNl9krFuHr2YmoEXWQu/comments`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            itemId: id,
            comment: newComment,
          }),
        });
        if (!response.ok) {
          throw new Error('Failed to add comment');
        }

        // Update comment count after successful comment submission
        const updatedCommentCount = await countComments(appID, id);
        commentCountElement.textContent = `(${updatedCommentCount} comments)`;
      } catch (error) {
        const errorMessage = document.createElement('p');
        errorMessage.textContent = error.message || 'Error submitting comment. Please try again later!';
      }
    }
  });
};

export default addComment;
