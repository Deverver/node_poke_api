let pokemonList = [];
let currentId = 1;

exports.create = (data) => {
    const pokemon = { id: currentId++, ...data };
    pokemonList.push(pokemon);
    return pokemon;
};

exports.findAll = () => pokemonList;

exports.findById = (id) => pokemonList.find(p => p.id == id);

exports.update = (id, data) => {
    const index = pokemonList.findIndex(p => p.id == id);
    if (index === -1) return null;
    pokemonList[index] = { id: Number(id), ...data };
    return pokemonList[index];
};

exports.delete = (id) => {
    const index = pokemonList.findIndex(p => p.id == id);
    if (index === -1) return false;
    pokemonList.splice(index, 1);
    return true;
};