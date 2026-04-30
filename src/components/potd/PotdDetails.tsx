import { potdDataType } from "@/types";
import { Text, View } from "react-native";
import { PotdMediaPreview } from "./PotdMediaPreview";

export function PotdDetails(data: potdDataType): React.JSX.Element {
  return (
    <>
      <PotdMediaPreview url={data?.url} media_type={data?.media_type} />
      <View className="gap-1 pt-2">
        <Text className="text-text-primary font-bold text-xl leading-snug">
          {data?.title}
        </Text>
        {data?.copyright && (
          <Text className="text-text-tertiary text-sm" numberOfLines={2}>
            ©{data.copyright}
          </Text>
        )}
        <Text className="text-text-secondary text-lg" numberOfLines={2}>
          {data?.explanation}
        </Text>
      </View>
    </>
  );
}
