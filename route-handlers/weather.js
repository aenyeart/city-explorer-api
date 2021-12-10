'use strict';
const axios = require('axios');

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
  console.log(url);
  try {
    let weatherData = await axios.get(url);
    console.log(weatherData.data.data);
    let forecastArray = weatherData.data.data.map((dailyWeather) => new Forecast(dailyWeather));
    console.log(forecastArray);
    res.status(200).send(forecastArray);
  } catch (e) {
    res.status(500).send(`There was an error in fetching weather data`);
  }
}

module.exports = handleGetWeather;
