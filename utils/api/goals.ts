import { createClient } from "@/utils/supabase/client";
import { Goal } from "@/types/Goal";

export const getGoals = async (month: string): Promise<Goal[]> => {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("goals")
    .select("*")
    .eq("month", month)
    .order("priority");
  if (error) throw error;
  return data;
};

export const addGoal = async (
  goal: Omit<Goal, "id" | "user_id">,
): Promise<Goal> => {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("goals")
    .insert(goal)
    .select()
    .single();
  if (error) throw error;
  return data;
};

export const updateGoal = async (
  id: string,
  changes: Partial<Goal>,
): Promise<void> => {
  const supabase = createClient();
  const { error } = await supabase.from("goals").update(changes).eq("id", id);
  if (error) throw error;
};

export const deleteGoal = async (id: string): Promise<void> => {
  const supabase = createClient();

  const { error } = await supabase.from("goals").delete().eq("id", id);
  if (error) throw error;
};
