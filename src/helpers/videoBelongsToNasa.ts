import { VIDEO_FILE_EXTENSIONS } from "@/constants";

export function videoBelongsToNasa(url: string): boolean {
  const ext = url.split("?")[0].split(".").pop()?.toLowerCase();
  return VIDEO_FILE_EXTENSIONS.includes(ext ?? "");
}
