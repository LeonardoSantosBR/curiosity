import axios from "axios";
const apiNasaUrl = process.env.EXPO_PUBLIC_NASA_API_BASE_URL;

export const api = axios.create({
  baseURL: apiNasaUrl
});