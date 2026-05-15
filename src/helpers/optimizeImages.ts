import { postImagesOptimizedWorker } from "@/api/cloudflare";

export async function optimizeImages(
  urls: string[]
): Promise<Record<string, string>> {
  if (!urls.length) return {};

  const results = await postImagesOptimizedWorker(urls)

  return results.reduce(
    (acc, item) => {
      if (item.success && item.data) {
        acc[item.url] = `data:image/webp;base64,${item.data}`;
      }
      return acc;
    },
    {} as Record<string, string>
  );
}
