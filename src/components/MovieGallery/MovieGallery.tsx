import styles from "../MovieGallery/MovieGallery.module.css";
import { MovieGalleryItem } from "../MovieGalleryItem/MovieGalleryItem";
import Spiner from "../Loader/Loader";

interface Props {
  handleOnClick: (data: {}) => void;
  searchResults: [];
  totalResults: number;
  showSpiner: boolean;
  status: string;
}

export function MovieGallery({
  handleOnClick,
  searchResults,
  totalResults,
  showSpiner,
  status,
}: Props) {
  if (status === "init") {
    return <h1>Hello! Search something!</h1>;
  }
  if (status === "pending") {
    return <Spiner />;
  }
  if (status === "success") {
    return searchResults ? (
      <>
        <ul className={styles.MovieGallery}>
          <MovieGalleryItem movies={searchResults} />
        </ul>
        {showSpiner && <Spiner />}
        {totalResults - searchResults.length > 0 ? (
          <button
            className={styles.MovieGallery__Button}
            type="button"
            onClick={handleOnClick}
          >
            LoadMore
          </button>
        ) : (
          <h1>All results for this query are shown</h1>
        )}
      </>
    ) : (
      <h1>Sorry, nothing was found for your query!</h1>
    );
  }
  if (status === "error") {
    alert("ERROR!!");
  }
}
