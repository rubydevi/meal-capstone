import displayCommentCount from '../modules/comment-counter.js';

describe('displayCommentCount', () => {
  beforeEach(() => {
    // Set up the DOM elements for testing
    document.body.innerHTML = `
      <div class="comment"></div>
      <div class="comment"></div>
      <div class="comment"></div>
    `;
  });
  afterEach(() => {
    document.body.innerHTML = '';
  });
  it('should return the correct comment count based on the displayed comments', async () => {
    const commentCount = await displayCommentCount();
    expect(commentCount).toBe(3);
  });
  it('should return 0 when no comments are displayed', async () => {
    document.body.innerHTML = '';
    const commentCount = await displayCommentCount();
    expect(commentCount).toBe(0);
  });
});