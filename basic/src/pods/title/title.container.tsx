import React from 'react';
import { TitleComponent } from './title.component';

interface Props {
  children: React.ReactNode;
}

export const TitleContainer: React.FC<Props> = (props) => {
  const { children } = props;

  return <TitleComponent> {children} </TitleComponent>;
};
