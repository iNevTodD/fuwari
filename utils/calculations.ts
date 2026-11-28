import { Goal } from "../types/Goal";
import { Settings } from "../types/Settings";
import { Shift } from "../types/Shift";
import { Distribution } from "../types/Distribution";

export const getPercent = (current: number, total: number) =>
  total > 0 ? Math.min((current / total) * 100, 100) : 0;

export const getShiftAmount = (hours: number, hourlyRate: number) =>
  hours * hourlyRate;

export const getFullShiftValue = (settings: Settings) =>
  settings.shift_hours * settings.hourly_rate;

export const getShiftsLeft = (goal: Goal, settings: Settings) => {
  const left = goal.target - goal.saved;
  if (left <= 0) return 0;
  return Math.ceil(left / getFullShiftValue(settings));
};

export const getEarned = (shifts: Shift[]) =>
  shifts.reduce((sum, shift) => sum + shift.amount, 0);

export const getDistributed = (distributions: Distribution[]) =>
  distributions.reduce(
    (sum, d) => sum + d.items.reduce((s, item) => s + item.amount, 0),
    0,
  );
export const getWalletBalance = (
  shifts: Shift[],
  distributions: Distribution[],
) => getEarned(shifts) - getDistributed(distributions);

export function getLeftToDistribute(
  wallet: number,
  allocations: Record<string, number>,
) {
  const distributed = Object.values(allocations).reduce(
    (sum, amount) => sum + amount,
    0,
  );
  return wallet - distributed;
}

export function getMonthlyIncome(settings: Settings) {
  const shiftValue = settings.shift_hours * settings.hourly_rate;
  return Math.round(shiftValue * settings.shifts_per_week * 4);
}
