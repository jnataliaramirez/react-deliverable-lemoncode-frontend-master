import React from 'react';
import { ListContainer } from '@/pods/list';
import { MyContext } from '@/core';
import { Title } from '@/components/Title';
import { Searcher } from '@/components/Searcher';
import { ListPagination } from '@/components/ListPagination';
import { FooterContainer } from '@/pods/footer';

export const ListPage: React.FC = () => {
  const myContext = React.useContext(MyContext);
  const organization = myContext.organization;

  return (
    <>
      <Title>Organization list: {organization}</Title>
      <Searcher />
      <ListPagination />
      <ListContainer />
      <FooterContainer />
    </>
  );
};
