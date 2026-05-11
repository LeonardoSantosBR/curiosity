import { Header, PotdDateBadge, PotdDetails, PotdNoData } from "@/components";
import { Loading } from "@/components/loading/Loading";
import { useGetPotd } from "@/hooks";
import { useDateStore } from "@/stores";
import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen(): React.JSX.Element {
  const date = useDateStore((state) => state.date);
  const { data, isLoading } = useGetPotd(date);
  const router = useRouter();

  const handlePress = () => {
    if (!data) return;
    router.push({
      pathname: "/PotdInspect",
      params: {
        url: data.url,
        title: data.title,
        copyright: data.copyright,
        explanation: data.explanation,
        media_type: data.media_type,
      },
    });
  };

  return (
    <SafeAreaView className="flex-1">
      <Header />
      <View className="h-screen bg-white p-4 gap-3">
        <Pressable onPress={handlePress} className="rounded-3xl overflow-hidden">
          {({ pressed }) => (
            <View
              className={`p-5 bg-potd-card rounded-2xl gap-3 ${pressed ? "opacity-80" : "opacity-100"
                }`}
            >
              <PotdDateBadge />
              {data ? (
                <PotdDetails
                  url={data.url}
                  title={data.title}
                  copyright={data.copyright}
                  explanation={data.explanation}
                  media_type={data.media_type}
                />
              ) : (
                !isLoading && <PotdNoData />
              )}
            </View>
          )}
        </Pressable>

        <Pressable onPress={handlePress}>
          {({ pressed }) => (
            <View
              className={`flex-row items-center gap-3 p-4 rounded-2xl border border-gray-300 ${pressed ? "opacity-70" : "opacity-100"
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
              className={`flex-row items-center gap-3 p-4 rounded-2xl border border-gray-300 ${pressed ? "opacity-70" : "opacity-100"
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
    </SafeAreaView>
  );
}