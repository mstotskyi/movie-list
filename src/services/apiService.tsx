// interface Params {
//   searchQuery: string;
//   page: number;
//   total: number;
// }

export default class MoviesApiService {
  searchQuery: string;
  page: number;
  total: number;

  constructor() {
    this.searchQuery = "";
    this.page = 1;
    this.total = 0;
  }

  fetchPictures() {
    const API_KEY = "a5f3b75f";
    const BASE_URL = "http://www.omdbapi.com/";
    const URL = `${BASE_URL}?s=${this.searchQuery}&apikey=${API_KEY}&page=${this.page}`;
    return fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.getTotal(data.totalResults);
        return data.Search;
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

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
