import { combineReducers } from 'redux';
import CountReducer from './get_id';

export default combineReducers({
  info: CountReducer
});
