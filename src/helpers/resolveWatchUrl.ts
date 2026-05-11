export function resolveWatchUrl(url: string, youtubeId: string | null): string {
  if (youtubeId) return `https://www.youtube.com/watch?v=${youtubeId}`;
  const vimeoMatch = url.match(/player\.vimeo\.com\/video\/(\d+)/);
  if (vimeoMatch) return `https://vimeo.com/${vimeoMatch[1]}`;
  return url;
}
