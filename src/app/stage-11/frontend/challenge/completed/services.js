import axios from 'axios';

const axiosPetsInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

const axiosSubscribeInstance = axios.create({
  baseURL: process.env.REACT_APP_API_GATEWAY_URL,
});

export const fetchPets = () =>
  axiosPetsInstance.get('/pets').then((res) => res.data);

export const subscribe = (email) =>
  axiosSubscribeInstance.post('/subscribe', { email });
