import axios from 'axios';

export const getSamples = () => {
  return axios.get('/api/samples');
};