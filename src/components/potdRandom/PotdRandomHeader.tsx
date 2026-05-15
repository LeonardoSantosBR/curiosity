import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import { t } from "@lingui/core/macro";
import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

type Props = {
  onRefresh: () => void;
};

export function PotdRandomHeader({ onRefresh }: Props) {
  const router = useRouter();

  return (
    <View className="flex-row items-center justify-between px-5 pt-14 pb-4">
      <Pressable
        onPress={() => router.back()}
        className="flex-row items-center gap-3"
      >
        <Ionicons name="arrow-back-circle" size={24} color="black" />
        <Text className="text-text-primary font-bold text-2xl">{t`Explorar`}</Text>
      </Pressable>
      <Pressable onPress={onRefresh}>
        <Feather name="refresh-cw" size={24} color="blue" />
      </Pressable>
    </View>
  );
}
