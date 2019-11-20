import { getSamples } from '../util/sample_api_util';

export const RECEIVE_SAMPLES = "RECEIVE_SAMPLES";

const receiveSamples = samples => ({
    type: RECEIVE_SAMPLES,
    samples
});

export const fetchSamples = () => dispatch => (
    getSamples()
      .then(samples => dispatch(receiveSamples(samples)))
      .catch(err => console.log(err))
  );