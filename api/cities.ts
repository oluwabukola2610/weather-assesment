const GEO_API_HOST = process.env.NEXT_PUBLIC_GEO_API_HOST!;
const GEO_API_KEY = process.env.NEXT_PUBLIC_GEO_API_KEY!;

import { useQuery } from "@tanstack/react-query";

export const useFetchCities = (query: string) => {
  return useQuery({
    queryKey: ["cities", query],
    queryFn: async (): Promise<string[]> => {
      if (!query) return [];
      const url = `https://${GEO_API_HOST}/cities?namePrefix=${encodeURIComponent(
        query
      )}&sort=-population`;
      const res = await fetch(url, {
        headers: {
          "X-RapidAPI-Key": GEO_API_KEY,
          "X-RapidAPI-Host": GEO_API_HOST,
        },
      });
      if (!res.ok) throw new Error("Failed to fetch cities");
      const data = await res.json();
      type City = { city: string; countryCode: string };
      return data.data.map((city: City) => `${city.city}`);
    },
    enabled: !!query,
    staleTime: 1000 * 60 * 5,
  });
};
