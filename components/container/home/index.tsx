"use client";
import { POPULAR_CITIES } from "@/utils/popularcities";
import Link from "next/link";
import React from "react";
import SearchBar from "../searchContainer";

export default function HomeWeather() {
  return (
    <div className="max-w-2xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Weather App</h1>
      <SearchBa/>
      <h2 className="text-xl font-semibold mb-4">Popular Cities</h2>
      <div className="grid grid-cols-2 gap-4">
        {POPULAR_CITIES.map((city) => (
          <Link
            href={`/weather/${encodeURIComponent(city)}`}
            key={city}
            className="p-4 bg-blue-100 rounded shadow hover:bg-blue-200 cursor-pointer text-center"
          >
            {city}
          </Link>
        ))}
      </div>
    </div>
  );
}
