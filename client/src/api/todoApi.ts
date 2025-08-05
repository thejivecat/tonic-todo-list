import axios from 'axios';
import type { Todo } from '../types/todo';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getTodos = (user: string) =>
  axios.get<Todo[]>(`${BASE_URL}/todos?user=${user}`);

export const createTodo = (text: string, user: string) =>
  axios.post<Todo>(`${BASE_URL}/todos?user=${user}`, { text });

export const updateTodo = (id: string, data: Partial<Todo>, user: string) =>
  axios.patch<Todo>(`${BASE_URL}/todos/${id}?user=${user}`, data);

export const deleteTodo = (id: string, user: string) =>
  axios.delete<{ message: string }>(`${BASE_URL}/todos/${id}?user=${user}`);