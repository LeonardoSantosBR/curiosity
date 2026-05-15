import { getCloudFlareWorkerImageUrl } from "@/helpers";
import { potdDataType } from "@/types";
import { t } from "@lingui/core/macro";
import { Image, Pressable, Text, View } from "react-native";

export function PotdBirthdayCardResult({
  data,
  handleCardResultPress,
  formatDisplayDate,
}: {
  data: potdDataType;
  handleCardResultPress: (item: potdDataType) => void;
  formatDisplayDate: (date: string) => string;
}): React.JSX.Element {
  const isImage = data.media_type === "image"

  return (
    <Pressable
      onPress={() => handleCardResultPress(data)}
      className="mx-5 mt-5 rounded-2xl overflow-hidden"
    >
      {({ pressed }) => (
        <View
          className="flex-row h-36 bg-potd-card gap-2"
          style={{ opacity: pressed ? 0.75 : 1 }}
        >
          {isImage &&
            <Image
              source={{ uri: getCloudFlareWorkerImageUrl(data.url) }}
              className=" w-24"
              resizeMode="cover"
            />
          }

          <View className="flex-1 p-2 pr-3 py-3 gap-2">
            {data.date && (
              <View
                className="self-start bg-birthday-badge px-3 py-1 rounded-full"
              >
                <Text className="text-birthday-badge-text text-xs font-bold">
                  {formatDisplayDate(data.date)}
                </Text>
              </View>
            )}
            <Text className="text-text-primary font-bold text-lg leading-tight">
              {t`${data.title}`}
            </Text>
            <Text
              className="text-text-secondary text-sm leading-relaxed"
              numberOfLines={2}
            >
              {t`${data.explanation}`}
            </Text>
          </View>
        </View>
      )
      }
    </Pressable >
  );
}
