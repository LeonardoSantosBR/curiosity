import Entypo from '@expo/vector-icons/Entypo';
import { View } from "react-native";

export function PlayOverlay(): React.JSX.Element {
  return (
    <View className="absolute inset-0 items-center justify-center bg-black/60">
      <View className="h-[46px] w-[46px] items-center justify-center rounded-full bg-red-500">
        <Entypo name="controller-play" size={26} color="white" />
      </View>
    </View>)
}

