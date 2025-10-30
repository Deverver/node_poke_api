const pokemonModel = require('../models/pokemonModel');

// Controlleren modtager en anmodning fra klienten
// Henter data fra model og sender JSON tilbage
exports.getPokemonData = async (req, res) => {
    const pokemonName = req.params.name.toLowerCase();
    try {
        const data = await pokemonModel.fetchPokemon(pokemonName);
        res.json(data); // Succes: returnér data
    } catch (err) {
        res.status(404).json({ message: 'Pokemon ikke fundet' });
    }
};
