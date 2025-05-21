export function trackCitySearch(city) {
  const data = JSON.parse(localStorage.getItem("citySearches") || "{}");
  data[city] = (data[city] || 0) + 1;
  localStorage.setItem("citySearches", JSON.stringify(data));
}

export function getTopSearchedCities() {
  const data = JSON.parse(localStorage.getItem("citySearches") || "{}");
  const entries = Object.entries(data);
  entries.sort((a, b) => b[1] - a[1]);
  return entries.slice(0, 5).map(([city]) => city);
}
