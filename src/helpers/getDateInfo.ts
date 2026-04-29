export function getDateInfo(): {
  day: string;
  month: string;
  year: number;
  monthShort: string;
  dateCompleted: string;
} {
  const date = new Date();
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  const monthShort = date
    .toLocaleString("pt-BR", { month: "short" })
    .replace(".", "")
    .slice(0, 3)
    .toUpperCase();

  const dateCompleted = `${year}-${month}-${day}`;

  return {
    day,
    month,
    year,
    monthShort,
    dateCompleted,
  };
}
