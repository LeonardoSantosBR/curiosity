import Ionicons from '@expo/vector-icons/Ionicons';
import { t } from "@lingui/core/macro";
import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

export function PotdBirthdayHeader(): React.JSX.Element {
  const router = useRouter();

  return (
    <View className="flex-row items-center gap-3 px-5 pt-4 pb-2">
      <Pressable onPress={() => router.back()}>
        <Ionicons name="arrow-back-circle" size={24} color="black" />
      </Pressable>
      <Text className="text-text-primary font-bold text-2xl">
        {t`Meu Aniversário`}
      </Text>
    </View>
  );
}
