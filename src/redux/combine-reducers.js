import { combineReducers } from 'redux';
import client from '../config/apolloClient';
import { CardRenderer } from './modules/items';
import { ProfileLoader } from './modules/profile';
import { authReducer } from './modules/login';


export default combineReducers({
  items: CardRenderer,
  profiles: ProfileLoader,
  apollo: client.reducer(),
  auth: authReducer
});
