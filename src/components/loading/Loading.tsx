import { ActivityIndicator, View } from "react-native";

export function Loading(): React.JSX.Element {
  return (
    <View className="absolute inset-0 items-center justify-center bg-white/55">
      <ActivityIndicator size={40} color="blue" />
    </View>
  );
}
