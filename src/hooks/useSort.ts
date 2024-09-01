import { useState } from "react";
import { Country } from "../types/country";
import {
  sortCountriesByPopulation,
  sortCountriesByName,
  sortCountriesByCapital,
} from "../utils/sortUtils";

export const useSort = (countries: Country[]) => {
  const [sortedCountries, setSortedCountries] = useState<Country[]>(countries);
  const [sortKey, setSortKey] = useState<"name" | "capital" | "population">(
    "name"
  );
  const [ascending, setAscending] = useState<boolean>(true);

  const sortCountries = (
    key: "name" | "capital" | "population",
    ascending: boolean
  ) => {
    let sorted;
    if (key === "name") {
      sorted = sortCountriesByName(countries, ascending);
    } else if (key === "capital") {
      sorted = sortCountriesByCapital(countries, ascending);
    } else {
      sorted = sortCountriesByPopulation(countries, ascending);
    }
    setSortedCountries(sorted);
    setSortKey(key);
    setAscending(ascending);
  };

  return { sortedCountries, sortCountries, sortKey, ascending };
};
