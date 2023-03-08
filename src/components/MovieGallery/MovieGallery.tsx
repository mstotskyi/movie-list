import { useState, useEffect } from "react";
import styles from "../MovieGallery/MovieGallery.module.css";
import PicsApiService from "../../services/apiService";
import { MovieGalleryItem } from "../MovieGalleryItem/MovieGalleryItem";
import Spiner from "../Loader/Loader";
// import Button from "@mui/material/Button";
import { Options } from "../../services/types";
const newPicsApiService = new PicsApiService();

interface Props {
  searchQueryName: string;
  searchQueryYear: string;
  searchQueryType: string;
}

export function MovieGallery({
  searchQueryName,
  searchQueryYear,
  searchQueryType,
}: Props) {
  const [searchResults, setSearchResults] = useState<Options[]>([]);
  const [status, setStatus] = useState<string>("init");
  const [showSpiner, setShowSpiner] = useState<boolean>(false);

  useEffect(() => {
    if (searchQueryName === "") {
      return;
    }
    setStatus("pending");
    newPicsApiService.queryName = searchQueryName;
    newPicsApiService.queryYear = searchQueryYear;
    newPicsApiService.queryType = searchQueryType;
    newPicsApiService.resetPage();
    newPicsApiService
      .fetchMovies()
      .then((result) => {
        setSearchResults(result.Search);
        setStatus("success");
      })
      .catch((error) => {
        setStatus("error");
      });
  }, [searchQueryName, searchQueryYear, searchQueryType]);

  const handleOnClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    newPicsApiService.incrementPage();
    newPicsApiService
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

  if (status === "init") {
    return <h1>Hallo! Search something!</h1>;
  }
  if (status === "pending") {
    return <Spiner />;
  }
  if (status === "success") {
    return (
      <>
        {searchResults ? (
          <>
            <ul className={styles.MovieGallery}>
              <MovieGalleryItem movies={searchResults} />
            </ul>
            {showSpiner && <Spiner />}

            <button
              className={styles.MovieGallery__Button}
              type="button"
              onClick={handleOnClick}
            >
              LoadMore
            </button>
          </>
        ) : (
          <p>Sorry, nothing was found for your query!</p>
        )}

        {/* <Button
              className={styles.MovieGallery__Button}
              variant="contained"
              onClick={handleOnClick}
            >
              ShowMore
            </Button> */}
      </>
    );
  }
  if (status === "error") {
    alert("ERROR!!");
  }
}
