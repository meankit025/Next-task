import { useState } from "react";
import { useCountries } from "../hooks/useCountries";
import { useSort } from "../hooks/useSort";
import CountryCard from "../components/CountryCard";
import CountryDetail from "../components/CountryDetail";
import SortControls from "../components/SortControls";
import DarkModeToggle from "../components/DarkModeToggle";

interface Country {
  name: {
    common: string;
    official: string;
  };
  capital: string[];
  region: string;
  population: number;
  flags: {
    svg: string;
    png: string;
  };
  languages: Record<string, string>;
  currencies: Record<string, { name: string; symbol: string }>;
  timezones: string[];
}

export default function Home() {
  const { data: countries, isLoading, isError } = useCountries();
  const { sortedCountries, sortCountries, sortKey, ascending } = useSort(
    countries || []
  );
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading countries</div>;

  const handleSortChange = (
    key: "name" | "capital" | "population",
    ascending: boolean
  ) => {
    sortCountries(key, ascending);
  };

  const handleCountryClick = (country: Country) => {
    setSelectedCountry(country);
  };

  const handleBack = () => {
    setSelectedCountry(null);
  };

  return (
    <div className="container">
      <DarkModeToggle />
      {selectedCountry ? (
        <CountryDetail country={selectedCountry} onBack={handleBack} />
      ) : (
        <>
          <SortControls
            sortKey={sortKey}
            ascending={ascending}
            onSortChange={handleSortChange}
          />
          <div className="country-list">
            {sortedCountries.map((country) => (
              <CountryCard
                key={country.name.common}
                country={country}
                onClick={() => handleCountryClick(country)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
