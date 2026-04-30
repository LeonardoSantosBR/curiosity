import { Header } from "@/components";
import { SafeAreaView } from "react-native-safe-area-context";
import { Potd } from "./potd";

export default function HomeScreen(): React.JSX.Element {
  return (
    <SafeAreaView className="flex-1">
      <Header />
      <Potd />
    </SafeAreaView>
  );
}
