import styles from "../MovieGallery/MovieGallery.module.css";
import { MovieGalleryItem } from "../MovieGalleryItem/MovieGalleryItem";
import Spiner from "../Loader/Loader";
import { useSelector } from "react-redux";

import { getMovies } from "../../redux/selectors";

interface Props {
  showSpiner: boolean;
  status: string;
}

export function MovieGallery({ showSpiner, status }: Props) {
  const movies = useSelector(getMovies);
  // const totalResult = useSelector(getTotalResult);

  if (status === "init") {
    return <h1>Hello! Search something!</h1>;
  }
  if (status === "pending") {
    return <Spiner />;
  }
  if (status === "success") {
    return movies ? (
      <>
        <ul className={styles.MovieGallery}>
          <MovieGalleryItem movies={movies} />
        </ul>
        {showSpiner && <Spiner />}
      </>
    ) : (
      <h1>Sorry, nothing was found for your query!</h1>
    );
  }
  if (status === "error") {
    alert("ERROR!!");
  }
}
