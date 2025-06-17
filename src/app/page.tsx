import { useEffect, useState } from "react";
import GoalList from "./goals/GoalList";
import GoalForm from "./goals/GoalForm";

export default function Home() {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    const fetchGoals = async () => {
      const response = await fetch('/api/goals');
      const data = await response.json();
      setGoals(data);
    };

    fetchGoals();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Goal Tracker</h1>
      <GoalForm setGoals={setGoals} />
      <GoalList goals={goals} />
    </div>
  );
}