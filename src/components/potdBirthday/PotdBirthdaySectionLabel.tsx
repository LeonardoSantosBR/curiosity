import { Text } from "react-native";

export function PotdBirthdaySectionLabel({ label }: { label: string }): React.JSX.Element {
  return (
    <Text
      className="text-birthday-section-label px-5 mb-2 font-bold"
      style={{
        fontSize: 11,
        letterSpacing: 1.5,
      }}
    >
      {label}
    </Text>
  );
}