'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const PORT = 3001;

// const weatherData = require('./data/weather.json');

app.get('/test', (req, res) => res.status(200).send('Server test successful.'));
app.get('/weather', handleGetWeather);
app.get('/*', (req, res) => res.status(500).send('500 ERROR: Path not found'));

class Forecast {
  constructor(dailyWeather) {
    this.description = `Low of ${dailyWeather.low_temp}, high of ${dailyWeather.high_temp} with ${dailyWeather.weather.description.toLowerCase()}`;
    this.date = dailyWeather.valid_date;
  }
}

async function handleGetWeather(req, res) {
  let forecastArray = [];
  let lat = req.query.lat;
  let lon = req.query.lon;
  let location = req.query.location;

  let url =


  let cityWeatherData = weatherData.find((elem) => {
    return elem.city_name.toLowerCase() === location.toLowerCase(); // this WORKS
  });

  if (cityWeatherData) {
    forecastArray = cityWeatherData.data.map((dailyWeather) => new Forecast(dailyWeather)); // .data might bottleneck what gets passed on too much. Might need to pass remainder of object to constructor if we need more data later.
    console.log(forecastArray);
    res.status(200).send(forecastArray);
  } else {
    res.status(500).send(`500 ERROR: Please try searching for "Seattle", "Paris", or "Amman" instead.`);
  }
}

app.listen(PORT, () => console.log('server is listening at port', PORT));
