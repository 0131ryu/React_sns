import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import user from "./userSlice";
import post from "./postSlice";

const rootReducer = combineReducers({
  user,
  post,
});

const masterReducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      user: user.reducer,
      post: post.reducer,
    };
    return nextState;
  } else {
    return rootReducer(state, action);
  }
};

export const makeStore = () =>
  configureStore({
    reducer: masterReducer,
  });

export const wrapper = createWrapper(makeStore, { debug: true });
