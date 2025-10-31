const store = require('../models/pokemonStore');

exports.createPokemon = (req, res) => {
    const created = store.create(req.body);
    res.status(201).json({message: 'Pokémon created', pokemon: created});
}

exports.getAllPokemon = (req, res) => {
    const all = store.findAll();
    res.json(all);
}

exports.getPokemonById = async (req, res) => {
    const pokemon = store.findById(req.params.id);
    if (!pokemon) {
        return res.status(404).json({error: 'Pokémon ikke fundet'});
    }
    res.json(pokemon);
}

exports.updatePokemon = async (req, res) => {
    const updated = store.update(req.params.id, req.body);
    if (!updated) {
        return res.status(404).send('Pokémon not found');
    }
    res.json({message: 'Pokemon updated', pokemon: updated});
}

exports.deletePokemon = async (req, res) => {
    const ok = store.delete(req.params.id);
    if (!ok) {
        return res.status(404).json({ error: 'Pokémon not found' });
    }
    res.json({ message: 'Pokémon deleted successfully'});
}


