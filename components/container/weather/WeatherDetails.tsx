"use client";
import { useParams } from "next/navigation";
import React, { Suspense } from "react";
import WeatherCard from "./weatherCard";

const WeatherDetailPage =()=> {
  const { city } = useParams();

  if (!city) return <div className="p-4">No city specified</div>;

  return (
    <Suspense fallback={<div className="p-4">Loading weather details...</div>}>
      <WeatherCard city={city} />
    </Suspense>
  );
}

export default WeatherDetailPage;