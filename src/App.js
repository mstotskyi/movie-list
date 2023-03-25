import "./App.css";
import { useState } from "react";
import { MovieGallery } from "./components/MovieGallery/MovieGallery";
import { Searchbar } from "./components/Searchbar/SearchBar";
import { useDispatch } from "react-redux";
import MoviesApiService from "./services/apiService";
import { searchMovieAction } from "./redux/actions";

const newMoviesApiService = new MoviesApiService();

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [status, setStatus] = useState("init");
  const [showSpiner, setShowSpiner] = useState(false);
  const [totalResults, setTotalResults] = useState(0);

  const dispatch = useDispatch();

  const handleSubmitForm = (data) => {
    setStatus("pending");
    newMoviesApiService.searchQuery = data;
    newMoviesApiService.resetPage();
    newMoviesApiService
      .fetchMovies()
      .then((result) => {
        dispatch(searchMovieAction(result.Search));

        setSearchResults(result.Search);
        setTotalResults(result.totalResults);
        setStatus("success");
      })
      .catch((error) => {
        setStatus("error");
      });
  };

  const handleOnClick = (e) => {
    setShowSpiner(true);

    newMoviesApiService.incrementPage();
    newMoviesApiService
      .fetchMovies()
      .then((result) => {
        setSearchResults((prevState) => [...prevState, ...result.Search]);
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
      <MovieGallery
        searchResults={searchResults}
        handleOnClick={handleOnClick}
        status={status}
        totalResults={totalResults}
        showSpiner={showSpiner}
      />
    </div>
  );
}

export default App;
