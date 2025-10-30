const express = require('express');
const pokemonController = require('../controllers/pokemonController');
const router = express.Router();

// Rute til at hente data om en specifik Pokémon
// Eksempel: GET /pokemon/pikachu
router.get('/:name', pokemonController.getPokemonData);

module.exports = router;
