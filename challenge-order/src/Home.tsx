import React, { FormEvent, useReducer } from "react";
import { FormOrder } from "./components/FormOrder";
import { DetailOrder } from "./components/DetailOrder";
import { Container } from "@mui/material";
import { Title } from "./components/Title";
import { orderInfoReducer } from "./useReducer";
import { initialValues } from "./mock/orderSuplier";

export const Home = () => {
  const [orderInfo, dispatch] = useReducer(orderInfoReducer, initialValues);

  const handlers = {
    updateOrderInfo: (payload) => {
      dispatch({ type: "sendOrder", payload: payload });
    },
    updateProducts: (payload) => {
      dispatch({ type: "stateProducts", payload: payload });
    },
    validAllCheckboxes: () => {
      dispatch({ type: "validAllCheckboxes" });
    },
    unselectedCheckboxes: () => {
      dispatch({ type: "unselectAllCheckboxes" });
    },
    updateClearInfo: () => {
      dispatch({ type: "clearInfo" });
    },
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Datos formulario", orderInfo);

    handlers.updateClearInfo();

    alert("Form sent");
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
          onUpdateOrderInfo={handlers.updateOrderInfo}
        />
        <DetailOrder
          products={orderInfo.products}
          onUpdateProducts={handlers.updateProducts}
          onUpdateAllCheckboxes={handlers.validAllCheckboxes}
          onUnselectedCheckboxes=
          {handlers.unselectedCheckboxes}
        />
      </form>
    </Container>
  );
};
