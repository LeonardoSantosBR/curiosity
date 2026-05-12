import { getRandomPictures } from "@/api";
import { potdDataType } from "@/types/potdDataType";
import { useQuery } from "@tanstack/react-query";

export function useGetRandomPotd() {
  return useQuery<potdDataType[]>({
    queryKey: ["randomPictures"],
    queryFn: () => getRandomPictures(),
    staleTime: Infinity,
  });
}