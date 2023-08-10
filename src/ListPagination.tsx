import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

export const ListPagination = () => {
  return (
    <Grid2 display="flex" justifyContent="center" marginTop="2rem">
      <Stack spacing={2}>
        <Pagination count={10} color="primary" />
      </Stack>
    </Grid2>
  );
};
