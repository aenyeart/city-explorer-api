'use strict';
const axios = require('axios');
let cache = require('./cache.js');


class Forecast {
  constructor(dailyWeather) {
    this.description = `Low of ${dailyWeather.low_temp}, high of ${dailyWeather.high_temp} with ${dailyWeather.weather.description.toLowerCase()}`;
    this.date = dailyWeather.valid_date;
  }
}

async function handleGetWeather(req, res) {
  let lat = req.query.lat;
  let lon = req.query.lon;
  let url = `http://api.weatherbit.io/v2.0/forecast/daily?key=${process.env.WEATHERBIT_API_KEY}&units=I&lat=${lat}&lon=${lon}`; // gets ~10 days of weather
  const key = `weather-${lat}${lon}`;

  try {

    if (cache[key]) console.log('Cache hit');
    else {
      console.log('Cache miss');
      cache[key] = {};
      cache[key].timestamp = Date.now();
      // cache[key].data =


      let weatherData = await axios.get(url);

      let forecastArray = weatherData.data.data.map((dailyWeather) => new Forecast(dailyWeather));
      console.log(forecastArray);
      res.status(200).send(forecastArray);
    }
  } catch (e) {
    res.status(500).send(`There was an error in fetching weather data`);
  }
}

module.exports = handleGetWeather;
