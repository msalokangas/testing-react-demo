import { combineReducers } from 'redux';
import { counter } from '../features/counter/Reducer';

export default combineReducers({
  counter,
});
