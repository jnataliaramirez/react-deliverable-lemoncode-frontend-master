import React from 'react';
import { LoginContainer } from '@/pods/login';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { TitleContainer } from '@/pods/title';

export const LoginPage: React.FC = () => {
 
  return (
    <Grid2
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <TitleContainer>¡Hello! Welcome to GitHub List</TitleContainer>
      <LoginContainer />

    </Grid2>
  );
};
