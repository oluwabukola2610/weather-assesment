import { useQuery } from "@tanstack/react-query";
const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY!;

export const useFecthWeather = (query: string | string[]) => {
  return useQuery({
    queryKey: ["weather", query],
    queryFn: async () => {
      if (!query) return [];
      const res = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${query}&days=3&aqi=no&alerts=no`
      );
      if (!res.ok) {
        throw new Error(`Failed to fetch weather data: ${res.statusText}`);
      }
      return await res.json();
    },
    enabled: !!query,
    staleTime: 1000 * 60 * 5,
  });
};
