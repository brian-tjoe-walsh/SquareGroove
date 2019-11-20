import { RECEIVE_SAMPLES } from '../actions/sample_actions';

const SamplesReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch(action.type) {
      case RECEIVE_SAMPLES:
        newState = action.samples.data;
        return newState;
      default:
        return state;
    }
  };
  
  export default SamplesReducer;