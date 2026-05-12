import { getPictureOfDay } from "@/api";
import {
  Loading,
  PotdBirthdayCardResult,
  PotdBirthdayError,
  PotdBirthdayFindButton,
  PotdBirthdayHeader,
  PotdBirthdayOptions,
  PotdBirthdaySectionLabel,
} from "@/components";
import { DAYS, MONTHS, YEARS } from "@/constants";
import { formatDisplayDate } from "@/helpers";
import { potdDataType } from "@/types";
import { t } from "@lingui/core/macro";
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
      <PotdBirthdayHeader />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        <Text className="text-text-secondary text-sm px-5 pb-5">
          {t`Qual foto a NASA tirou no dia do seu nascimento?`}
        </Text>

        <View className="mb-5">
          <PotdBirthdaySectionLabel label={t`Dia`} />
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 20 }}
          >
            {DAYS.map((day) => (
              <PotdBirthdayOptions
                key={day}
                label={String(day)}
                selected={selectedDay === day}
                onPress={() => setSelectedDay(day)}
              />
            ))}
          </ScrollView>
        </View>

        <View className="mb-5">
          <PotdBirthdaySectionLabel label={t`Mês`} />
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 20 }}
          >
            {MONTHS.map((month, i) => (
              <PotdBirthdayOptions
                key={month}
                label={selectedMonth === i ? month : month}
                selected={selectedMonth === i}
                onPress={() => setSelectedMonth(i)}
              />
            ))}
          </ScrollView>
        </View>

        <View className="mb-7">
          <PotdBirthdaySectionLabel label={t`Ano`} />
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 20 }}
          >
            {YEARS.map((year) => (
              <PotdBirthdayOptions
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
            <PotdBirthdayFindButton
              isError={!!isError}
              canFetch={canFetch}
              isLoading={isLoading}
              pressed={pressed}
            />
          )}
        </Pressable>

        <PotdBirthdayError isError={!!isError} />

        {data && (
          <PotdBirthdayCardResult
            data={data}
            handleCardResultPress={handleCardResultPress}
            formatDisplayDate={formatDisplayDate}
          />
        )}

        {isLoading && <Loading />}
      </ScrollView>
    </SafeAreaView>
  );
}
