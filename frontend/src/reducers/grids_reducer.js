// src/reducers/grids_reducer.js

import { RECEIVE_GRIDS, RECEIVE_GRID, RECEIVE_USER_GRIDS, RECEIVE_NEW_GRID } from '../actions/grid_actions';
  
  const GridsReducer = (state = { all: {}, user: {}, new: undefined }, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch(action.type) {
      case RECEIVE_GRIDS:
        newState.all = action.grids.data;
        return newState;
      case RECEIVE_GRID:
        newState[action.grid.id] = action.grid;
        return newState;
      case RECEIVE_USER_GRIDS:
        newState.user = action.grids.data;
        return newState;
      case RECEIVE_NEW_GRID:
        newState.new = action.grid.data;
        return newState;
      default:
        return state;
    }
  };
  
  export default GridsReducer;