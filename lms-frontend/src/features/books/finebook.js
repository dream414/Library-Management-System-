export function calculateFine(daysLate) {
  const perDayFine = 50; // PKR
  return daysLate * perDayFine;
}