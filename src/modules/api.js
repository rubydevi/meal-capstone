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
    const response = await fetch(`${involvementAPIBaseURL}apps/${appId}/likes`);
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
    return `Error adding like:${error}`;
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

const addLike = async (appId, itemId) => {
  try {
    await fetch(`${involvementAPIBaseURL}apps/${appId}/likes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ item_id: itemId }),
    });
    return undefined;
  } catch (error) {
    return `Error adding like:${error}`;
  }
};

const countComments = async (appId, itemId) => {
  try {
    const response = await fetch(`${involvementAPIBaseURL}/apps/${appId}/comments?itemId=${itemId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch comments');
    }
    const data = await response.json();
    return data.length;
  } catch (error) {
    return 0;
  }
};

// Export the base URL for the meal API
export {
  baseURL, createApp, getLikesCount, getRegionWiseMeal, getOneMeal, addLike, countComments,
};