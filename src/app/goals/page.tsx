"use client";
import { useEffect, useState } from "react";
import GoalList from "./GoalList";
import GoalForm from "./GoalForm";
import { Goal } from "../../types/goal";
import { fetchGoals } from "./api";

export default function GoalsPage() {
  const [goals, setGoals] = useState<Goal[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadGoals = async () => {
      try {
        const fetchedGoals = await fetchGoals();
        setGoals(fetchedGoals);
      } catch (err) {
        setError("Failed to load goals.");
      } finally {
        setLoading(false);
      }
    };

    loadGoals();
  }, []);

  const handleGoalAdded = (newGoal: Goal) => {
    setGoals((prevGoals) => [...prevGoals, newGoal]);
  };

  return (
    <div className="goals-container">
      <h1 className="text-2xl font-bold">Goals Tracker</h1>
      {loading && <p>Loading goals...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <GoalForm onGoalAdded={handleGoalAdded} />
      <GoalList goals={goals} />
    </div>
  );
}