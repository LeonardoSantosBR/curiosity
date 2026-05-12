import { CARD_WIDTH } from "@/constants";
import { formatDisplayDate, getCardThumbnail } from "@/helpers";
import { potdDataType } from "@/types";
import { t } from "@lingui/core/macro";
import { Image, Pressable, Text, View } from "react-native";

export function PotdRandomCard({
  item,
  onPress,
}: {
  item: potdDataType;
  onPress: () => void;
}): React.JSX.Element {
  const thumbnail = getCardThumbnail(item);

  return (
    <Pressable onPress={onPress} style={{ width: CARD_WIDTH }}>
      {({ pressed }) => (
        <View
          style={{ opacity: pressed ? 0.75 : 1 }}
          className="bg-random-card rounded-2xl overflow-hidden border border-random-card-border"
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
              <Text className="text-random-date text-xs font-semibold">
                {formatDisplayDate(item.date)}
              </Text>
            )}
            <Text
              className="text-text-primary font-bold text-sm leading-tight"
              numberOfLines={2}
            >
              {t`${item.title}`}
            </Text>
          </View>
        </View>
      )}
    </Pressable>
  );
}
