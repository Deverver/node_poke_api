const express = require('express');
const rateLimit = require('express-rate-limit')
const path = require('path');

const morgan = require('morgan');

const pokemonRoutes = require('./routes/pokemonRoutes');
const pokemonCrudRoutes = require('./routes/pokemonCrudRoutes');


const app = express();
const port = 3000;

// Set up rate limiter: maximum of 100 requests per 15 minutes per IP
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    message: "Too many requests from this IP, please try again after 15 minutes",
});


// Middleware til at logge alle HTTP-forespørgsler
app.use(morgan('dev'));
// Middleware
app.use(limiter);
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Registrér vores routes under /pokemon
app.use('/pokemon', pokemonRoutes);
app.use('/pokemon-crud', pokemonCrudRoutes);


// Start serveren
app.listen(port, () => {
    console.log(`Server kører på http://localhost:${port}`);
});
