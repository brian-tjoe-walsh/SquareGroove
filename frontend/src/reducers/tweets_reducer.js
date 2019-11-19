// src/reducers/tweets_reducer.js

import { RECEIVE_GRIDS, RECEIVE_USER_GRIDS, RECEIVE_NEW_GRID } from '../actions/grid_actions';
  
  const GridsReducer = (state = { all: {}, user: {}, new: undefined }, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch(action.type) {
      case RECEIVE_TWEETS:
        newState.all = action.tweets.data;
        return newState;
      case RECEIVE_USER_TWEETS:
        newState.user = action.tweets.data;
        return newState;
      case RECEIVE_NEW_TWEET:
        newState.new = action.tweet.data
        return newState;
      default:
        return state;
    }
  };
  
  export default TweetsReducer;