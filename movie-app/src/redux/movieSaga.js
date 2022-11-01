import { takeLatest, put, fork, call } from "redux-saga/effects";
import { fetchMovies } from "./api";
import { getMovies, setMovies } from "./feature/movieSlice";

function* onLoadMoiveAsync({ payload }) {
  try {
    const movieName = payload;
    console.log("movieName", movieName);
    const response = yield call(fetchMovies, movieName);

    if (response.status === 200) {
      yield put(setMovies({ ...response.data }));
    }
  } catch (error) {
    console.log(error);
  }
}

function* onLoadMovies() {
  yield takeLatest(getMovies.type, onLoadMoiveAsync);
}

export const moviesSagas = [fork(onLoadMovies)];
