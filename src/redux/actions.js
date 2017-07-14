// Action constants
export const RENDER_ITEM_CARDS = 'RENDER_ITEM_CARDS';

export const GET_USER_AND_ITEM_DATA = 'GET_USER_AND_ITEM_DATA';

// Action Creators

export function renderTheCards(itemsWithOwners) {
  return {
    type: RENDER_ITEM_CARDS,
    payload: itemsWithOwners
  };
}

export function userAndItemData() {
  return function (dispatch) {
    Promise.all(['http://localhost:3001/items', 'http://localhost:3001/users'].map(url => (
      fetch(url).then(response => response.json())
    ))).then(json => {
      const [items, users] = json;
      const itemsWithOwners = items.map(item => {
        const itemOwner = users.filter(user => user.id === item.itemOwner);
        item.itemOwner = itemOwner[0];
        return item;
      }); 
      dispatch(renderTheCards(itemsWithOwners));
    });
  };
}
