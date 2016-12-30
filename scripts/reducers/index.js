import { combineReducers } from 'redux';
import topmenu from '../reducers/topmenu';


const rootReducer = combineReducers({
  topmenu,
});

export default rootReducer;
