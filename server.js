'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');

const weatherData = require('./data/weather.json');

const app = express();
app.use(cors());
const PORT = 3001;
// app.get('/test', handleGetTest);
app.get('/weather', handleGetWeather);

class Forecast {
  constructor(dataObj) {
    this.description = `Low of ${dataObj.low_temp}, high of ${dataObj.high_temp} with ${dataObj.weather.description.toLowerCase()}`;
    this.date = dataObj.valid_date;
  }
}

function handleGetWeather(req, res) {

  let lat = req.query.lat;
  let lon = req.query.lon;
  let searchQuery = req.query.searchQuery;

  let cityWeatherData = weatherData.find((elem) => {
    return elem.city_name === searchQuery;
  });

  const forecastArr = cityWeatherData.data.map((dataObj) => {
    Forecast.constructor(dataObj);
  });

  // console.log(cityWeatherData.data[0]);

  res.send(
    cityWeatherData ?
      (`the timezone for ${cityWeatherData.city_name} is ${cityWeatherData.timezone}`, forecastArr) :
      `ERROR: Please try searching for "Seattle", "Paris", or "Amman" instead.`);
  // console.log(`lat: ${lat}, lon: ${lon}, searchQuery: ${searchQuery}`);
}


app.listen(PORT, () => console.log('server is listening at port', PORT));
