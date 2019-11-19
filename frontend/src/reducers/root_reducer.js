// src/reducers/root_reducer.js

import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import grids from './grids_reducer';

const RootReducer = combineReducers({
  errors,
  session,
  grids
});

export default RootReducer;