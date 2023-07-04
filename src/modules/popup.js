import { getOneMeal } from './api.js';

const commentButton = document.getElementById('Comments');
const mealContainer = document.getElementById('meal');

commentButton.addEventListener('click', async () => {
  const mealID = '12345';
  const meal = await getOneMeal(mealID);

  mealContainer.style.display = 'flex';

  const mealElement = document.createElement('div');
  mealElement.className = 'meal-list';

  mealElement.innerHTML = `
    <button type="button" class="btn recipe-close-btn">
      <i class="fas fa-times"></i>
    </button>
    <img src="${meal[0].strMealThumb}" alt="">
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
  `;

  mealContainer.appendChild(mealElement);

  const closeBtn = mealElement.querySelector('.recipe-close-btn');
  closeBtn.addEventListener('click', () => {
    mealContainer.style.display = 'none';
    mealContainer.removeChild(mealElement);
  });
});
