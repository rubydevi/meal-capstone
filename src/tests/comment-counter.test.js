import displayCommentCount from '../modules/comment-counter.js';
import { getComments } from '../modules/api.js';

jest.mock('../modules/api.js', () => ({
  getComments: jest.fn(),
}));

describe('displayCommentCount', () => {
  const appID = '1FNl9krFuHr2YmoEXWQu';
  const mealID = '';

  it('should return the correct comment count', async () => {
    const comments = [
      { username: 'User1', comment: 'Comment 1', date: '2023-07-01' },
      { username: 'User2', comment: 'Comment 2', date: '2023-07-02' },
      { username: 'User3', comment: 'Comment 3', date: '2023-07-03' },
    ];

    getComments.mockResolvedValue(comments);

    const commentCount = await displayCommentCount(appID, mealID);

    expect(getComments).toHaveBeenCalledWith(appID, mealID);
    expect(commentCount).toBe(comments.length);
  });

  it('should return 0 when there are no comments', async () => {
    const comments = [];

    getComments.mockResolvedValue(comments);

    const commentCount = await displayCommentCount(appID, mealID);

    expect(getComments).toHaveBeenCalledWith(appID, mealID);
    expect(commentCount).toBe(0);
  });
});
