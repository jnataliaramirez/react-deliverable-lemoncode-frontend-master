import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

interface Props {
  pageSize: number;
  numberPagination: { count: number; page: number };
  onChangePage: (page: number) => void;
}

export const PaginationComponent: React.FC<Props> = (props) => {
  const { numberPagination, pageSize, onChangePage } = props;

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    onChangePage(page);
  };

  return (
    <Grid2 display="flex" justifyContent="center" marginTop="2rem">
      <Stack spacing={2}>
        <Pagination
          onChange={handleChangePage}
          count={Math.ceil(numberPagination.count / pageSize)}
          color="primary"
          page={numberPagination.page}
        />
      </Stack>
    </Grid2>
  );
};
