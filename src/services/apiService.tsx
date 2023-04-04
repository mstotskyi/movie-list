export default class MoviesApiService {
  searchQuery: {
    title: string;
    year: string;
    type: string;
  };
  page: number;
  total: number;
  response: boolean;

  constructor() {
    this.searchQuery = {
      title: "",
      year: "",
      type: "",
    };
    this.page = 1;
    this.total = 0;
    this.response = false;
  }

  fetchMovies() {
    const API_KEY = "a5f3b75f";
    const BASE_URL = "https://www.omdbapi.com/";
    const URL = `${BASE_URL}?s=${this.searchQuery.title}&y=${this.searchQuery.year}&type=${this.searchQuery.type}&apikey=${API_KEY}&page=${this.page}`;
    return fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        this.getTotal(data.totalResults);

        return data;
      });
  }

  changePage(page: number) {
    this.page = page;
  }

  resetPage() {
    this.page = 1;
  }

  getTotal(totalResults: number) {
    this.total = totalResults;
  }

  get query() {
    return this.searchQuery;
  }

  get queryResponse() {
    return this.response;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }

  set queryResponse(newQueryResponse) {
    this.response = newQueryResponse;
  }
}
