"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useFetchCities } from "@/api/cities";
import Input from "../ui/input";
import SearchList from "../ui/searchList";
import { trackCitySearch } from "@/utils/trackCitySearch";

export default function SearchBar() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const { data: Cities = [], isLoading } = useFetchCities(search);

  const handleSelect = (value: string) => {
    router.push(`/weather/${value}`);
    trackCitySearch(value)
    setSearch("");
  };

  return (
    <div className="mb-8 relative">
      <Input
        type="text"
        value={search}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearch(e.target.value)
        }
        placeholder="Search for a city..."
      />
      {search && (
        <SearchList
          results={Cities.slice(0, 5)}
          loading={isLoading}
          onSelect={handleSelect}
        />
      )}
    </div>
  );
}
