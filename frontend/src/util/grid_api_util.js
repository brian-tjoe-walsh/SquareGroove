import axios from 'axios';

export const getGrids = () => {
  return axios.get('/api/grids');
};

export const getGrid = id => {
  return axios.get(`/api/grids/${id}`);
};

export const getUserGrids = id => {
  return axios.get(`/api/grids/user/${id}`);
};

export const createGrid = grid => {
  return axios.post('/api/grids/', grid);
};

export const deleteGrid = id => {
  return axios.delete(`/api/grids/${id}`);
};