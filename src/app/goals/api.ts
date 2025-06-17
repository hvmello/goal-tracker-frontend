import axios from 'axios';
import { Goal } from '../../types/goal';

const API_URL = 'https://your-backend-api.com/goals'; // Replace with your actual API URL

export const fetchGoals = async (): Promise<Goal[]> => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createGoal = async (goal: Goal): Promise<Goal> => {
  const response = await axios.post(API_URL, goal);
  return response.data;
};

export const updateGoal = async (goalId: string, goal: Goal): Promise<Goal> => {
  const response = await axios.put(`${API_URL}/${goalId}`, goal);
  return response.data;
};

export const deleteGoal = async (goalId: string): Promise<void> => {
  await axios.delete(`${API_URL}/${goalId}`);
};