import styles from "../MovieGallery/MovieGallery.module.css";
import { MovieGalleryItem } from "../MovieGalleryItem/MovieGalleryItem";
import Spinner from "../Loader/Loader";
import { useSelector } from "react-redux";

import { getMovies } from "../../redux/selectors";

interface Props {
  showSpinner: boolean;
  status: string;
}

export function MovieGallery({ showSpinner, status }: Props) {
  const movies = useSelector(getMovies);

  if (status === "init") {
    return <h1>Hello! Search something!</h1>;
  }
  if (status === "pending") {
    return <Spinner />;
  }
  if (status === "success") {
    return movies ? (
      <>
        <ul className={styles.MovieGallery}>
          <MovieGalleryItem movies={movies} />
        </ul>
        {showSpinner && <Spinner />}
      </>
    ) : (
      <h1>Sorry, nothing was found for your query!</h1>
    );
  }
  if (status === "error") {
    alert("ERROR!!");
  }
}
