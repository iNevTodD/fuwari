export type Currency = 'CZK' | 'EUR' | 'PLN' | 'USD';

export interface Settings {
  user_id?: string;
  hourly_rate: number;
  shift_hours: number;
  shifts_per_week: number;
  currency: Currency;
}