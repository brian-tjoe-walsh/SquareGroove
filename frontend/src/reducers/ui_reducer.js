import { combineReducers } from 'redux';

import modal from './modal_reducer';
import open from './open_reducer';

export default combineReducers({
  modal,
  open
});