import { Pressable, Text } from "react-native";

export function BirthdayOptions({
  label,
  selected,
  onPress,
}: {
  label: string;
  selected: boolean;
  onPress: () => void;
}): React.JSX.Element {
  return (
    <Pressable
      onPress={onPress}
      style={{
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 999,
        borderWidth: 1,
        backgroundColor: selected ? "black" : "white",
        marginRight: 8,
      }}
    >
      <Text
        style={{
          color: selected ? "white" : "#374151",
          fontWeight: selected ? "600" : "400",
          fontSize: 14,
          minWidth: 20,
          textAlign: "center",
        }}
      >
        {label}
      </Text>
    </Pressable>
  );
}
