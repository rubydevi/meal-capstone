const baseURL = 'https://www.themealdb.com/api/json/v1/1/';

const addComment = async (id, data) => {
  const meal = data.find((ele) => ele.idMeal === id);
  const mealContainer = document.getElementById('meal');
  mealContainer.style.display = 'flex';

  // Fetch meal details from the API using the id
  const response = await fetch(`${baseURL}lookup.php?i=${id}`);
  const mealDetails = await response.json();
  const mealData = mealDetails.meals[0];

  const mealElement = document.createElement('div');
  mealElement.className = 'meal-list';
  mealElement.innerHTML = '';

  const mealCategory = mealData.strCategory;
  const mealArea = mealData.strArea;

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
          <h3 class="meal-name">Category: ${mealCategory}</h3>
          <h3 class="meal-name">Area: ${mealArea}</h3>
          <h3>Comments</h3>
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
};

export default addComment;
