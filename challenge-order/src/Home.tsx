import React from "react";
import { FormOrder } from "./components/FormOrder";
import { DetailOrder } from "./components/DetailOrder";
import { Container, Typography } from "@mui/material";

export const Home = () => {
  return (
    <Container maxWidth="lg" sx={{ paddingTop: 4, paddingBottom: 4 }}>
      <Typography variant="h4" component="h1">
        Order to Supplier
      </Typography>
      <FormOrder />
      {/* <DetailOrder /> */}
    </Container>
  );
};
