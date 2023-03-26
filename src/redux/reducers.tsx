import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import {
  searchMovieAction,
  resetMovieAction,
  loadMoreAction,
  getTotalMovieAction,
  currentPage,
} from "./actions";
import { Options } from "../services/types";

export type RootState = ReturnType<typeof rootReducer>;

interface Props {
  movie: Options[];
  totalResult: number;
  currentPage: number;
  pageSize: number;
}

const initialState = {
  movie: [],
  totalResult: 0,
  currentPage: 1,
  pageSize: 10,
} as Props;

const persistConfig = {
  key: "movies",
  version: 1,
  storage,
};

const moviesReducer = createReducer(initialState.movie, (builder) => {
  builder
    .addCase(searchMovieAction, (state, { payload }) => {
      return [...state, ...payload];
    })
    .addCase(resetMovieAction, (state = initialState.movie, { payload }) => {
      return [...payload];
    })
    .addCase(loadMoreAction, (state, { payload }) => {
      return [...payload];
    });
});

const totalResultReducer = createReducer(
  initialState.totalResult,
  (builder) => {
    builder.addCase(getTotalMovieAction, (state, { payload }) => {
      return payload;
    });
  }
);

const currentPageReducer = createReducer(
  initialState.currentPage,
  (builder) => {
    builder.addCase(currentPage, (state, { payload }) => {
      return payload;
    });
  }
);

const rootReducer = combineReducers({
  movie: moviesReducer,
  totalResult: totalResultReducer,
  currentPage: currentPageReducer,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);
