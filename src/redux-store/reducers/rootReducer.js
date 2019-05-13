import { combineReducers } from 'redux';
import restaurant from './restaurant';
import review from './review';

export default combineReducers({
    restaurant,
    review
  });