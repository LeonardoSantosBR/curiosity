import PotdInspectDetails from "@/components/potdInspect/PotdInspectDetails";
import { useLocalSearchParams } from "expo-router";
import { ScrollView, View } from "react-native";

export default function PotdInspect(): React.JSX.Element {
  const { url, title, copyright, explanation, media_type } =
    useLocalSearchParams<{
      url: string;
      title: string;
      copyright: string;
      explanation: string;
      media_type: string;
    }>();

  return (
    <View className="flex-1 bg-white">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: 60,
          paddingBottom: 40,
        }}
      >
        <PotdInspectDetails
          url={url}
          title={title}
          copyright={copyright}
          explanation={explanation}
          media_type={media_type as "image" | "video"}
        />
      </ScrollView>
    </View>
  );
}
