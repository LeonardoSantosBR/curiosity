import { videoBelongsToNasa } from "@/helpers";
import { potdDataType } from "@/types";
import { useVideoPlayer, VideoView } from "expo-video";
import { Dimensions, Image } from "react-native";
import { VideoThumbnail } from "../videoThumbnail";

const mediaHeight = Dimensions.get("window").height * 0.6;

export function PotdInspectMediaPreview({
  url,
  media_type,
}: Pick<potdDataType, "url" | "media_type">): React.JSX.Element {
  const isVideo = media_type === "video"
  const belongsToNasa = isVideo && videoBelongsToNasa(url);

  const player = useVideoPlayer(belongsToNasa ? url : null, (p) => {
    p.loop = true;
    p.muted = true;
    p.play();
  });

  if (belongsToNasa) {
    return (
      <VideoView
        player={player}
        style={{ width: "100%", height: mediaHeight }}
        nativeControls
        contentFit="cover"
      />
    )
  }

  if (isVideo) return <VideoThumbnail url={url} isDetailed={true} />;

  return (
    <Image
      source={{ uri: url }}
      style={{ height: mediaHeight }}
      className="bg-potd-image w-full"
      resizeMode="cover"
    />
  );
}
