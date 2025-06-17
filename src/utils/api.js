import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api',
});

// Add token to headers automatically
API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});
export const donate = (data) => API.post('/donations', data);
export const fetchDonations = (email) => API.get(`/donations/${email}`);
export default API;
