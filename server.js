'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const weatherData = require('./data/weather.json');
const express = require('express');
const app = express();
app.use(cors());
const PORT = 3001;
// app.get('/test', handleGetTest);
app.get('/weather', handleGetWeather);

function handleGetWeather(req, res) {

  let lat = req.query.lat;
  let lon = req.query.lon;
  let searchQuery = req.query.searchQuery;

  console.log(`lat: ${lat}, lon: ${lon}, searchQuery: ${searchQuery}`);

  res.send('Your test request worked!');
}


app.listen(PORT, () => console.log('server is listening at port', PORT));
