import { PokemonList, PokemonListResult } from "./models/pokemon.models";

export async function fetchPokemonList(limit: number = 20, offset: number = 0): Promise<PokemonList> {
    const pokemonListEndPoint = 'https://pokeapi.co/api/v2/pokemon';
    return await fetch(`${pokemonListEndPoint}?limit=${limit}&offset=${offset}`)
        .then(response => response.json())
}

export function generatePokemonList(pokemonList: PokemonListResult[]) {
    const pokemonListElement = document.createElement('ul');
    pokemonListElement.classList.add('app');
    pokemonList.forEach(pokemon => {
        pokemonListElement.appendChild(generatePokemonListItem(pokemon));
    });
    return pokemonListElement;
}

export function generatePokemonListItem(pokemon: PokemonListResult): HTMLLIElement {
    const pokemonName = pokemon.name;
    const pokemonUrl = pokemon.url;

    const pokemonListItemElement = document.createElement('li');
    pokemonListItemElement.innerHTML = `
    <span class="pokemon-name">${pokemonName}</span>
    <img class="pokemon-image" src="${pokemonUrl}" alt="${pokemonName}">
    `;
    return pokemonListItemElement;
}

// export function