import axios from "axios";
import type { Pokemon } from "src/@types/types";
import { writable } from "svelte/store";

export const pokemonTypeData = writable<Pokemon[]>();

export const loading = writable<boolean>();

export const loadPokemonTypeData = async (id: number) => {
  loading.set(true);
  const { data } = await axios.get(`https://pokeapi.co/api/v2/type/${id}`);
  const parsedPokemonData: Pokemon[] = data.pokemon.map(
    (individualPokemonData) => {
      return {
        id: individualPokemonData.pokemon.url.split("/")[6],
        name: individualPokemonData.pokemon.name,
        sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
          individualPokemonData.pokemon.url.split("/")[6]
        }.png`,
      };
    }
  );
  pokemonTypeData.set(parsedPokemonData);
  loading.set(false);
};
