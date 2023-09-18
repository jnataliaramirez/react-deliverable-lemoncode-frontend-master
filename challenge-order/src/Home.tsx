import React, { ChangeEvent, FormEvent, useReducer, useState } from "react";
import { FormOrder } from "./components/FormOrder";
import { DetailOrder } from "./components/DetailOrder";
import { Container } from "@mui/material";
import { Title } from "./components/Title";
import { orderInfoReducer } from "./useReducer";
import { initialValues } from "./mock/orderSuplier";

export const Home = () => {
  const [orderInfo, dispatch] = useReducer(orderInfoReducer, initialValues);
  console.log("products desde Home", orderInfo.products);

  const handleUpdateOrderInfo = (orderInfo) => {
    dispatch({ type: "sendOrder", payload: orderInfo });
  };

  const handleUpdateProducts = (products) => {
    dispatch({ type: "stateProducts", payload: products });
  };
  
  const handleUpdateTotalAmount = (totalAmount) => {
    dispatch({ type: "totalAmount", payload: totalAmount });
  }

  const handleUpdateState = (state) => {
    dispatch({ type: "state", payload: state });
  }


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
          onUpdateTotalAmount={handleUpdateTotalAmount}
          onUpdateState={handleUpdateState}
          onUpdateProducts={handleUpdateProducts}
        />
      </form>
    </Container>
  );
};
