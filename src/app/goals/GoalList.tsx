"use client";
import React, { useEffect, useState } from 'react';
import { Goal } from '../../types/goal';
import { fetchGoals } from './api';

const GoalList: React.FC = () => {
  const [goals, setGoals] = useState<Goal[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadGoals = async () => {
      try {
        const fetchedGoals = await fetchGoals();
        setGoals(fetchedGoals);
      } catch (err) {
        setError('Failed to load goals');
      } finally {
        setLoading(false);
      }
    };

    loadGoals();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2>Your Goals</h2>
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <h3>{goal.title}</h3>
            <p>{goal.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GoalList;