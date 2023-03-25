import { createAction } from "@reduxjs/toolkit";
import { Options } from "../services/types";

export const searchMovieAction = createAction<Options[]>("movie/searchMovie");
