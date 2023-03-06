import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styles from "../Searchbar/Searchbar.module.css";

interface Props {
  getSearchQuery: (searchQery: string) => void;
}
export function Searchbar({ getSearchQuery }: Props) {
  const [searchQery, setSearchQuery] = useState("");

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    getSearchQuery(searchQery);
    setSearchQuery("");
  };

  const handleOnChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setSearchQuery(e.target.value);
  };

  return (
    <header className={styles.Searchbar}>
      <form className={styles.SearchForm} onSubmit={handleOnSubmit}>
        <TextField
          className={styles.SearchForm__input}
          id="outlined-basic"
          label="Search"
          variant="outlined"
          value={searchQery}
          type="text"
          autoComplete="off"
          autoFocus
          onChange={handleOnChange}
        />
        <Button
          variant="contained"
          type="submit"
          className={styles.SearchForm__button}
        >
          Search
        </Button>
      </form>
    </header>
  );
}
