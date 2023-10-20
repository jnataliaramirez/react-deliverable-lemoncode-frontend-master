import React from 'react';
import { ListContainer } from '@/pods/list';
import { MyContext } from '@/core';
import { Title } from '@/components/Title';
import { Footer } from '@/components/Footer';
import { Searcher } from '@/components/Searcher';
import { ListPagination } from '@/components/ListPagination';

export const ListPage: React.FC = () => {
  const myContext = React.useContext(MyContext);
  const organization = myContext.organization;

  return (
    <>
      <Title>Organization list: {organization}</Title>
      <Searcher />
      <ListPagination />
      <ListContainer />
      <Footer />
    </>
  );
};
