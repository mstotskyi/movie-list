import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { getTotalResult, getCurrentPage } from "../../redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { currentPage } from "../../redux/actions";

interface Props {
  handleOnClick: (data: {}) => void;
}

export function PaginationPages({ handleOnClick }: Props) {
  const totalResult = useSelector(getTotalResult);
  const currPage = useSelector(getCurrentPage);
  const dispatch = useDispatch();

  const pages = Math.ceil(totalResult / 10);

  return (
    <Stack spacing={2}>
      <Pagination
        count={pages}
        page={Number(currPage)}
        onChange={(_, num) => (dispatch(currentPage(num)), handleOnClick(num))}
        showFirstButton
        showLastButton
      />
    </Stack>
  );
}
