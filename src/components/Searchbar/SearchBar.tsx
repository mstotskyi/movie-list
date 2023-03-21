import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styles from "../Searchbar/Searchbar.module.css";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { useForm, SubmitHandler } from "react-hook-form";

interface Props {
  handleSubmitForm: (data: {}) => void;
}

type Inputs = {
  title: string;
  year: string;
  type: string;
};

export function Searchbar({ handleSubmitForm }: Props) {
  const {
    register,
    handleSubmit,
    reset,

    formState: { errors },
  } = useForm<Inputs>({ mode: "onBlur" });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    handleSubmitForm(data);
    reset();
  };

  return (
    <header className={styles.Searchbar}>
      <form className={styles.SearchForm} onSubmit={handleSubmit(onSubmit)}>
        <FormControl className={styles.SearchForm__input}>
          <TextField
            fullWidth
            defaultValue=""
            {...register("title", { required: "This field is required" })}
            id="outlined-basic"
            label="Search by title"
            name="title"
            variant="outlined"
            type="text"
            autoComplete="off"
            autoFocus
            error={errors?.title ? true : false}
            helperText={(errors?.title && errors?.title?.message) || " "}
          />
        </FormControl>
        <FormControl className={styles.SearchForm__input}>
          {" "}
          <TextField
            fullWidth
            defaultValue=""
            {...register("year", {
              pattern: {
                value: /^[1-9][0-9]{3}$/,
                message: "enter the year in 'yyyy' format",
              },
            })}
            id="outlined-basic"
            label="Search by year"
            name="year"
            variant="outlined"
            type="numeric"
            autoComplete="off"
            title="Year"
            error={errors?.year ? true : false}
            helperText={(errors?.year && errors?.year?.message) || " "}
          />
        </FormControl>
        <FormControl className={styles.SearchForm__input}>
          <InputLabel id="demo-select-small">Type</InputLabel>

          <Select
            fullWidth
            defaultValue=""
            {...register("type")}
            label="Type"
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
