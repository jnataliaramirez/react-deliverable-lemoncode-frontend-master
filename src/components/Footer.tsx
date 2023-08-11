import { Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";

export const Footer = () => {
  return (
    <Grid2 display="flex" justifyContent="center" marginTop="2rem">
      <footer>
        <Typography>
          <p>Realizado con 🩵 por Natalia Ramirez Parra</p>
        </Typography>
      </footer>
    </Grid2>
  );
};
