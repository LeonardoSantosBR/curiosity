const workerUrl = process.env.EXPO_PUBLIC_CLOUDFLARE_WORKER;

export function getCloudFlareWorkerImageUrl(url: string): string {
  return `${workerUrl}/?url=${url}`;
}
