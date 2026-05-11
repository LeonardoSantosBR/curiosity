import { extractYouTubeId } from "@/helpers";
import { useState } from "react";
import { Image, Linking, Pressable, View } from "react-native";
import { PlayOverlay } from "../playOverlay";

export function YouTubeThumbnail({
  url,
  isDetailed = false,
}: {
  url: string;
  isDetailed?: boolean;
}): React.JSX.Element {
  const videoId = extractYouTubeId(url);
  const [thumbnailUri, setThumbnailUri] = useState(
    videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : null
  );
  const watchUrl = videoId ? `https://www.youtube.com/watch?v=${videoId}` : url;

  return (
    <Pressable
      onPress={() => Linking.openURL(watchUrl)}
      style={{
        width: "100%",
        height: 208,
        overflow: "hidden",
        borderRadius: isDetailed ? 0 : 16,
      }}
    >
      {thumbnailUri ? (
        <Image
          source={{ uri: thumbnailUri }}
          style={{ width: "100%", height: "100%" }}
          resizeMode="cover"
          onError={() =>
            setThumbnailUri(
              videoId
                ? `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`
                : null
            )
          }
        />
      ) : (
        <View style={{ flex: 1 }} />
      )}
      <PlayOverlay />
    </Pressable>
  );
}
