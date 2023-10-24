import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from 'core';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface Props {
  member: {
    avatar_url: string;
    id: string;
    login: string;
  };
}

export const CardComponent: React.FC<Props> = (props) => {
  const { member } = props;

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
            {member.login} - id: {member.id} 
          </Typography>
        </CardContent>
      </Card>

      <CardActions>
        <Button type="button" variant="contained">
          <Link className="button__back" to={routes.list}>
            Back
          </Link>
        </Button>
      </CardActions>
    </>
  );
};
