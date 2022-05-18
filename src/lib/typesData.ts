import axios from "axios";
import type { PokeType } from "src/@types/types";
import { writable } from "svelte/store";

export const typesData = writable<PokeType[]>([]);

export const loading = writable<boolean>(false);

export const loadTypes = async () => {
  loading.set(true);
  const { data } = await axios.get("https://pokeapi.co/api/v2/type/");
  const typesRequestData: PokeType[] = data.results.map(
    (typeRequestData, index) => {
      return {
        name: typeRequestData.name,
        id: typeRequestData.url.split("/")[6],
      };
    }
  );
  typesData.set(typesRequestData);
  loading.set(false);
};
