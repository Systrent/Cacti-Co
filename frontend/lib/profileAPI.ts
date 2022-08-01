import axios from 'axios';

export const profileAPI = axios.create({ baseURL: 'http://localhost:5000' });
