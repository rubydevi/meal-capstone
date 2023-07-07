import { getComments } from './api.js';

const displayCommentCount = async (appID, mealID) => {
  const comments = await getComments(appID, mealID);
  const commentCount = comments.length;
  return commentCount;
};

export default displayCommentCount;
