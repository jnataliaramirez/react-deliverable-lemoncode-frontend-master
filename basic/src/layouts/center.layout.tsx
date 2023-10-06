import React from 'react';
import { Container } from '@mui/material';

interface Props {
  children: React.ReactNode;
}

export const CenterLayout: React.FC<Props> = ({ children }) => (
  <Container maxWidth="lg" sx={{ paddingTop: 4, paddingBottom: 4 }}>
    {children}
  </Container>
);
