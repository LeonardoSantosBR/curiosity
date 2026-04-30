import { Header, Potd } from "@/components";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen(): React.JSX.Element {
  return (
    <SafeAreaView className="flex-1">
      <Header />
      <Potd />
    </SafeAreaView>
  );
}
