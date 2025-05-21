import { getTopSearchedCities } from "@/utils/trackCitySearch";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const PopulatedCities = () => {
  const [topCities, setTopCities] = useState<string[]>([]);

  useEffect(() => {
    const cities = getTopSearchedCities();
    setTopCities(cities);
  }, []);
  return (
    <section className="mb-12">
      <div className="flex items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Top Cities</h2>
        <div className="ml-4 h-px bg-gray-200 flex-grow"></div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {topCities.map((city) => (
          <Link
            href={`/weather/${city}`}
            key={city}
            className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow text-center"
          >
            <span className="text-lg font-medium text-gray-700">{city}</span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default PopulatedCities;
