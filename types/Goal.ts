export type GoalType = "required" | "savings" | "wish" | "main";

export interface Goal {
  id: string;
  user_id?: string;
  name: string;
  type: GoalType;
  priority: number;
  target: number;
  saved: number;
  link?: string | null;
  month: string;
}