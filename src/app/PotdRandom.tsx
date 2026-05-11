import { PotdCard } from "@/components";
import { Loading } from "@/components/loading/Loading";
import { CARD_GAP, H_PADDING } from "@/constants";
import { useGetRandomPotd } from "@/hooks";
import { potdDataType } from "@/types";
import { useRouter } from "expo-router";
import {
    FlatList,
    Pressable,
    Text,
    View
} from "react-native";

export default function PotdRandom(): React.JSX.Element {
  const { data, isLoading } = useGetRandomPotd();
  const router = useRouter();

  const handleCardPress = (item: potdDataType) => {
    router.push({
      pathname: "/PotdInspect",
      params: {
        url: item.url,
        title: item.title,
        copyright: item.copyright ?? "",
        explanation: item.explanation,
        media_type: item.media_type ?? "image",
      },
    });
  };

  return (
    <View className="flex-1 bg-white">
      <View className="flex-row items-center justify-between px-5 pt-14 pb-4">
        <Pressable
          onPress={() => router.back()}
          className="flex-row items-center gap-3"
        >
          <Text className="text-text-primary text-4xl leading-none">‹</Text>
          <Text className="text-text-primary font-bold text-xl">Explorar</Text>
        </Pressable>
      </View>

      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={data}
          keyExtractor={(_, i) => String(i)}
          numColumns={2}
          columnWrapperStyle={{ gap: CARD_GAP, marginBottom: CARD_GAP }}
          contentContainerStyle={{
            paddingHorizontal: H_PADDING,
            paddingBottom: 24,
          }}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <PotdCard item={item} onPress={() => handleCardPress(item)} />
          )}
        />
      )}
    </View>
  );
}
