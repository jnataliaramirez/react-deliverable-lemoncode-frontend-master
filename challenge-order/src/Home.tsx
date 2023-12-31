import React, { FormEvent, useReducer } from "react";
import { Container } from "@mui/material";
import { orderInformationReducer } from "./useReducer";
import { initialValues } from "./mock/orderSuplier";
import { Title } from "./components/Title";
import { FormOrder } from "./components/FormOrder";
import { DetailOrder } from "./components/DetailOrder";
import { SendOrderPayload, StateProductsPayload } from "./types";

export const Home: React.FC = () => {
  const [orderInformation, dispatch] = useReducer(
    orderInformationReducer,
    initialValues
  );

  const handlers = {
    updateOrderInformation: (payload: SendOrderPayload) => {
      dispatch({ type: "sendOrder", payload: payload });
    },
    updateProducts: (payload: StateProductsPayload) => {
      dispatch({ type: "StateProductsPayload", payload: payload });
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
    console.log("Datos formulario", orderInformation);

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
          orderInformation={orderInformation}
          onUpdateOrderInformation={handlers.updateOrderInformation}
        />
        <DetailOrder
          products={orderInformation.products}
          onUpdateProducts={handlers.updateProducts}
          onUpdateAllCheckboxes={handlers.validAllCheckboxes}
          onUnselectedCheckboxes={handlers.unselectedCheckboxes}
        />
      </form>
    </Container>
  );
};
