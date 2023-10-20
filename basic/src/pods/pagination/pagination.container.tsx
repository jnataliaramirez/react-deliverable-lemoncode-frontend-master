import React from 'react';
import { MyContext } from '@/core';
import { PaginationComponent } from './pagination.component';

export const PaginationContainer = () => {
  const myContext = React.useContext(MyContext);
  const pageSize = myContext.pag.pageSize;
  const numberPagination = myContext.pag;
  const setNumberPagination = myContext.setPag;

  const handlePaginationChange = (page: number): void => {
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
    <PaginationComponent
      pageSize={pageSize}
      numberPagination={numberPagination}
      onChangePage={handlePaginationChange}
    />
  );
};
