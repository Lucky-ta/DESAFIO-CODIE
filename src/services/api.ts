import axios from 'axios';

const AXIOS_API = axios.create({
  baseURL: 'http://localhost:3001',
});

export default AXIOS_API;
