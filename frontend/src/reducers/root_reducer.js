// src/reducers/root_reducer.js

import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import grids from './grids_reducer';
import samples from './samples_reducer';
import ui from './ui_reducer';

const RootReducer = combineReducers({
  errors,
  session,
  grids,
  samples,
  ui
});

export default RootReducer;