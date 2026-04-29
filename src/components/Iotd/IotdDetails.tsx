import { Image, Text, View } from "react-native";

export function IotdDetails(data: {
  url: string;
  title: string;
  copyright: string;
  explanation: string;
}): React.JSX.Element {
  return (
    <>
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
    </>
  );
}
