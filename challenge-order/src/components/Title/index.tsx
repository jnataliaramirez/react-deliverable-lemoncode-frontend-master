import React from "react";
import { Typography } from "@mui/material";

export const Title = () => {
  return (
    <Typography
      variant="h4"
      component="h1"
      sx={{
        padding: "1rem",
        backgroundColor: "white",
        width: "fit-content",
        position: "relative",
        top: "2rem",
        left: "1rem",
      }}
    >
      Order to Supplier
    </Typography>
  );
};
