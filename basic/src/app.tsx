import React from 'react';
import { MyContextProvider } from '@/core';
import { RouterComponent } from './core';

export const App = () => {
  return (
    <MyContextProvider>
      <RouterComponent />
    </MyContextProvider>
  );
};
