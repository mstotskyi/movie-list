import "./App.css";
import { useState } from "react";
import { MovieGallery } from "./components/MovieGallery/MovieGallery";
import { Searchbar } from "./components/Searchbar/SearchBar";

function App() {
  const [searchQueryName, setSearchQueryName] = useState("");
  const [searchQueryYear, setSearchQueryYear] = useState("");
  const [searchQueryType, setSearchQueryType] = useState("");

  const getSearchQueryName = (searchQueryName) =>
    setSearchQueryName(searchQueryName);
  const getSearchQueryYear = (searchQueryYear) =>
    setSearchQueryYear(searchQueryYear);
  const getSearchQueryType = (searchQueryType) =>
    setSearchQueryType(searchQueryType);

  return (
    <div className="App">
      <Searchbar
        getSearchQueryName={getSearchQueryName}
        getSearchQueryYear={getSearchQueryYear}
        getSearchQueryType={getSearchQueryType}
      />
      <MovieGallery
        searchQueryName={searchQueryName}
        searchQueryYear={searchQueryYear}
        searchQueryType={searchQueryType}
      />
    </div>
  );
}

export default App;
