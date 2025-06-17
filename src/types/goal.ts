export interface Goal {
  id: number;
  title: string;
  description?: string;
  dueDate: string; // ISO date string (e.g., "2025-06-16T00:00:00Z")
  progress: number;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  deletedAt?: string | null; // ISO date string or null
}