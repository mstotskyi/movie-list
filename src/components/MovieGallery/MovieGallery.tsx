import { useState, useEffect } from "react";
import styles from "../MovieGallery/MovieGallery.module.css";
import PicsApiService from "../../services/apiService";
import { MovieGalleryItem } from "../MovieGalleryItem/MovieGalleryItem";
import Spiner from "../Loader/Loader";
import Button from "@mui/material/Button";
import { Options } from "../../services/types";
const newPicsApiService = new PicsApiService();

interface Props {
  searchQuery: string;
}

export function MovieGallery({ searchQuery }: Props) {
  const [searchResults, setSearchResults] = useState<Options[]>([]);
  const [status, setStatus] = useState<string>("init");
  const [showSpiner, setShowSpiner] = useState<boolean>(false);

  useEffect(() => {
    if (searchQuery === "") {
      return;
    }
    setStatus("pending");
    newPicsApiService.query = searchQuery;
    newPicsApiService.resetPage();
    newPicsApiService
      .fetchPictures()
      .then((result) => {
        console.log(result);
        setSearchResults(result);
        setStatus("success");
      })
      .catch((error) => {
        setStatus("error");
      });
  }, [searchQuery]);
  const handleOnClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    newPicsApiService.incrementPage();
    newPicsApiService
      .fetchPictures()
      .then((result: []) => {
        setSearchResults((prevState) => [...prevState, ...result]);
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
        <ul className={styles.MovieGallery}>
          <MovieGalleryItem movies={searchResults} />
        </ul>
        {showSpiner && <Spiner />}
        <div className={styles.MovieGallery__Button__wrapper}>
          <Button
            className={styles.MovieGallery__Button}
            variant="contained"
            onClick={handleOnClick}
          >
            ShowMore
          </Button>
        </div>
      </>
    );
  }
  if (status === "error") {
    alert("ERROR!!");
  }
}
