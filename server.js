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
app.get('/*', (req, res) => res.send('Path not found'));

class Forecast {
  constructor(dailyWeather) {
    this.description = `Low of ${dailyWeather.low_temp}, high of ${dailyWeather.high_temp} with ${dailyWeather.weather.description.toLowerCase()}`;
    this.date = dailyWeather.valid_date;
  }
}

function handleGetWeather(req, res) {
  let forecastArray = [];
  // let lat = req.query.lat;
  // let lon = req.query.lon;
  let searchQuery = req.query.searchQuery;
  let cityWeatherData = weatherData.find((elem) => {
    return elem.city_name.toLowerCase() === searchQuery.toLowerCase(); // this WORKS
  });

  if (cityWeatherData) {
    forecastArray = cityWeatherData.data.map((dailyWeather) => new Forecast(dailyWeather)); // .data might bottleneck what gets passed on too much. Might need to pass remainder of object to constructor if we need more data later.
    console.log(forecastArray);
    res.status(200).send(forecastArray);
  } else {
    console.log('We are OUTSIDE the IF cityweatherdata, in ELSE');
    res.status(400).send(`400 ERROR: Please try searching for "Seattle", "Paris", or "Amman" instead.`);
  }

  // res.send(
  //   cityWeatherData ?
  //     (`the timezone for ${cityWeatherData.city_name} is ${cityWeatherData.timezone}`, forecastArray) :
  //     );
  // console.log(`lat: ${lat}, lon: ${lon}, searchQuery: ${searchQuery}`);
}

app.listen(PORT, () => console.log('server is listening at port', PORT));
