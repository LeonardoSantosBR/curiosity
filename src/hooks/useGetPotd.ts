import { getPictureOfDay } from "@/api";
import { potdDataType } from "@/types/potdDataType";
import { useQuery } from "@tanstack/react-query";

export function useGetPotd(date: string) {
  return useQuery<potdDataType>({
    queryKey: ["pictureOfDay", date],
    queryFn: () => getPictureOfDay(date),
  });
}