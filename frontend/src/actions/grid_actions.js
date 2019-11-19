// src/actions/tweet_actions.js

import { getGrids, getUserGrids, createGrid } from '../util/grid_api_util';

export const RECEIVE_GRIDS = "RECEIVE_GRIDS";
export const RECEIVE_USER_GRIDS = "RECEIVE_USER_GRIDS";
export const RECEIVE_NEW_GRID = "RECEIVE_NEW_GRID";

export const receiveGrids = grids => ({
  type: RECEIVE_GRIDS,
  grids
});

export const receiveUserGrids = grids => ({
  type: RECEIVE_USER_GRIDS,
  grids
});

export const receiveNewGrid = grid => ({
  type: RECEIVE_NEW_GRID,
  grid
});

export const fetchGrids = () => dispatch => (
  getGrids()
    .then(grids => dispatch(receiveGrids(grids)))
    .catch(err => console.log(err))
);

export const fetchUserGrids = id => dispatch => (
  getUserGrids(id)
    .then(grids => dispatch(receiveUserGrids(grids)))
    .catch(err => console.log(err))
);

export const makeGrid = data => dispatch => (
  createGrid(data)
    .then(grid => dispatch(receiveNewGrid(grid)))
    .catch(err => console.log(err))
);