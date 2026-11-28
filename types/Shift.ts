export interface Shift {
  id: string;
  user_id?: string;
  date: string;
  hours: number;
  amount: number;
  note?: string | null;
}