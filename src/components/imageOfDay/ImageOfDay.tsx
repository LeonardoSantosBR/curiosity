import { getDateInfo } from "@/helpers";
import { useGetImageOfDay } from "@/hooks";
import { Image, Pressable, Text, View } from "react-native";
import { DateCard } from "../dateCard";
import { Loading } from "../loading/Loading";

export function ImageOfDay(): React.JSX.Element {
  const dataInfo = getDateInfo();
  const date = dataInfo.dateCompleted;
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
            <DateCard />
            <Image
              source={{ uri: data?.url }}
              className="h-52 w-full rounded-2xl bg-imageDay-image"
              resizeMode="cover"
            />
            <View className="gap-1 pt-2">
              <Text className="text-text-primary font-bold text-xl leading-snug">
                {data?.title}
              </Text>
              <Text className="text-text-tertiary text-sm " numberOfLines={2}>
                ©{data?.copyright}
              </Text>
              <Text className="text-text-secondary text-lg" numberOfLines={2}>
                {data?.explanation}
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
