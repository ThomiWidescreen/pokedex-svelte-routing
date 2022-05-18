import { writable } from "svelte/store";
import axios from "axios";
import type { Pokemon, ApiResult } from "../@types/types";

let initUrl = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=50";
let nextURL = "";
let previousURL = "";

export const pokeman = writable<Pokemon[]>();

export let loading = writable(false);

export const fillData = async () => {
  loading.set(true);
  const apiResponse = await axios.get<ApiResult>(initUrl);
  const pokemanData: Pokemon[] = apiResponse.data.results.map(
    (individualResult, index) => {
      const id = parseInt(individualResult.url.split("/").at(-2));
      return {
        id: id,
        name: individualResult.name,
        sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
      };
    }
  );
  nextURL = apiResponse.data.next;
  previousURL = apiResponse.data.previous;
  pokeman.set(pokemanData);
  loading.set(false);
};

export const previousData = async () => {
  if (previousURL === null) {
    return;
  }
  loading.set(true);
  const apiResponse = await axios.get<ApiResult>(previousURL);
  const pokemanData: Pokemon[] = apiResponse.data.results.map(
    (individualResult, index) => {
      const id = parseInt(individualResult.url.split("/").at(-2));
      return {
        id: id,
        name: individualResult.name,
        sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
      };
    }
  );
  nextURL = apiResponse.data.next;
  previousURL = apiResponse.data.previous;
  pokeman.set(pokemanData);
  loading.set(false);
};

export const nextData = async () => {
  if (nextURL === null) {
    return;
  }
  loading.set(true);
  const apiResponse = await axios.get<ApiResult>(nextURL);
  const pokemanData: Pokemon[] = apiResponse.data.results.map(
    (individualResult, index) => {
      const id = parseInt(individualResult.url.split("/").at(-2));
      return {
        id: id,
        name: individualResult.name,
        sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
      };
    }
  );
  nextURL = apiResponse.data.next;
  previousURL = apiResponse.data.previous;
  pokeman.set(pokemanData);
  loading.set(false);
};
