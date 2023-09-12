import React from 'react'
import { FormOrder } from "./components/FormOrder";
import { DetailOrder } from './components/DetailOrder';

export const Home = () => {
  return (
    <>
      <h1>Pedido a proveedor</h1>
      <FormOrder />
      <DetailOrder />
    </>
  );
}
