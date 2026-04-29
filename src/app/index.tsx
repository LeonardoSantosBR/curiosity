import { Header, Iotd } from "@/components";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen(): React.JSX.Element {
  return (
    <SafeAreaView className="flex-1">
      <Header />
      <Iotd />
    </SafeAreaView>
  );
}
