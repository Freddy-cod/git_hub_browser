// api.js - Frontend API service
import axios from 'axios';

const API_BASE = 'http://localhost:5000/api';

export const searchUsers = async (query) => {
  const response = await axios.post(`${API_BASE}/users/search`, { query });
  return response.data;
};

export const getUserDetails = async (username) => {
  const response = await axios.get(`${API_BASE}/users/${username}`);
  return response.data;
};

export const getRepoDetails = async (owner, repo) => {
  const response = await axios.get(`${API_BASE}/repos/${owner}/${repo}`);
  return response.data;
};