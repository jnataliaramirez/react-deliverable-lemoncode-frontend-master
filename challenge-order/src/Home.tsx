import React from "react";
import { FormOrder } from "./components/FormOrder";
import { DetailOrder } from "./components/DetailOrder";
import { Container, Typography } from "@mui/material";
import { Title } from "./components/Title";

export const Home = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        paddingBottom: 4,
      }}
    >
      <Title />
      <FormOrder />
      <DetailOrder />
    </Container>
  );
};
