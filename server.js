'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
app.use(cors());


const handleGetWeather = require('./route-handlers/weather.js');
const handleGetMovies = require('./route-handlers/movies.js');

app.get('/test', (req, res) => res.status(200).send('Server test successful.'));
app.get('/weather', handleGetWeather);
app.get('/movies', handleGetMovies);
app.get('/*', (req, res) => res.status(500).send('500 ERROR: Path not found'));

app.listen(process.env.PORT, () => console.log('server is listening at port', process.env.PORT));
