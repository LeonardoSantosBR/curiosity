import { getImageOfDay } from "@/api";
import { potdDataType } from "@/types/potdDataType";
import { useQuery } from "@tanstack/react-query";

export function useGetPotd(date: string) {
  return useQuery<potdDataType>({
    queryKey: ["imageOfDay", date],
    queryFn: () => getImageOfDay(date),
  });
}