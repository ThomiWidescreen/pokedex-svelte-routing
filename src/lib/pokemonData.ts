import { writable } from "svelte/store";
import type { PokemonInfo } from "../@types/types";
import axios from "axios";

export const pokemon = writable<PokemonInfo>();

export const loading = writable<boolean>(false);

export const loadInfo = async (id: number) => {
  loading.set(true);
  const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const pokemonInfo: PokemonInfo = {
    data: {
      id: data.id,
      name: data.species.name,
      sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`,
    },
    type: data.types.map((type) => type.type.name as string),
  };
  pokemon.set(pokemonInfo);
  loading.set(false);
};
