import { Text } from "react-native";

export function PotdNoData(): React.JSX.Element {
  return (
    <Text className="text-text-primary text-center text-sm py-4">
      Ainda não há foto ou vídeo do dia disponível.
    </Text>
  );
}
