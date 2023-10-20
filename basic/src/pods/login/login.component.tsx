import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

interface Props {
  onLogin: (username: string, password: string) => void;
}

export const LoginComponent: React.FC<Props> = (props) => {
  const { onLogin } = props;

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleNavigation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onLogin(username, password);
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
  );
};
