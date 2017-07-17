import { combineReducers } from 'redux';

import { CardRenderer } from './modules/items';
import { ProfileLoader } from './modules/profile';


export default combineReducers({
  items: CardRenderer,
  profiles: ProfileLoader

});
