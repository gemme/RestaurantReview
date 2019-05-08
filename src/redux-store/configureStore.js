import { applyMiddleware, compose, createStore } from 'redux';

import monitorReducersEnhancer from './enhancers/monitorReducer';
import loggerMiddleware from './middleware/logger';
import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk'

const configureStore = (preloadedState) => {
  //const store = createStore(rootReducer, preloadedState, composedEnhancers)

  const store = createStore(rootReducer, applyMiddleware(thunk))
  return store
}

export default configureStore;