import { getRandomPictures } from "@/api";
import { extractYouTubeId, optimizeImages } from "@/helpers";
import { potdDataType } from "@/types/potdDataType";
import { useQuery } from "@tanstack/react-query";

export type RandomPotdItem = potdDataType & { thumbnailUrl: string | null };

export function useGetRandomPotd() {
  return useQuery<RandomPotdItem[]>({
    queryKey: ["randomPictures"],
    queryFn: async () => {
      const pictures = await getRandomPictures();
      const imageUrls = pictures
        .filter((p: potdDataType) => p.media_type !== "video" && p.url)
        .map((p: potdDataType) => p.url);

      const optimizedMap = await optimizeImages(imageUrls);

      return pictures.map((p: potdDataType) => {
        if (p.media_type === "video") {
          const videoId = extractYouTubeId(p.url);
          const body = {
            ...p,
            thumbnailUrl: videoId
              ? `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`
              : null,
          };
          return body;
        }
        return { ...p, thumbnailUrl: optimizedMap[p.url] ?? null };
      });
    },
    staleTime: Infinity,
  });
}
