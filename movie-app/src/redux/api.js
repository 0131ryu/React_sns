import axios from "axios";

export const fetchMovies = async (movieName) =>
  axios.get(
    `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${movieName}`
  );

//https://omdbapi.com/?apikey=b7c7ca6f&s=frozen

export const fetchMovie = async (movieId) =>
  axios.get(
    `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&i=${movieId}`
  );
