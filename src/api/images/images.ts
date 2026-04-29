import { api } from "../api";

export async function getImageOfDay(date: string) {
  const apiKey = process.env.EXPO_PUBLIC_NASA_API_KEY;
  const response = await api.get(`?date=${date}&api_key=${apiKey}`, {});
  return response.data;
}
