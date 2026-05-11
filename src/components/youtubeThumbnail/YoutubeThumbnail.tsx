import { extractYouTubeId } from "@/helpers";
import { useState } from "react";
import { Image, Linking, Pressable, Text, View } from "react-native";

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
      <View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
        }}
      >
        <View
          style={{
            width: 56,
            height: 56,
            borderRadius: 28,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "red", fontSize: 22, marginLeft: 4 }}>▶</Text>
        </View>
      </View>
    </Pressable>
  );
}
