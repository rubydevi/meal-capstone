const baseURL = 'https://www.themealdb.com/api/json/v1/1/';

// List of meal
export async function getRegionWiseMeal() {
  const response = await fetch(`${baseURL}filter.php?a=Indian`);
  const data = await response.json();
  return data.meals;
}

// Individual meal
// Please improve this if it doesn't work @Sadaf
export async function getOneMeal(mealID) {
  const response = await fetch(`${baseURL}lookup.php?i=${mealID}`);
  const data = await response.json();
  return data.meals;
}
