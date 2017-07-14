import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { CardRenderer } from './reducer';
import { applyMiddleware, createStore, combineReducers } from 'redux';



export default createStore(combineReducers({ items: CardRenderer
}), 
composeWithDevTools(applyMiddleware(
  logger,
  thunk,
  )));
