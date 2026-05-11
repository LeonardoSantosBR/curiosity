import { api } from "../api";

export async function getPictureOfDay(date: string) {
  const apiKey = process.env.EXPO_PUBLIC_NASA_API_KEY;
  const response = await api.get(`?date=${date}&api_key=${apiKey}`, {});
  return response.data;
}

export async function getRandomPictures() {
  const apiKey = process.env.EXPO_PUBLIC_NASA_API_KEY;
  const response = await api.get(`?count=10&api_key=${apiKey}`, {});
  return response.data;
}
