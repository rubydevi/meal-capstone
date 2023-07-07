const displayCommentCount = async () => {
  const commentElements = document.querySelectorAll('.comment');
  const commentCount = commentElements.length;
  return commentCount;
};

export default displayCommentCount;
