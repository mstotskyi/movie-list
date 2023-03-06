import styles from "../MovieGalleryItem/MovieGalleryItem.module.css";
import { Options } from "../../services/types";

interface IMovies {
  movies: Options[];
}

export function MovieGalleryItem({ movies }: IMovies) {
  return movies.length > 0 ? (
    <>
      {movies.map((movie) => (
        <li key={movie.imdbID} className={styles.MovieGalleryItem}>
          <img
            src={movie.Poster}
            alt={movie.Title}
            data-source={movie.Poster}
            className={styles.MovieGalleryItem__image}
          />
          <p>Title: {movie.Title}</p>
          <p>Year: {movie.Year}</p>
          <p>imdbID: {movie.imdbID}</p>
        </li>
      ))}
    </>
  ) : (
    <p>No such found</p>
  );
}
