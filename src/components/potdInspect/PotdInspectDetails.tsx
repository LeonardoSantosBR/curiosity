import { potdDataType } from "@/types";
import { t } from "@lingui/core/macro";
import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { PotdInspectMediaPreview } from "./PotdInspectMediaPreview";

export default function PotdInspectDetails(
  data: potdDataType
): React.JSX.Element {
  const router = useRouter();
  return (
    <View className="gap-5">
      <PotdInspectMediaPreview url={data?.url} media_type={data?.media_type}/>
      <View className="px-10 gap-3">
        <View className="gap-1">
          <Text className="text-text-primary font-bold text-2xl leading-tight">
            {t`${data?.title}`}
          </Text>
          {data?.copyright && (
            <Text className="text-text-tertiary text-sm font-medium">
              ©{data.copyright}
            </Text>
          )}
        </View>
        <View className="h-px bg-inspect-divider" />
        <Text className="text-text-secondary text-base leading-relaxed">
          {t`${data?.explanation}`}
        </Text>
        <Pressable
          onPress={() => router.back()}
          className="rounded-2xl overflow-hidden mt-10"
        >
          {({ pressed }) => (
            <View
              className={`items-center py-4 bg-inspect-button ${
                pressed ? "opacity-70" : "opacity-100"
              }`}
            >
              <Text className="text-inspect-button-text font-semibold text-base tracking-wide">
                {t`Voltar`}
              </Text>
            </View>
          )}
        </Pressable>
      </View>
    </View>
  );
}
