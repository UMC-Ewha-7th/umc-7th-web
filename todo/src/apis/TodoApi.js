import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
});

export const fetchTodos = async () => {
  const response = await axiosInstance.get('/todo');
  return response.data;
};

export const createTodo = async (data) => {
  const response = await axiosInstance.post('/todo', data, {
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const deleteTodoApi = async (id) => {
  await axiosInstance.delete(`/todo/${id}`);
};

export const updateTodoApi = async (id, data) => {
  const response = await axiosInstance.put(`/todo/${id}`, data, {
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};
