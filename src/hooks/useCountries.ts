import { useQuery } from "react-query";
import axios from "axios";
import { Country } from "../types/country";

export const useCountries = () => {
  return useQuery<Country[]>("countries", async () => {
    const { data } = await axios.get("https://restcountries.com/v3.1/all");
    return data;
  });
};
