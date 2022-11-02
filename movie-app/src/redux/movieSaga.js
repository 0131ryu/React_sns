import { takeLatest, put, fork, call } from "redux-saga/effects";
import { fetchMovies, fetchMovie } from "./api";
import { getMovies, setMovies, getMovie, setMovie } from "./feature/movieSlice";

function* onLoadMoivesAsync({ payload }) {
  try {
    const movieId = payload;
    console.log("movieId", movieId);
    const response = yield call(fetchMovies, movieId);

    if (response.status === 200) {
      yield put(setMovies({ ...response.data }));
    }
  } catch (error) {
    console.log(error);
  }
}

function* onLoadMoiveAsync({ payload }) {
  try {
    const movieName = payload;
    console.log("movieName", movieName);
    const response = yield call(fetchMovie, movieName);

    if (response.status === 200) {
      yield put(setMovie({ ...response.data }));
    }
  } catch (error) {
    console.log(error);
  }
}

function* onLoadMovies() {
  yield takeLatest(getMovies.type, onLoadMoivesAsync);
}

function* onLoadMovie() {
  yield takeLatest(getMovie.type, onLoadMoiveAsync);
}

export const moviesSagas = [fork(onLoadMovies), fork(onLoadMovie)];
