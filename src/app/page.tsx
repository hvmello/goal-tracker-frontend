"use client";
import { useEffect, useState } from "react";


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
      <p className="mb-4">Welcome to your goal tracker! Here you can view and manage your goals.</p>
      <div className="space-y-4"/>
    </div>
  );
}