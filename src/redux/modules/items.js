export const LOAD_ITEMS_LIST = 'LOAD_ITEMS_LIST';

// Action Creator
export function loadItemsList(itemsWithOwners, thisUsersItems) {
  return {
    type: LOAD_ITEMS_LIST,
    payload: {
      itemsWithOwners,
      thisUsersItems,
    }
  };
}

// Reducer
const initialState = {
  loading: true,
  itemsData: [],
  thisUsersItems: [],
};

export function CardRenderer(state = initialState, action) {
  switch (action.type) {
  case LOAD_ITEMS_LIST:
    return {
      loading: false,
      itemsData: action.payload.itemsWithOwners,
      thisUsersItems: action.payload.thisUsersItems
    };
  default:
    return state;
  }
}

// Thunk
export function fetchItemData(userId) {
  return function (dispatch) {
    Promise.all(['http://localhost:3001/items', 'http://localhost:3001/users'].map(url => (
      fetch(url).then(response => response.json())
    ))).then(json => {
      const [items, users] = json;
      const itemsWithOwners = items.map(item => {
        const itemOwner = users.filter(user => user.id === item.itemOwner);
        item.itemOwner = itemOwner[0];
        if (item.itemHolder) {
          const itemHolder = users.filter(user => user.id === item.itemHolder);
          item.itemHolder = itemHolder[0];
        }
        return item;
      });
      let thisUsersItems = [];
      if (userId) {
        thisUsersItems = itemsWithOwners.filter(item => {
          return item.itemOwner.id === userId;
        });
      }
      dispatch(loadItemsList(itemsWithOwners, thisUsersItems));
    });
  };
}

// TODO: Filter

