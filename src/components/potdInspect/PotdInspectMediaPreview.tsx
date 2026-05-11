import { potdDataType } from "@/types";
import { useVideoPlayer, VideoView } from "expo-video";
import { Dimensions, Image } from "react-native";
import { YouTubeThumbnail } from "../youtubeThumbnail";

export function PotdInspectMediaPreview({
  url,
  media_type,
}: Pick<potdDataType, "url" | "media_type">): React.JSX.Element {
  const imageHeight = Dimensions.get("window").height * 0.6;
  const isYoutube =
    media_type === "video" &&
    (url.includes("youtube.com") || url.includes("youtu.be"));

  const player = useVideoPlayer(media_type === "video" ? url : null, (p) => {
    p.loop = true;
    p.muted = true;
    p.play();
  });

  if (media_type === "video") {
    if (isYoutube) return <YouTubeThumbnail url={url} />;

    return (
      <VideoView
        player={player}
        style={{ height: 408, width: "100%" }}
        nativeControls={false}
        contentFit="cover"
        fullscreenOptions={{ enable: true }}
      />
    );
  }
  return (
    <Image
      source={{ uri: url }}
      style={{ height: imageHeight }}
      className="bg-potd-image"
      resizeMode="cover"
    />
  );
}
