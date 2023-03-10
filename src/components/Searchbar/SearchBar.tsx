import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styles from "../Searchbar/Searchbar.module.css";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";

// import InputLabel from "@mui/material/InputLabel";

interface Props {
  getSearchQueryName: (searchQueryName: string) => void;
  getSearchQueryYear: (searchQueryYear: string) => void;
  getSearchQueryType: (searchQueryType: string) => void;
}
export function Searchbar({
  getSearchQueryName,
  getSearchQueryYear,
  getSearchQueryType,
}: Props) {
  const [searchQueryName, setSearchQueryName] = useState("");
  const [searchQueryYear, setSearchQueryYear] = useState("");
  const [searchQueryType, setSearchQueryType] = useState("");

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    getSearchQueryName(searchQueryName);
    getSearchQueryYear(searchQueryYear);
    getSearchQueryType(searchQueryType);
    setSearchQueryName("");
    setSearchQueryYear("");
    setSearchQueryType("");
  };

  const handleOnChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    switch (e.target.name) {
      case "title":
        setSearchQueryName(e.target.value);
        break;
      case "year":
        setSearchQueryYear(e.target.value);
        break;
      default:
        return;
    }
  };

  const handleChange = (event: SelectChangeEvent) => {
    setSearchQueryType(event.target.value as string);
  };

  return (
    <header className={styles.Searchbar}>
      <form className={styles.SearchForm} onSubmit={handleOnSubmit}>
        <TextField
          className={styles.SearchForm__input}
          id="outlined-basic"
          label="Search by name"
          name="title"
          variant="outlined"
          value={searchQueryName}
          required
          type="text"
          autoComplete="off"
          autoFocus
          onChange={handleOnChange}
        />
        <TextField
          className={styles.SearchForm__input}
          id="outlined-basic"
          label="Search by year"
          name="year"
          variant="outlined"
          value={searchQueryYear}
          type="numeric"
          autoComplete="off"
          title="Year"
          inputProps={{ inputMode: "numeric", pattern: "^[1-9][0-9]{3}$" }}
          onChange={handleOnChange}
        />
        <FormControl fullWidth>
          <InputLabel id="demo-select-small">Type</InputLabel>

          <Select
            value={searchQueryType}
            label="Type"
            onChange={handleChange}
            placeholder="Type"
          >
            <MenuItem value="movie">movie</MenuItem>
            <MenuItem value="series">series</MenuItem>
            <MenuItem value="episode">episode</MenuItem>
          </Select>
        </FormControl>
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
