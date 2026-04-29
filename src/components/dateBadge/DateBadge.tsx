import { getDateInfo } from "@/helpers";
import { Text, View } from "react-native";

export function DateBadge(): React.JSX.Element {
  const dataInfo = getDateInfo();

  return (
    <View className="w-32 h-10 p-1 bg-primary rounded-3xl flex items-center justify-center">
      <Text className="text-white font-bold">
        {dataInfo.day} {dataInfo.monthShort} {dataInfo.year}
      </Text>
    </View>
  );
}
