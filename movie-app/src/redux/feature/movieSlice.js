import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    moviesList: [],
    movie: {},
  },
});

export default movieSlice.reducer;
