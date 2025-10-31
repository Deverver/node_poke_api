const express = require('express');
const router = express.Router();

const pokemonCrudController = require('../controllers/pokemonCrudController');
const { validatePokemon } = require('../middlewares/validatePokemon');


router.post('/', validatePokemon, pokemonCrudController.createPokemon);

router.get('/', pokemonCrudController.getAllPokemon);

router.get('/:id', pokemonCrudController.getPokemonById);

router.put('/:id', validatePokemon, pokemonCrudController.updatePokemon);

router.delete('/:id', pokemonCrudController.deletePokemon);


module.exports = router;