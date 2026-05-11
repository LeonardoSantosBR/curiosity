import { potdDataType } from "@/types";

export function getCardThumbnail(item: potdDataType): string | null {
  if (item.media_type === "video") {
    const match =
      item.url.match(/youtube\.com\/embed\/([^?&]+)/) ||
      item.url.match(/youtu\.be\/([^?&]+)/);
    return match ? `https://img.youtube.com/vi/${match[1]}/mqdefault.jpg` : null;
  }
  return item.url;
}