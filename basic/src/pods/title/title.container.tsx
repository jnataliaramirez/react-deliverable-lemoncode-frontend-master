import React from 'react';
import { MyContext } from '@/core';
import { TitleComponent } from './title.component';

export const TitleContainer: React.FC = () => {
  const myContext = React.useContext(MyContext);
  const organization = myContext.organization;

  return <TitleComponent> Organization list: {organization} </TitleComponent>;
};
