export interface Pokemon {
  id: number;
  name: string;
  sprite: string;
}

export interface PokemonInfo {
  data: Pokemon;
  type: string[];
}

export interface Result {
  name: string;
  url: string;
}

export interface ApiResult {
  count: number;
  next: string;
  previous?: any;
  results: Result[];
}

export interface PokeType {
  name: string;
  id: number;
}
