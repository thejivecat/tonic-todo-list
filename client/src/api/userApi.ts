import axios from 'axios';
import type { User } from '../types/user';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const findOrCreateUser = (name: string) =>
  axios.post<User>(`${BASE_URL}/users`, { name });

export const getAllUsers = () =>
  axios.get<User[]>(`${BASE_URL}/users`);

export const deleteUser = (id: string) =>
  axios.delete<{ message: string }>(`${BASE_URL}/users/${id}`);