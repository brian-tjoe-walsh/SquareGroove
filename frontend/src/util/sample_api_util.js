import axios from 'axios';

export const getSamples = (instrument) => {
  return axios.get(`/api/samples/${instrument}`);
};
