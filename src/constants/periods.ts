export const DAYS = Array.from({ length: 31 }, (_, i) => i + 1);
export const CURRENT_YEAR = new Date().getFullYear();
export const YEARS = Array.from(
  { length: CURRENT_YEAR - 1995 + 1 },
  (_, i) => CURRENT_YEAR - i
);
export const MONTHS = [
  "Jan","Fev","Mar","Abr","Mai","Jun",
  "Jul","Ago","Set","Out","Nov","Dez",
];
