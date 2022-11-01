import axios from "axios";

// const API_ENDPOINT = `http://www.omdbapi.com/?apikey=${process.env.MOVIE_API_KEY}`;

export const fetchMovies = async (movieName) => {
  return axios.get(
    `http://www.omdbapi.com/?s=${movieName}&apikey=${process.env.MOVIE_API_KEY}`
  );
};
