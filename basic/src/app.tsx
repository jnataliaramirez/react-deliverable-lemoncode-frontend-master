import React from 'react';
import { MyContextProvider } from './core/context/context';
import { RouterComponent } from './core';

export const App = () => {
  return (
    <MyContextProvider>
      <RouterComponent />
    </MyContextProvider>
  );
};
