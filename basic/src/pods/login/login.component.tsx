import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Login, createEmptyLogin } from './login.vm';

interface Props {
  onLogin: (login: Login) => void;
}

export const LoginComponent: React.FC<Props> = (props) => {
  const { onLogin } = props;

  const [login, setLogin] = React.useState<Login>(createEmptyLogin);

  const handleNavigation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onLogin(login);
  };

  const updateFieldValue =
    (name: keyof Login) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setLogin({
        ...login,
        [name]: e.target.value,
      });
    };

  return (
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
                value={login.username}
                onChange={updateFieldValue('username')}
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
                value={login.password}
                onChange={updateFieldValue('password')}
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
  );
};
