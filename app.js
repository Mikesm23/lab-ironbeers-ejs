const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const path = require('path');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');

const app = express();
const punkAPI = new PunkAPIWrapper();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts);

app.use(express.static(path.join(__dirname, 'public')));

// Add the route handlers here:

app.get('/', (req, res) => {res.render('index');});
app.get('/beers', (req, res) => {res.render('beers');});
app.get('/random-beer', (req, res) => {res.render('random-beer');});

app.listen(3000, () => console.log('🏃‍ on port 3000'));
