import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.Fragment>
    <CssBaseline />
    <Container maxWidth="lg" sx={{ paddingTop: 4 , paddingBottom: 4}}>
      <App />
    </Container>
  </React.Fragment>
);
