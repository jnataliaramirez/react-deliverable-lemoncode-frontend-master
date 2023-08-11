import React from "react";
import Typography from "@mui/material/Typography";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

export const Title = ({ children }) => {
  return (
    <Grid2 display="flex" justifyContent="center">
      <Typography
        component="h2"
        color="primary"
        sx={{ fontSize: 24, textTransform: "uppercase", fontWeight: "bold" }}
      >
        {children}
      </Typography>
    </Grid2>
  );
};
