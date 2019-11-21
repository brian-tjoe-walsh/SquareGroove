import { RECEIVE_SAMPLES, RECEIVE_DRUMS } from '../actions/sample_actions';

const SamplesReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch(action.type) {
      case RECEIVE_SAMPLES:
        let instrument = action.samples.data[0].instrument;
        newState = { [instrument]: action.samples.data };
        return newState;

      case RECEIVE_DRUMS:
        return Object.assign(newState, {drums: action.drums.data});

      default:
        return state;
    }
  };
  
  export default SamplesReducer;