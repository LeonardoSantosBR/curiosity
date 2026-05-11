import { Text, View } from "react-native";

export function PotdBirthdayFindButton({
  isError,
  canFetch,
  isLoading,
  pressed,
}: {
  isError: boolean;
  canFetch: boolean;
  isLoading: boolean;
  pressed: boolean;
}): React.JSX.Element {
  return (
    <View
      style={{
        backgroundColor: canFetch ? "black" : "#d1d5db",
        opacity: pressed && canFetch ? 0.8 : 1,
        paddingVertical: 16,
        alignItems: "center",
      }}
    >
      <Text style={{ color: "white", fontWeight: "600", fontSize: 16 }}>
        {isLoading ? "Buscando..." : "Ver foto do cosmos"}
      </Text>
    </View>
  );
}
