import axios from "axios";

const getPokemon = async () => {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=151");
    return response.data;
  };

const getPokemonDetails = async (id: number) => {
    const response = await axios.get(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`);
    return response.config.url;
}

export {getPokemon, getPokemonDetails};
  