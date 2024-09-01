import { Country } from "../types/country";

interface CountryDetailProps {
  country: Country;
  onBack: () => void;
}

const CountryDetail: React.FC<CountryDetailProps> = ({ country, onBack }) => {
  return (
    <div className="detail-view">
      <button onClick={onBack}>Back</button>
      <h1>{country.name.official}</h1>
      <p>Capital: {country.capital?.join(", ")}</p>
      <p>Population: {country.population.toLocaleString()}</p>
      <p>Region: {country.region}</p>
      <p>Languages: {Object.values(country.languages).join(", ")}</p>
      <p>
        Currencies:{" "}
        {Object.values(country.currencies)
          .map((c) => `${c.name} (${c.symbol})`)
          .join(", ")}
      </p>
      <p>Timezones: {country.timezones.join(", ")}</p>
    </div>
  );
};

export default CountryDetail;
