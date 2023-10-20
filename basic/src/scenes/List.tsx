import React from 'react';
import { ListContainer } from '@/pods/list';
import { Searcher } from '@/components/Searcher';
import { FooterContainer } from '@/pods/footer';
import { TitleContainer } from '@/pods/title';
import { PaginationContainer } from '@/pods/pagination';
import { MyContext } from '@/core';

export const ListPage: React.FC = () => {
  const myContext = React.useContext(MyContext);
  const organization = myContext.organization;

  return (
    <>
      <TitleContainer> Organization list: {organization} </TitleContainer>
      <Searcher />
      <PaginationContainer />
      <ListContainer />
      <FooterContainer />
    </>
  );
};
