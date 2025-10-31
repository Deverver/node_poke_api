exports.validatePokemon = (req, res, next) => {
    let {name, types, abilities} = req.body;

    types = types.join(', ');

    console.log(`Sanity check: name:${name}, types: ${types}, abilities: ${abilities}`);
    console.log(`Type: name:${typeof name}, types: ${typeof types}, abilities: ${typeof abilities}`);



    if (!name || !types || !abilities) {
        return res.status(400).json({error: 'Alle felter skal udfyldes: name, type, abilities'});
    }

    if (typeof name !== 'string' || typeof types !== 'string') {
        return res.status(400).json({error: 'Felterne name og type skal være tekst (string)'});
    }

    if (!Array.isArray(abilities)) {
        return res.status(400).json({error: 'Feltet abilities skal være en liste (array)'});
    }

    next();
}
