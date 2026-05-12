import { Text, View } from "react-native";

export function PotdBirthdayError({isError}: {isError: boolean}): React.JSX.Element {
    return (
        <>
          {isError && (
            <View className="mx-5 mt-5 p-4 bg-birthday-error-surface rounded-2xl">
              <Text className="text-birthday-error-text text-sm text-center">
                Não foi possível encontrar uma foto para essa data.
              </Text>
            </View>
          )}
        </>
    )
}
