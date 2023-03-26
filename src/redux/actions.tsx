import { createAction } from "@reduxjs/toolkit";
import { Options } from "../services/types";

export const searchMovieAction = createAction<Options[]>("movie/searchMovie");

export const resetMovieAction = createAction<[]>("store/resetStore");

export const loadMoreAction = createAction<Options[]>("movie/loadMore");

export const getTotalMovieAction = createAction<number>("movie/totalResult");

export const currentPage = createAction<number>("page/currentPage");
