import React from 'react';
import { ListContainer } from '@/pods/list';
import { FooterContainer } from '@/pods/footer';
import { TitleContainer } from '@/pods/title';
import { PaginationContainer } from '@/pods/pagination';
import { MyContext } from '@/core';
import { SearcherContainer } from '@/pods/seacher/seacher.container';

export const ListPage: React.FC = () => {
  const myContext = React.useContext(MyContext);
  const organization = myContext.organization;

  return (
    <>
      <TitleContainer> Organization list: {organization} </TitleContainer>
      <SearcherContainer />
      <PaginationContainer />
      <ListContainer />
      <FooterContainer />
    </>
  );
};
