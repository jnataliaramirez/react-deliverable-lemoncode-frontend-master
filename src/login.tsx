import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import TextField from "@mui/material/TextField";

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleNavigation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (username === "admin" && password === "test") {
      navigate("/list");
    } else {
      alert("Usuario / contraseña no valido, psst... admin / test");
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
      <Typography component="h2" color="primary" sx={{ fontSize: 24 }}>
        ¡Hola! Bienvenid@ a la lista de GitHub
      </Typography>

      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
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
                  label="Usuario:"
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
                  label="Contraseña:"
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
              sx={{ mt: 2.4, width: "100%" }}
            >
              Entrar
            </Button>
          </form>
        </CardContent>
      </Card>
    </Grid2>
  );
};
