import { combineReducers } from 'redux';
import usersReducers from './users';

const rootReducer = combineReducers({
  // state: (state = {}) => state
  users: usersReducers
});

export default rootReducer;
