import { getImageOfDay } from "@/api";
import { useQuery } from "@tanstack/react-query";

export function useGetIotd(date: string) {
  return useQuery({
    queryKey: ["imageOfDay", date],
    queryFn: () => getImageOfDay(date),
  });
}