import { generatePokemonList, fetchPokemonList } from './pokemon.service';
import './style.css';
import { PokemonList } from './models/pokemon.models';

let limit = 20;
let current_page = 1;

const pokemonListElement: HTMLDivElement = document.querySelector('#app')!;

renderPokemonList().then();

async function renderPokemonList() {
  let pokemonList = await loadPokemonList();
  
  pokemonListElement.replaceChildren(generatePokemonList(pokemonList.results));
}

async function loadPokemonList(): Promise<PokemonList> {
  return await fetchPokemonList(limit, limit * current_page - limit);
}
