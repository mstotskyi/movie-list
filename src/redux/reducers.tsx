import { createReducer } from "@reduxjs/toolkit";
import { searchMovieAction } from "./actions";
import { Options } from "../services/types";

const initialState: Options[] = [];

const moviesReducer = createReducer(initialState, (builder) => {
  builder.addCase(searchMovieAction, (state, action) => {
    return [...state, ...action.payload];
  });
});

export const reducer = {
  movies: moviesReducer,
};
