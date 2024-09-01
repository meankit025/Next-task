import { Country } from "../types/country";
import Image from "next/image";
import styles from "../styles/CountryCard.module.css";

interface CountryCardProps {
  country: Country;
  onClick: () => void;
}

const CountryCard: React.FC<CountryCardProps> = ({ country, onClick }) => {
  return (
    <div className={styles.card} onClick={onClick}>
      <Image
        src={country.flags.svg}
        alt={`${country.name.common} flag`}
        width={100}
        height={50}
      />
      <h2>{country.name.common}</h2>
      <p>Capital: {country.capital?.[0]}</p>
      <p>Population: {country.population.toLocaleString()}</p>
      <p>Region: {country.region}</p>
    </div>
  );
};

export default CountryCard;
