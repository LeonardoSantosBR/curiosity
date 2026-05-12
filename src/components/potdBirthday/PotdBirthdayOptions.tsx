import { Pressable, Text } from "react-native";

export function PotdBirthdayOptions({
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
      className={`px-4 py-2 rounded-full border mr-2 ${selected ? "bg-birthday-option" : "bg-birthday-option-inactive"}`}
    >
      <Text
        className={`text-sm text-center ${selected ? "text-birthday-option-text font-semibold" : "text-birthday-option-text-inactive font-normal"}`}
        style={{ minWidth: 20 }}
      >
        {label}
      </Text>
    </Pressable>
  );
}
