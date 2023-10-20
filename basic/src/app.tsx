import React from 'react';
import { MyContextProvider, RouterComponent } from './core';

export const App = () => {
  return (
    <MyContextProvider>
      <RouterComponent />
    </MyContextProvider>
  );
};
