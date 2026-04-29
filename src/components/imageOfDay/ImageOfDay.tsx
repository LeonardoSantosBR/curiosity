import { Pressable, Text, View } from "react-native";
import { DataCard } from "../dataCard";

export function ImageOfDay(): React.JSX.Element {
  const handlePress = () => {
    console.log("Pressed");
  };

  return (
    <View className="p-4 gap-3">
      <Pressable
        onPress={handlePress}
        className="rounded-3xl overflow-hidden"
      >
        {({ pressed }) => (
          <View
            className={`p-5 bg-imageDay-card rounded-2xl gap-3 ${
              pressed ? "opacity-80" : "opacity-100"
            }`}
          >
            <DataCard />
            <View className="h-52 bg-imageDay-image rounded-2xl items-center justify-center" />
            <View className="gap-1 pt-2">
              <Text className="text-text-primary font-bold text-xl leading-snug">
                The Blue Marble: Earth from Apollo 17
              </Text>
              <Text className="text-text-tertiary text-sm">
                © NASA / Apollo 17 Crew
              </Text>
              <Text className="text-text-secondary text-lg" numberOfLines={2}>
                Taken on December 7, 1972, this photograph of Earth became one of the most reproduced images in history...
              </Text>
            </View>
          </View>
        )}
      </Pressable>

      <Pressable onPress={handlePress}>
        {({ pressed }) => (
          <View
            className={`flex-row items-center gap-3 p-4 rounded-2xl border border-gray-300 ${
              pressed ? "opacity-70" : "opacity-100"
            }`}
          >
            <View className="w-9 h-9 rounded-xl bg-orange-100 items-center justify-center">
              <Text className="text-orange-500 text-base">⇄</Text>
            </View>
            <Text className="text-text-primary font-semibold text-base">
              Explorar aleatórias
            </Text>
          </View>
        )}
      </Pressable>

      <Pressable onPress={handlePress}>
        {({ pressed }) => (
          <View
            className={`flex-row items-center gap-3 p-4 rounded-2xl border border-gray-300 ${
              pressed ? "opacity-70" : "opacity-100"
            }`}
          >
            <View className="w-9 h-9 rounded-xl bg-red-100 items-center justify-center">
              <Text className="text-red-400 text-base">▦</Text>
            </View>
            <Text className="text-text-primary font-semibold text-base">
              No meu aniversário
            </Text>
          </View>
        )}
      </Pressable>
    </View>
  );
}
