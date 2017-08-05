import { combineReducers } from 'redux-immutable';

import usersReducer from './containers/Users/reducer';

export const state = combineReducers({
  usersDomain: usersReducer
});
