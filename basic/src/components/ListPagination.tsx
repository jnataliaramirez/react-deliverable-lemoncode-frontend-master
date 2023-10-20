import React from 'react';
import { MyContext } from '@/core';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

export const ListPagination: React.FC = (props) => {


  const myContext = React.useContext(MyContext);
  const pageSize = myContext.pag.pageSize;
  const numberPagination = myContext.pag;
  const setNumberPagination = myContext.setPag;

  const handlePaginationChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ): void => {
    const from = (page - 1) * pageSize;
    const to = (page - 1) * pageSize + pageSize;

    setNumberPagination({
      pag: {
        ...numberPagination,
        page: page,
        from: from,
        to: to,
      },
    });
  };

  return (
    <Grid2 display="flex" justifyContent="center" marginTop="2rem">
      <Stack spacing={2}>
        <Pagination
          onChange={handlePaginationChange}
          count={Math.ceil(numberPagination.count / pageSize)}
          color="primary"
          page={numberPagination.page}
        />
      </Stack>
    </Grid2>
  );
};
