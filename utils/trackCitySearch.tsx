export function trackCitySearch(city: string) {
  const data = JSON.parse(localStorage.getItem("citySearches") || "{}");
  data[city] = (data[city] || 0) + 1;
  localStorage.setItem("citySearches", JSON.stringify(data));
}

export function getTopSearchedCities() {
  const data = JSON.parse(localStorage.getItem("citySearches") || "{}") as Record<string, number>;
  const entries = Object.entries(data);
  entries.sort((a, b) => (b[1] as number) - (a[1] as number));
  return entries.slice(0, 5).map(([city]) => city);
}
