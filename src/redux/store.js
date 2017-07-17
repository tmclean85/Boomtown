import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from './combine-reducers';
import { applyMiddleware, createStore } from 'redux';

export default createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(
      logger,
      thunk,
    )));

  //TODO: Filter
