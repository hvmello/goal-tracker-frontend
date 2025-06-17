"use client";
import React, { useState } from 'react';
import { createGoal } from './api';
import { Goal } from '../../types/goal';

const GoalForm: React.FC<{ onGoalCreated: (goal: Goal) => void }> = ({ onGoalCreated }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!title || !description) {
      setError('Title and description are required.');
      return;
    }

    const newGoal = { title, description };

    try {
      const createdGoal = await createGoal(newGoal);
      onGoalCreated(createdGoal);
      setTitle('');
      setDescription('');
    } catch (err) {
      setError('Failed to create goal. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <h2 className="text-lg font-semibold">Create a New Goal</h2>
      {error && <p className="text-red-500">{error}</p>}
      <input
        type="text"
        placeholder="Goal Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 rounded"
        required
      />
      <textarea
        placeholder="Goal Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border p-2 rounded"
        required
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Add Goal
      </button>
    </form>
  );
};

export default GoalForm;