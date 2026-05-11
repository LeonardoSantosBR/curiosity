import { potdDataType } from "@/types";
import { useVideoPlayer, VideoView } from "expo-video";
import { Image } from "react-native";
import { YouTubeThumbnail } from "../youtubeThumbnail";

export function PotdMediaPreview({
  url,
  media_type,
}: Pick<potdDataType, "url" | "media_type">): React.JSX.Element {
  const isYoutube =
    media_type === "video" &&
    (url.includes("youtube.com") || url.includes("youtu.be"));

  const player = useVideoPlayer(
    media_type === "video" && !isYoutube ? url : null,
    (p) => {
      p.loop = true;
      p.muted = true;
      p.play();
    }
  );

  if (media_type === "video") {
    if (isYoutube) return <YouTubeThumbnail url={url} />;
    return (
      <VideoView
        player={player}
        style={{ width: "100%", height: 208, borderRadius: 16 }}
        nativeControls={false}
        contentFit="cover"
        fullscreenOptions={{ enable: true }}
      />
    );
  }

  return (
    <Image
      source={{ uri: url }}
      className="h-52 w-full rounded-2xl bg-potd-image"
      resizeMode="cover"
    />
  );
}
