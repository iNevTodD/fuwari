export interface DistributionItem {
  goal_id: string;
  amount: number;
}

export interface Distribution {
  id: string;
  user_id?: string;
  date: string;
  items: DistributionItem[];
}