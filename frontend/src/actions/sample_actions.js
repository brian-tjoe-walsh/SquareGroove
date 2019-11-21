import { getSamples } from '../util/sample_api_util';

export const RECEIVE_SAMPLES = "RECEIVE_SAMPLES";
export const RECEIVE_DRUMS = "RECEIVE_DRUMS";

const receiveSamples = samples => ({
    type: RECEIVE_SAMPLES,
    samples
});

const receiveDrums = drums => ({
    type: RECEIVE_DRUMS,
    drums
});

export const fetchSamples = (instrument) => dispatch => (
    getSamples(instrument)
      .then(samples => dispatch(receiveSamples(samples)))
      .catch(err => console.log(err))
);

export const fetchDrums = () => dispatch => (
    getSamples("drums")
        .then(drums => dispatch(receiveDrums(drums)))
        .catch(err => console.log(err))
);   