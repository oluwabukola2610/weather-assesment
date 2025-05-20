"use client";
import { useParams } from "next/navigation";
import React, { Suspense } from "react";

function WeatherDetail({ city }: { city: string }) {
 
  return (
    <div>
      <h1>Weather for {city}</h1>
    </div>
  );
}

export default function WeatherDetailPage() {
  const { city } = useParams();

  if (!city) return <div>No city specified</div>;

  return (
    <Suspense fallback={<div>Loading weather details...</div>}>
      <WeatherDetail city={city} />
    </Suspense>
  );
}
