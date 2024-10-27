import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const api = axios.create({
  baseURL: API_URL,
});

// CRUD operations
export const getTasks = () => api.get('/tasks');
export const getTaskById = (id) => api.get(`/tasks/${id}`);
export const createTask = (task) => api.post('/tasks', task);
export const updateTask = (id, updatedTask) => api.put(`/tasks/${id}`, updatedTask);
export const deleteTask = (id) => api.delete(`/tasks/${id}`);