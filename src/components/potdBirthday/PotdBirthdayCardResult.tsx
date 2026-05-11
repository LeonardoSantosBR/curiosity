import { potdDataType } from "@/types";
import { Pressable, Text, View } from "react-native";

export function PotdBirthdayCardResult({
  data,
  handleCardResultPress,
  formatResultDate,
}: {
  data: potdDataType;
  handleCardResultPress: (item: potdDataType) => void;
  formatResultDate: (date: string) => string;
}): React.JSX.Element {
  return (
    <Pressable
      onPress={() => handleCardResultPress(data)}
      className="mx-5 mt-5 rounded-2xl overflow-hidden"
    >
      {({ pressed }) => (
        <View
          className="p-4 bg-potd-card gap-2"
          style={{ opacity: pressed ? 0.75 : 1 }}
        >
          {data.date && (
            <View
              style={{
                alignSelf: "flex-start",
                backgroundColor: "#0d1b3e",
                paddingHorizontal: 12,
                paddingVertical: 4,
                borderRadius: 999,
              }}
            >
              <Text style={{ color: "white", fontSize: 12, fontWeight: "700" }}>
                {formatResultDate(data.date)}
              </Text>
            </View>
          )}
          <Text className="text-text-primary font-bold text-lg leading-tight">
            {data.title}
          </Text>
          <Text
            className="text-text-secondary text-sm leading-relaxed"
            numberOfLines={3}
          >
            {data.explanation}
          </Text>
        </View>
      )}
    </Pressable>
  );
}
