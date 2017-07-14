import {
  RENDER_ITEM_CARDS
} from './actions';

const initialState = {
  loading: true,
  itemsData: []
};


export function CardRenderer(state = initialState, action) {
  switch (action.type) {
  case RENDER_ITEM_CARDS:
    const someState = { loading: false, itemsData: action.payload } 
    return someState;   
  default:
    return state;   
  }
}
