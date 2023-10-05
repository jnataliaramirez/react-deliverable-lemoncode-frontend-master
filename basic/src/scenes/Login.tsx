import React from 'react';
import { useNavigate } from 'react-router-dom';
import { routes } from 'core';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import TextField from '@mui/material/TextField';
import { Title } from '../components/Title';

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleNavigation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (username === 'admin' && password === 'test') {
      navigate(routes.list);
    } else {
      alert('Usuario / contraseña no valido, psst... admin / test');
    }
  };

  return (
    <Grid2
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Title>¡Hello! Welcome to GitHub List</Title>

      <Card
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          width: 420,
          mt: 3,
          p: 2,
        }}
      >
        <CardContent>
          <form onSubmit={handleNavigation}>
            <div>
              <div>
                <TextField
                  id="user"
                  label="User:"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  variant="standard"
                  margin="dense"
                  fullWidth
                />
              </div>
              <div>
                <TextField
                  id="password"
                  label="Password:"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  variant="standard"
                  margin="dense"
                  fullWidth
                />
              </div>
            </div>

            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 2.4, width: '100%' }}
            >
              Enter
            </Button>
          </form>
        </CardContent>
      </Card>
    </Grid2>
  );
};
