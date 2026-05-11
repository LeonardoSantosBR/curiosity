import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

export function PotdRandomHeader() {
  const router = useRouter();

  return (
    <View className="flex-row items-center justify-between px-5 pt-14 pb-4">
      <Pressable
        onPress={() => router.back()}
        className="flex-row items-center gap-3"
      >
        <Text className="text-text-primary text-4xl leading-none">‹</Text>
        <Text className="text-text-primary font-bold text-xl">Explorar</Text>
      </Pressable>
    </View>
  );
}
