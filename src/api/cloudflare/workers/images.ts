const workerUrl = process.env.EXPO_PUBLIC_CLOUDFLARE_WORKER;
type BatchResult = {
  url: string;
  data?: string;
  success: boolean;
};

export async function postImagesOptimizedWorker(urls: string[]) {
  const response = await fetch(`${workerUrl}/batch`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ urls }),
  });

  const { results } = (await response.json()) as { results: BatchResult[] };
  return results;
}
