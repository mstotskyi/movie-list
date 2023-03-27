import "./App.css";
import { useState, useEffect } from "react";
import { Searchbar } from "./components/Searchbar/SearchBar";
import { MovieGallery } from "./components/MovieGallery/MovieGallery";
import { PaginationPages } from "./components/Pagination/Pagination";

import { useDispatch, useSelector } from "react-redux";
import MoviesApiService from "./services/apiService";
import {
  searchMovieAction,
  resetMovieAction,
  loadMoreAction,
  getTotalMovieAction,
} from "./redux/actions";
import { getMovies, getCurrentPage, getSearchQuery } from "./redux/selectors";

const newMoviesApiService = new MoviesApiService();

function App() {
  const [status, setStatus] = useState("");
  const [showSpiner, setShowSpiner] = useState(false);

  const movie = useSelector(getMovies);
  const searchQuery = useSelector(getSearchQuery);

  useEffect(() => {
    movie.length === 0 ? setStatus("init") : setStatus("success");
  }, [movie.length]);

  const dispatch = useDispatch();

  const handleSubmitForm = (data) => {
    setStatus("pending");
    dispatch(resetMovieAction([]));

    newMoviesApiService.searchQuery = data;
    newMoviesApiService.resetPage();
    newMoviesApiService
      .fetchMovies()
      .then((result) => {
        dispatch(searchMovieAction(result.Search));
        dispatch(getTotalMovieAction(result.totalResults));
        setStatus("success");
      })
      .catch((error) => {
        setStatus("error");
      });
  };

  const handleOnClick = (page) => {
    setShowSpiner(true);
    newMoviesApiService.searchQuery = searchQuery;

    newMoviesApiService.changePage(page);
    newMoviesApiService
      .fetchMovies()
      .then((result) => {
        dispatch(loadMoreAction(result.Search));
        setShowSpiner(false);
        setStatus("success");
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth",
        });
      })
      .catch((error) => {
        setStatus("error");
      });
  };

  return (
    <div className="App">
      <Searchbar handleSubmitForm={handleSubmitForm} />
      <MovieGallery status={status} showSpiner={showSpiner}></MovieGallery>
      <PaginationPages handleOnClick={handleOnClick} />
    </div>
  );
}

export default App;
