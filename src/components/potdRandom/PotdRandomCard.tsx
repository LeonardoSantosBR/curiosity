import { CARD_WIDTH } from "@/constants";
import { formatDisplayDate } from "@/helpers";
import { potdDataType } from "@/types";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Image, Pressable, Text, View } from "react-native";

export function PotdRandomCard({
  item,
  thumbnailUrl,
  onPress,
}: {
  item: potdDataType;
  thumbnailUrl: string | null;
  onPress: () => void;
}): React.JSX.Element {
  return (
    <Pressable onPress={onPress} style={{ width: CARD_WIDTH }}>
      {({ pressed }) => (
        <View
          style={{ opacity: pressed ? 0.75 : 1 }}
          className="bg-random-card rounded-2xl overflow-hidden border border-random-card-border"
        >
          {thumbnailUrl ? (
            <Image
              source={{ uri: thumbnailUrl }}
              style={{ width: "100%", height: 120 }}
              resizeMode="cover"
            />
          ) : (
            <View className="w-full h-[110px] items-center justify-center bg-potd-card">
              <FontAwesome name="play-circle" size={26} color="red" />
            </View>
          )}
          <View className="p-2.5 gap-0.5">
            {item.date && (
              <Text className="text-random-date text-xs font-semibold">
                {formatDisplayDate(item.date)}
              </Text>
            )}
            <Text
              className="text-text-primary font-bold text-sm leading-tight"
              numberOfLines={2}
            >
              {item.title}
            </Text>
          </View>
        </View>
      )}
    </Pressable>
  );
}
