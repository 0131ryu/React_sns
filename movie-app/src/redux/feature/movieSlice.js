import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    moviesList: [],
    movie: {},
  },
  // action
  reducers: {
    getMovies(name) {
      return name;
    },
    setMovies: (state, action) => {
      state.moviesList = action.payload;
      console.log(state.moviesList);
    },
    getMovie(id) {
      return id;
    },
    setMovie: (state, action) => {
      state.movie = action.payload;
    },
  },
});

export const { getMovies, setMovies, getMovie, setMovie } = movieSlice.actions;

export default movieSlice.reducer;
