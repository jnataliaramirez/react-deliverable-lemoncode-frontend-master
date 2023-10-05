import React from 'react';
import { MyContextProvider } from './context';
import { RouterComponent } from './core';

export const App = () => {
  return (
    <MyContextProvider>
      <RouterComponent />
    </MyContextProvider>
  );
};
