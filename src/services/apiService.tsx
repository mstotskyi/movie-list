export default class MoviesApiService {
  searchQueryName: string;
  searchQueryYear: string;
  searchQueryType: string;
  page: number;
  total: number;

  constructor() {
    this.searchQueryName = " ";
    this.searchQueryYear = "";
    this.searchQueryType = "";
    this.page = 1;
    this.total = 0;
  }

  fetchMovies() {
    const API_KEY = "a5f3b75f";
    const BASE_URL = "http://www.omdbapi.com/";
    const URL = `${BASE_URL}?s=${this.searchQueryName}&y=${this.searchQueryYear}&type=${this.searchQueryType}&apikey=${API_KEY}&page=${this.page}`;
    return fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        if (data.Response === "True") {
          this.getTotal(data.totalResults);
          return data.Search;
        }
        return null;
      });
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  getTotal(totalResults: number) {
    this.total = totalResults;
  }

  get queryName() {
    return this.searchQueryName;
  }
  get queryYear() {
    return this.searchQueryYear;
  }
  get queryType() {
    return this.searchQueryType;
  }

  set queryName(newQueryName) {
    this.searchQueryName = newQueryName;
  }

  set queryYear(newQueryYear) {
    this.searchQueryYear = newQueryYear;
  }

  set queryType(newQueryType) {
    this.searchQueryType = newQueryType;
  }
}
