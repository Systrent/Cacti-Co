import axios from 'axios';

export const shopifyAPI = axios.create({ baseURL: 'http://localhost:5000' });
