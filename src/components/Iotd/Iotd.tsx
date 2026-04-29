import { getDateInfo } from "@/helpers";
import { useGetImageOfDay } from "@/hooks";
import { Pressable, Text, View } from "react-native";
import { Loading } from "../loading/Loading";
import { DateBadge } from "./DateBadge";
import { IotdDetails } from "./IotdDetails";

export function Iotd(): React.JSX.Element {
  const dateInfo = getDateInfo();
  const date = dateInfo.dateCompleted;
  const { data, isLoading } = useGetImageOfDay(date);

  const handlePress = () => {
    console.log("Pressed");
  };

  return (
    <View className="p-4 gap-3">
      <Pressable onPress={handlePress} className="rounded-3xl overflow-hidden">
        {({ pressed }) => (
          <View
            className={`p-5 bg-imageDay-card rounded-2xl gap-3 ${
              pressed ? "opacity-80" : "opacity-100"
            }`}
          >
            <DateBadge />
            <IotdDetails
              url={data?.url}
              title={data?.title}
              copyright={data?.copyright}
              explanation={data?.explanation}
            />
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
              <Text className="text-orange-500 text-lg">⇄</Text>
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
              <Text className="text-red-400 text-lg">▦</Text>
            </View>
            <Text className="text-text-primary font-semibold text-base">
              No meu aniversário
            </Text>
          </View>
        )}
      </Pressable>
      {isLoading && <Loading />}
    </View>
  );
}
