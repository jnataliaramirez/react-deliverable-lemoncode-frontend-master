import React from 'react';
import { Typography } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

interface Props {
  children: React.ReactNode;
}

export const FooterComponent: React.FC<Props> = (props) => {
  const { children } = props;
  return (
    <Grid2 display="flex" justifyContent="center" marginTop="2rem">
      <footer>
        <Typography color="primary"> {children} </Typography>
      </footer>
    </Grid2>
  );
};
