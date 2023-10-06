import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './app';
import CssBaseline from '@mui/material/CssBaseline';
import { CenterLayout } from '@/layouts';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.Fragment>
    <CssBaseline />
    <CenterLayout>
      <App />
    </CenterLayout>
  </React.Fragment>
);
