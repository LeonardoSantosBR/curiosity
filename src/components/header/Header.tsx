import { curiosityLogo } from "@/assets/index";
import { Image, Text, View } from "react-native";

export function Header(): React.JSX.Element {
  return (
    <View className="h-24 px-4 flex-row items-center justify-between">
      <View className="flex-row items-center gap-3">
        <Image
          source={curiosityLogo}
          className="w-16 h-16 rounded-lg"
          resizeMode="contain"
        />
        <View>
          <Text className="text-2xl font-bold text-header-title leading-tight">
            Curiosity
          </Text>
          <Text className="text-sm text-header-subtitle">
            Foto do dia · <Text className="text-header-accent">NASA</Text>
          </Text>
        </View>
      </View>
    </View>
  );
}
