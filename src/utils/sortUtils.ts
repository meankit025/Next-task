import { Country } from "../types/country";

export const sortCountriesByPopulation = (
  countries: Country[],
  ascending: boolean
) => {
  return countries.sort((a, b) =>
    ascending ? a.population - b.population : b.population - a.population
  );
};

export const sortCountriesByName = (
  countries: Country[],
  ascending: boolean
) => {
  return countries.sort((a, b) =>
    ascending
      ? a.name.common.localeCompare(b.name.common)
      : b.name.common.localeCompare(a.name.common)
  );
};

export const sortCountriesByCapital = (
  countries: Country[],
  ascending: boolean
) => {
  return countries.sort((a, b) =>
    ascending
      ? a.capital?.[0].localeCompare(b.capital?.[0])
      : b.capital?.[0].localeCompare(a.capital?.[0])
  );
};
