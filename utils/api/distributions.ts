import { createClient } from "@/utils/supabase/client";
import { Distribution, DistributionItem } from "@/types/Distribution";

export const getDistributions = async (): Promise<Distribution[]> => {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("distributions")
    .select("*")
    .order("date", { ascending: false });

  if (error) throw error;
  return data;
};

export const addDistribution = async (items: DistributionItem[]) => {
  const supabase = createClient();

  const filled = items.filter((item) => item.amount > 0);
  if (filled.length === 0) {
    return;
  }
  const { error: insertError } = await supabase
    .from("distributions")
    .insert({ items: filled });
  if (insertError) {
    throw insertError;
  }
  const goalIds = filled.map((item) => item.goal_id);
  const { data: goals, error: goalsError } = await supabase
    .from("goals")
    .select("id, saved")
    .in("id", goalIds);
  if (goalsError) throw goalsError;
  for (const item of filled) {
    const goal = goals.find((g) => g.id === item.goal_id);
    if (!goal) continue;

    const { error: updateError } = await supabase
      .from("goals")
      .update({ saved: goal.saved + item.amount })
      .eq("id", item.goal_id);
    if (updateError) throw updateError;
  }
};
