// const LOAD_ITEMS_LIST = 'LOAD_ITEMS_LIST';
const ITEM_FILTER_SELECTION = 'ITEM_FILTER_SELECTION';
// Reducer
const initialState = {
  itemFilter: [],
  itemsData: [],
  loading: true,
};

export function CardRenderer(state = initialState, action) {
  switch (action.type) {
  case ITEM_FILTER_SELECTION:
    return {
      ...state,
      itemFilter: action.payload
    };
  default:
    return state;
  }
}

export function itemListFilter(itemFilter) {
  return {
    type: ITEM_FILTER_SELECTION,
    payload: itemFilter
  };
}
