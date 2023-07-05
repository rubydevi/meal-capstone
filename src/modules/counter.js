const countItems = () => {
  const itemList = document.getElementById('item-list');
  return itemList.children.length;
};

export default countItems;