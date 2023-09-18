import React, { ChangeEvent, FormEvent, useReducer, useState } from "react";
import { FormOrder } from "./components/FormOrder";
import { DetailOrder } from "./components/DetailOrder";
import { Container } from "@mui/material";
import { Title } from "./components/Title";
import { orderInfoReducer } from "./useReducer";
import { initialValues } from "./mock/orderSuplier";
import { getCurrentDay } from "./utils/getCurrentDay";

export const Home = () => {
  const [orderInfo, dispatch] = useReducer(orderInfoReducer, initialValues);
  console.log("products desde Home", orderInfo.products);

  const handleUpdateOrderInfo = (orderInfo) => {
    dispatch({ type: "sendOrder", payload: orderInfo });
  };

  const handleUpdateProducts = (products) => {
    dispatch({ type: "stateProducts", payload: products });
  };



  // Pasar esta función al formulario inicial
  const getTotalAmount = (products: Product[]) => {
    const totalAmount = products.reduce((acc, product) => {
      const amountAsNumber = parseFloat(product.amount);

      return isNaN(amountAsNumber) ? acc : acc + amountAsNumber;
    }, 0);

    return totalAmount;
  };

  // Pasar esta función al formulario inicial
  const getState = (products: Product[]) => {
    const totalProducts = products.length;

    const checkedValid = products.filter((product) => product.state === true)
      .length;

    if (totalProducts === 0) {
      return 0;
    }

    return Math.round((checkedValid / totalProducts) * 100);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Datos formulario", orderInfo);
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        paddingBottom: 4,
      }}
    >
      <Title />
      <form onSubmit={handleSubmit}>
        <FormOrder
          orderInfo={orderInfo}
          onUpdateOrderInfo={handleUpdateOrderInfo}
        />
        <DetailOrder
          products={orderInfo.products}
          onUpdateProducts={handleUpdateProducts}
        />
      </form>
    </Container>
  );
};
