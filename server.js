'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
app.use(cors());
const PORT = 3001;

app.get('/test', (req, res) => res.status(200).send('Server test successful.'));
app.get('/weather', handleGetWeather);
app.get('/movies', handleGetMovies);
app.get('/*', (req, res) => res.status(500).send('500 ERROR: Path not found'));

class Forecast {
  constructor(dailyWeather) {
    this.description = `Low of ${dailyWeather.low_temp}, high of ${dailyWeather.high_temp} with ${dailyWeather.weather.description.toLowerCase()}`;
    this.date = dailyWeather.valid_date;
  }
}
// class Movie {
//   constructor(movie) {
//     this.title = movie.data;
//     this.average_votes = movie.data;
//     this.total_votes = movie.data;
//     this.image_url = movie.data;
//     this.popularity = movie.data;
//     this.released_on = movie.data;
//   }
// }

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
async function handleGetMovies(req, res) {
  let city = req.query.location;
  let url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIE_API_KEY}&query=${city}&include_adult=false`;

  try {
    let movieData = await axios.get(url);
    console.log(movieData.data);
    let moviesArray = movieData.data.map(); // TODO
  } catch (e) {
    // TODO
  }
}
app.listen(PORT, () => console.log('server is listening at port', PORT));
