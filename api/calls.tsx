import axios from "axios";

const getPokemon = async () => {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=151");
    return response.data;
  };

const getPokemonDetails = async () => {
    const pokemonDetails = {};
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=151");
    return response.data;
}

export {getPokemon, getPokemonDetails};
  