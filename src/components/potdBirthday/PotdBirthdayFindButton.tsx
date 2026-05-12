import { t } from "@lingui/core/macro";
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
      className={`items-center py-4 ${
        canFetch ? "bg-birthday-button" : "bg-birthday-button-disabled"
      }`}
      style={{ opacity: pressed && canFetch ? 0.8 : 1 }}
    >
      <Text className="text-birthday-button-text font-semibold text-base">
        {t`Ver foto do cosmos`}
      </Text>
    </View>
  );
}
