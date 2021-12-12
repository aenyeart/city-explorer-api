'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
app.use(cors());
const PORT = process.env.PORT;
const handleGetWeather = require('./route-handlers/weather.js');

app.get('/test', (req, res) => res.status(200).send('Server test successful.'));
app.get('/weather', handleGetWeather);
app.get('/movies', handleGetMovies);
app.get('/*', (req, res) => res.status(500).send('500 ERROR: Path not found'));

class Movie {
  constructor(movie) {
    this.title = movie.title;
    this.overview = movie.overview;
    this.vote_average = movie.vote_average;
    this.vote_count = movie.vote_count;
    this.image_url = movie.poster_path;
    this.popularity = movie.popularity;
    this.release_date = movie.release_date;
  }
}

async function handleGetMovies(req, res) {
  let city = req.query.location;
  let url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIE_API_KEY}&query=${city}&include_adult=false`;
  console.log(url);
  try {
    let movieData = await axios.get(url);

    let moviesArray = movieData.data.results.map(movie => new Movie(movie));
    console.log(moviesArray);
    res.status(200).send(moviesArray);
  } catch (e) {
    res.status(500).send(e);
    // res.send(movieData.data.results);
  }
}

app.listen(PORT, () => console.log('server is listening at port', PORT));
