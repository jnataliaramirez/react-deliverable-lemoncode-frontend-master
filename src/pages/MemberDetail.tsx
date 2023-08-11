import React from "react";
import { Link, useParams } from "react-router-dom";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export const DetailPage: React.FC = () => {
  const { id } = useParams();

  return (
    <>
      <Grid2
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gap="2rem"
      >
        <Typography
          component="h2"
          color="primary"
          sx={{ fontSize: 24, textTransform: "uppercase", fontWeight: "bold" }}
        >
          Detalle del usuario {id}
        </Typography>

        <Card sx={{ width: 345 }}>
          <CardMedia sx={{ height: 140 }} image={`avatar_url`} title="user: " />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              name
            </Typography>
            <Typography variant="body2" color="text.secondary">
              location
            </Typography>
            <Typography variant="body2" color="text.secondary">
              bio
            </Typography>
          </CardContent>
        </Card>

        <CardActions>
          <Button type="button" variant="contained">
            <Link className="button__back" to="/list">
              Regresar
            </Link>
          </Button>
        </CardActions>
      </Grid2>
    </>
  );
};
