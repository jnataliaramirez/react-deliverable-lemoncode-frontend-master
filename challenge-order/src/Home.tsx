import React, { useReducer } from "react";
import { FormOrder } from "./components/FormOrder";
import { DetailOrder } from "./components/DetailOrder";
import { Container } from "@mui/material";
import { Title } from "./components/Title";
import { orderInfoReducer } from "./useReducer";
import { initialValues } from "./mock/orderSuplier";

export const Home = () => {
  const [orderInfo, dispatch] = useReducer(orderInfoReducer, initialValues);

  const handleUpdateOrderInfo = (orderInfo) => {
    dispatch({ type: "sendOrder", payload: orderInfo });
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        paddingBottom: 4,
      }}
    >
      <Title />
      <FormOrder onUpdatedOrderInfo={handleUpdateOrderInfo} />
      <DetailOrder />
    </Container>
  );
};
