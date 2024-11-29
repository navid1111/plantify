export const getCurrentWeekNumber = (plantingDate: Date): number => {
  const now = new Date();
  const planting = new Date(plantingDate);
  const pastDaysSincePlanting = Math.floor(
    (now.getTime() - planting.getTime()) / 86400000,
  ); // Difference in days
  return Math.floor(pastDaysSincePlanting / 7) + 1; // Week number starting from planting date
};

export const getEndofWeekDate = (): Date => {
  const now = new Date();
  const dayOfWeek = now.getDay();
  const daysUntilEndOfWeek = 7 - dayOfWeek;
  return new Date(now.getTime() + daysUntilEndOfWeek * 86400000);
};
