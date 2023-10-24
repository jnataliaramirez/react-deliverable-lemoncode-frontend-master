import React from 'react';
import { Button, TextField } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

interface Props {
  organization: string;
  onKeyPress: (ev: React.KeyboardEvent<HTMLInputElement>) => void;
  onSubmit: (ev: React.FormEvent<HTMLFormElement>) => void;
}

export const SearcherComponent: React.FC<Props> = (props) => {
  const { organization, onKeyPress, onSubmit } = props;

  const handleKeypress = (ev: React.KeyboardEvent<HTMLInputElement>) =>
    onKeyPress(ev);

  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => onSubmit(ev);

  return (
    <Grid2 display="flex" justifyContent="center" marginTop="2rem">
      <form onSubmit={handleSubmit} className="searcher-container">
        <TextField
          label="Organization"
          id="organization"
          name="organization"
          type="search"
          defaultValue={organization}
          onKeyUp={handleKeypress}
          variant="outlined"
          margin="none"
          size="small"
          color="primary"
          sx={{ width: 200 }}
        />
        <Button type="submit" variant="outlined">
          Search
        </Button>
      </form>
    </Grid2>
  );
};
