import React from "react";
import { Link, useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { MemberEntity, MyContext } from "../context";

export const MemberCard = () => {
  const { id } = useParams();
  const myContext = React.useContext(MyContext);
  const members = myContext.members;

  const memberFind = (id: string) =>
    members.find((member) => member.login === id);

  const member = memberFind(id);

  return (
    <>
      <Card sx={{ width: 345 }}>
        <CardMedia
          sx={{ height: 240 }}
          image={member.avatar_url}
          title="user: "
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {id}
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
    </>
  );
};
