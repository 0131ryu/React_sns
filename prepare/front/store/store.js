import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import user from "./userSlice";
import post from "./postSlice";

const rootReducer = combineReducers({
  user,
  post,
});

export const makeStore = () =>
  configureStore({
    reducer: rootReducer,
  });

export const wrapper = createWrapper(rootReducer, { debug: true });
