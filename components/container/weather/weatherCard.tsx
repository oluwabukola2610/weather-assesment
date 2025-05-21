import { useFecthWeather } from "@/api/weather";
import Image from "next/image";

const WeatherCard = ({ city }: { city: string | string[] }) => {
  const { data: weatherData, isLoading, error } = useFecthWeather(city);

  if (isLoading) return <div className="p-4">Loading weather data...</div>;
  if (error) return <div className="p-4 text-red-500">Error: {error}</div>;
  if (!weatherData) return <div className="p-4">No weather data available</div>;

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-4">
          Weather for {weatherData.location.name},{" "}
          {weatherData.location.country}
        </h1>
        <div className="flex items-center mb-6">
          <Image
            src={weatherData.current.condition.icon.replace(
              "//cdn.weatherapi.com",
              "https://cdn.weatherapi.com"
            )}
            width={300}
            height={300}
            alt={weatherData.current.condition.text}
            className="w-16 h-16"
          />
          <div className="ml-4">
            <div className="text-3xl font-bold">
              {weatherData.current.temp_c}°C
            </div>
            <div className="text-gray-600">
              {weatherData.current.condition.text}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-gray-50 p-3 rounded">
            <span className="text-gray-600">Feels like</span>
            <div className="font-semibold">
              {weatherData.current.feelslike_c}°C
            </div>
          </div>
          <div className="bg-gray-50 p-3 rounded">
            <span className="text-gray-600">Humidity</span>
            <div className="font-semibold">{weatherData.current.humidity}%</div>
          </div>
          <div className="bg-gray-50 p-3 rounded">
            <span className="text-gray-600">Wind</span>
            <div className="font-semibold">
              {weatherData.current.wind_kph} km/h {weatherData.current.wind_dir}
            </div>
          </div>
          <div className="bg-gray-50 p-3 rounded">
            <span className="text-gray-600">UV Index</span>
            <div className="font-semibold">{weatherData.current.uv}</div>
          </div>
        </div>

        {weatherData.forecast && (
          <div>
            <h2 className="text-xl font-semibold mb-3">3-Day Forecast</h2>
            <div className="grid grid-cols-3 gap-2">
              {weatherData.forecast.forecastday.map((day) => (
                <div
                  key={day.date}
                  className="bg-gray-50 p-3 rounded text-center"
                >
                  <div className="text-sm">
                    {new Date(day.date).toLocaleDateString("en-US", {
                      weekday: "short",
                    })}
                  </div>
                  <Image
                    src={day.day.condition.icon.replace(
                      "//cdn.weatherapi.com",
                      "https://cdn.weatherapi.com"
                    )}
                    alt={day.day.condition.text}
                    width={300}
                    height={300}
                    className="w-10 h-10 mx-auto"
                  />
                  <div className="text-sm font-medium">
                    {day.day.maxtemp_c}° / {day.day.mintemp_c}°
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="text-xs text-gray-500 mt-4">
          Local time: {weatherData.location.localtime}
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
