import { getPictureOfDay } from "@/api";
import { BirthdayCardResult, BirthdayOptions, BirthdaySectionLabel } from "@/components";
import { DAYS, MONTHS, YEARS } from "@/constants";
import { formatResultDate } from "@/helpers";
import { potdDataType } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function pad(n: number): string {
  return String(n).padStart(2, "0");
}

export default function PotdMyBirthday(): React.JSX.Element {
  const router = useRouter();
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [selectedMonth, setSelectedMonth] = useState<number | null>(null);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [queryDate, setQueryDate] = useState<string | null>(null);

  const { data, isLoading, isError } = useQuery<potdDataType>({
    queryKey: ["birthdayPicture", queryDate],
    queryFn: () => getPictureOfDay(queryDate!),
    enabled: !!queryDate,
    retry: false,
  });

  const canFetch =
    selectedDay !== null && selectedMonth !== null && selectedYear !== null;

  function handleSearch() {
    if (!canFetch) return;
    setQueryDate(
      `${selectedYear}-${pad(selectedMonth! + 1)}-${pad(selectedDay!)}`
    );
  }

  const handleCardResultPress = (item: potdDataType) => {
    router.push({
      pathname: "/PotdInspect",
      params: {
        url: item.url,
        title: item.title,
        copyright: item.copyright ?? "",
        explanation: item.explanation,
        media_type: item.media_type ?? "image",
      },
    });
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-row items-center gap-3 px-5 pt-4 pb-2">
        <Pressable onPress={() => router.back()}>
          <Text className="text-text-primary text-4xl leading-none">‹</Text>
        </Pressable>
        <Text className="text-text-primary font-bold text-2xl">
          Meu Aniversário
        </Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        <Text className="text-text-secondary text-sm px-5 pb-5">
          Qual foto a NASA tirou no dia do seu nascimento?
        </Text>

        <View className="mb-5">
          <BirthdaySectionLabel label="Dia" />
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 20 }}
          >
            {DAYS.map((day) => (
              <BirthdayOptions
                key={day}
                label={String(day)}
                selected={selectedDay === day}
                onPress={() => setSelectedDay(day)}
              />
            ))}
          </ScrollView>
        </View>

        <View className="mb-5">
          <BirthdaySectionLabel label="Mês" />
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 20 }}
          >
            {MONTHS.map((month, i) => (
              <BirthdayOptions
                key={month}
                label={selectedMonth === i ? `✓ ${month}` : month}
                selected={selectedMonth === i}
                onPress={() => setSelectedMonth(i)}
              />
            ))}
          </ScrollView>
        </View>

        <View className="mb-7">
          <BirthdaySectionLabel label="Ano" />
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 20 }}
          >
            {YEARS.map((year) => (
              <BirthdayOptions
                key={year}
                label={String(year)}
                selected={selectedYear === year}
                onPress={() => setSelectedYear(year)}
              />
            ))}
          </ScrollView>
        </View>

        <Pressable
          onPress={handleSearch}
          disabled={!canFetch || isLoading}
          style={{ marginHorizontal: 20, borderRadius: 16, overflow: "hidden" }}
        >
          {({ pressed }) => (
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
          )}
        </Pressable>

        {isError && (
          <View className="mx-5 mt-5 p-4 bg-red-50 rounded-2xl">
            <Text className="text-red-500 text-sm text-center">
              Não foi possível encontrar uma foto para essa data.
            </Text>
          </View>
        )}

        {data && (
          <BirthdayCardResult
            data={data}
            handleCardResultPress={handleCardResultPress}
            formatResultDate={formatResultDate}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
