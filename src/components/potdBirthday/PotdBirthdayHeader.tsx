import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

export function PotdBirthdayHeader(): React.JSX.Element {
  const router = useRouter();

  return (
    <View className="flex-row items-center gap-3 px-5 pt-4 pb-2">
      <Pressable onPress={() => router.back()}>
        <Text className="text-text-primary text-4xl leading-none">‹</Text>
      </Pressable>
      <Text className="text-text-primary font-bold text-2xl">
        Meu Aniversário
      </Text>
    </View>
  );
}
