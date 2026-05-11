import { Text } from "react-native";

export function PotdBirthdaySectionLabel({ label }: { label: string }): React.JSX.Element {
  return (
    <Text
      style={{
        color: "#9ca3af",
        fontSize: 11,
        fontWeight: "700",
        letterSpacing: 1.5,
        paddingHorizontal: 20,
        marginBottom: 8,
      }}
    >
      {label}
    </Text>
  );
}