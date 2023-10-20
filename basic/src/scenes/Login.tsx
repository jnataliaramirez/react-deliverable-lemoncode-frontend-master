import React from 'react';
import { LoginContainer } from '@/pods/login';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { Title } from '../components/Title';

export const LoginPage: React.FC = () => {
 
  return (
    <Grid2
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Title>¡Hello! Welcome to GitHub List</Title>
      <LoginContainer />

    </Grid2>
  );
};
