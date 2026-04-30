import { potdDataType } from "@/types";
import { Image } from "expo-image";
import { useVideoPlayer, VideoView } from "expo-video";

export function PotdMediaPreview({ url, media_type }: Pick<potdDataType, "url" | "media_type">): React.JSX.Element {
  const player = useVideoPlayer(
    media_type === "video" ? url : null,
    (p) => {
      p.loop = true;
      p.muted = true;
      p.play();
    }
  );

  if (media_type === "video") {
    return (
      <VideoView
        player={player}
        style={{ height: 208, width: "100%", borderRadius: 16 }}
        nativeControls={false}
        contentFit="cover"
        fullscreenOptions={{ enable: true }}
      />
    );
  }
  return (
    <Image
      source={{ uri: url }}
      className="h-52 w-full rounded-2xl bg-imageDay-image"
      resizeMode="cover"
    />
  );
}