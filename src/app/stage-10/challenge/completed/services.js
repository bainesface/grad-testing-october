import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

export const fetchPets = () =>
  axiosInstance.get('/pets').then((res) => res.data);

export const subscribe = (email) => axiosInstance.post('/subscribe', { email });
