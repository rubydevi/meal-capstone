const baseURL = 'https://www.themealdb.com/api/json/v1/1/';
const involvementAPIBaseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';

// Create a new app and retrieve the appID
const createApp = async () => {
  const storedAppId = localStorage.getItem('appId');
  if (storedAppId && storedAppId === '1FNl9krFuHr2YmoEXWQu') {
    return storedAppId;
  }

  localStorage.setItem('appId', '1FNl9krFuHr2YmoEXWQu');
  return '1FNl9krFuHr2YmoEXWQu';
};

const getLikesCount = async (appId, itemId) => {
  try {
    const response = await fetch(`${involvementAPIBaseURL}apps/1FNl9krFuHr2YmoEXWQu/likes`);
    const data = await response.json();
    let likes = 0;

    // Check if the response is an array and find the likes count for the item
    if (Array.isArray(data)) {
      const item = data.find((item) => item.item_id === itemId);
      if (item) {
        likes = item.likes;
      }
    }
    return likes;
  } catch (error) {
    return 0;
  }
};

// List of meal
const getRegionWiseMeal = async () => {
  const response = await fetch(`${baseURL}filter.php?a=Indian`);
  const data = await response.json();
  return data.meals;
};

// Individual meal
const getOneMeal = async (mealID) => {
  const response = await fetch(`${baseURL}lookup.php?i=${mealID}`);
  const data = await response.json();
  return data.meals;
};

// Export the base URL for the meal API
export {
  baseURL, createApp, getLikesCount, getRegionWiseMeal, getOneMeal,
};
