import { Options, TypesQuery } from "../services/types";

export const getMovies = (state: { movie: Options[] }) => state.movie;
export const getTotalResult = (state: { totalResult: number }) =>
  state.totalResult;
export const getCurrentPage = (state: { currentPage: number }) =>
  state.currentPage;
export const getSearchQuery = (state: { searchQuery: TypesQuery }) =>
  state.searchQuery;
