import axios from 'axios';
import { Goal } from '../../types/goal';

const API_URL = 'http://localhost:8080/'; // Replace with your actual API URL

export const fetchGoals = async (): Promise<Goal[]> => {
  const response = await axios.get<Goal[]>(API_URL);
  return response.data;
};

export const createGoal = async (goal: Goal): Promise<Goal> => {
  const response = await axios.post<Goal>(API_URL, goal);
  return response.data;
};

export const updateGoal = async (goalId: string, goal: Goal): Promise<Goal> => {
  const response = await axios.put<Goal>(API_URL, goal);
  return response.data;
};

export const deleteGoal = async (goalId: string): Promise<void> => {
  await axios.delete(`${API_URL}/${goalId}`);
};