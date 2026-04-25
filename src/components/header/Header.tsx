import { curiosityLogo } from "@/assets/index";
import { Ionicons } from "@expo/vector-icons";
import { Image, Pressable, Text, View } from "react-native";

export function Header() {
  return (
    <View className="h-36 px-4 flex-row items-center justify-between">
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

      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Abrir calendário"
        className="w-11 h-11 items-center justify-center rounded-full bg-header-button active:bg-header-button-active"
      >
        <Ionicons name="calendar-outline" size={20} color={"header-icon"} />
      </Pressable>
    </View>
  );
}
