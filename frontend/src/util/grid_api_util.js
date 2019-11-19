import axios from 'axios';

export const getGrids = () => {
  return axios.get('/api/grids');
};

export const getUserGrids = id => {
  return axios.get(`/api/grids/user/${id}`);
};

export const createGrid = data => {
  return axios.post('/api/grids/', data);
};