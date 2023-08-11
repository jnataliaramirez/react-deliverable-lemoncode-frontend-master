import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { MyContext } from "./context";

export const ListPagination = () => {
  const myContext = React.useContext(MyContext);
  const pageSize = myContext.pageSize;
  const numberPagination = myContext.pag;
  const setNumberPagination = myContext.setPag;

  const handlePaginationChange = (event, page: number) => {
    const from = (page - 1) * pageSize;
    const to = (page - 1) * pageSize + pageSize;

    setNumberPagination({ ...numberPagination, from: from, to: to });
  };

  return (
    <Grid2 display="flex" justifyContent="center" marginTop="2rem">
      <Stack spacing={2}>
        <Pagination
          onChange={handlePaginationChange}
          count={Math.ceil(numberPagination.count / pageSize)}
          color="primary"
        />
      </Stack>
    </Grid2>
  );
};
