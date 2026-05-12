import { MONTHS } from "@/constants";

export function formatDisplayDate(dateStr: string): string {
  const [year, month, day] = dateStr.split("-");
  return `${day} ${MONTHS[parseInt(month) - 1].toUpperCase()} ${year}`;
}