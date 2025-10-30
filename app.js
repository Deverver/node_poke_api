const express = require('express');
const morgan = require('morgan');
const pokemonRoutes = require('./routes/pokemonRoutes');

const app = express();
const port = 3000;

// Middleware til at logge alle HTTP-forespørgsler
app.use(morgan('dev'));

// Registrér vores routes under /pokemon
app.use('/pokemon', pokemonRoutes);

// Start serveren
app.listen(port, () => {
    console.log(`Server kører på http://localhost:${port}`);
});
