import { Goal } from "../../types/goal";

async function fetchGoals(): Promise<Goal[]> {
  const res = await fetch("http://localhost:8080/api/goals", {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch goals");
  const json = await res.json();
  console.log("Dados recebidos:", json);
  return json.data; // <-- retornar só o array dentro de 'data'
}


export default async function GoalsPage() {
  let goals: Goal[] = [];
  try {
    goals = await fetchGoals();
  } catch (e) {
    return (
      <main style={{ padding: 32 }}>
        <h1>Goals</h1>
        <p>Erro ao buscar metas.</p>
      </main>
    );
  }

  return (
    <main style={{ padding: 32 }}>
      <h1>Goals</h1>
      {goals.length === 0 ? (
        <p>Nenhuma meta cadastrada.</p>
      ) : (
        <ul>
          {goals.map((goal) => (
            <li key={goal.id}>
              <strong>{goal.title}</strong>
              <div>{goal.description}</div>
              <div>Progresso: {goal.progress}%</div>
              <div>Prazo: {goal.dueDate ? new Date(goal.dueDate).toLocaleDateString() : "Sem prazo"}</div>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}