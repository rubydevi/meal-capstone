// Import the countItems function
import countItems from '../modules/counter.js';

// Mock the DOM elements for testing
document.body.innerHTML = `
  <div id="item-list">
    <div>Card 1</div>
    <div>Card 2</div>
    <div>Card 3</div>
  </div>
`;

describe('countItems', () => {
  test('returns the correct number of items', () => {
    expect(countItems()).toBe(3);
  });

  test('returns 0 when there are no items', () => {
    // Clear the item list
    const itemList = document.getElementById('item-list');
    itemList.innerHTML = '';

    expect(countItems()).toBe(0);
  });
});