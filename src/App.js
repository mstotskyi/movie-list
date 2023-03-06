import "./App.css";
import { useState } from "react";
import { MovieGallery } from "./components/MovieGallery/MovieGallery";
import { Searchbar } from "./components/Searchbar/SearchBar";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const getSearchQuery = (searchQuery) => setSearchQuery(searchQuery);

  return (
    <div className="App">
      <Searchbar getSearchQuery={getSearchQuery} />
      <MovieGallery searchQuery={searchQuery} />
    </div>
  );
}

export default App;
