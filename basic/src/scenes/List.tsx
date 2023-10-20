import React from 'react';
import { ListContainer } from '@/pods/list';
import { Searcher } from '@/components/Searcher';
import { ListPagination } from '@/components/ListPagination';
import { FooterContainer } from '@/pods/footer';
import { TitleContainer } from '@/pods/title';
import { PaginationContainer } from '@/pods/pagination';

export const ListPage: React.FC = () => {
  return (
    <>
      <TitleContainer />
      <Searcher />
      <ListPagination />
      <PaginationContainer />
      <ListContainer />
      <FooterContainer />
    </>
  );
};
