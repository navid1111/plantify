export const getCurrentWeekNumber = (): number => {
  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 1);
  const pastDaysOfYear = (now.getTime() - startOfYear.getTime()) / 86400000;

  return Math.ceil((pastDaysOfYear + startOfYear.getDay() + 1) / 7);
};

export const getEndofWeekDate = (): Date => {
  const now = new Date();
  const dayOfWeek = now.getDay();
  const daysUntilEndOfWeek = 7 - dayOfWeek;
  return new Date(now.getTime() + daysUntilEndOfWeek * 86400000);
};
