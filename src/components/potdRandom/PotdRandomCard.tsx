import { CARD_WIDTH, MONTHS } from "@/constants";
import { getCardThumbnail } from "@/helpers";
import { potdDataType } from "@/types";
import { Image, Pressable, Text, View } from "react-native";

export function PotdRandomCard({
  item,
  onPress,
}: {
  item: potdDataType;
  onPress: () => void;
}): React.JSX.Element {
  function formatDate(dateStr?: string): string {
    if (!dateStr) return "";
    const [year, month, day] = dateStr.split("-");
    return `${day} ${MONTHS[parseInt(month) - 1]} ${year}`;
  }

  const thumbnail = getCardThumbnail(item);

  return (
    <Pressable onPress={onPress} style={{ width: CARD_WIDTH }}>
      {({ pressed }) => (
        <View
          style={{ opacity: pressed ? 0.75 : 1 }}
          className="bg-white rounded-2xl overflow-hidden border border-gray-100"
        >
          {thumbnail ? (
            <Image
              source={{ uri: thumbnail }}
              style={{ width: "100%", height: 110 }}
              resizeMode="cover"
            />
          ) : (
            <View
              style={{ width: "100%", height: 110 }}
              className="bg-potd-card items-center justify-center"
            />
          )}
          <View className="p-2.5 gap-0.5">
            {item.date && (
              <Text className="text-[#ef7c00] text-xs font-semibold">
                {formatDate(item.date)}
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
