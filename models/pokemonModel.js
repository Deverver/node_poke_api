const axios = require('axios');

// Modellen henter data fra det eksterne PokeAPI
exports.fetchPokemon = async (pokemonName) => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    const data = response.data;

    // Udtræk kun relevante felter
    return {
        name: data.name,
        id: data.id,
        types: data.types.map(t => t.type.name),
        abilities: data.abilities.map(a => a.ability.name)
    };
};
