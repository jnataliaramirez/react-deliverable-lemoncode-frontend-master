import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { CardContainer } from '@/pods/card';
import { TitleContainer } from '@/pods/title';

export const DetailPage: React.FC = () => {
  return (
    <Grid2
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap="2rem"
    >
      <TitleContainer>User Detail</TitleContainer>

      <CardContainer />
    </Grid2>
  );
};
