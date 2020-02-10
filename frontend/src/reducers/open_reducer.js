import { OPEN_PAGE, CLOSE_PAGE } from '../actions/open_actions';

export default function openReducer(state = null, action) {
  switch (action.type) {
    case OPEN_PAGE:
      return true;
    case CLOSE_PAGE:
      return null;
    default:
      return state;
  }
}
