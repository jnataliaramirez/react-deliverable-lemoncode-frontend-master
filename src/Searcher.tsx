import React from "react";
import { MyContext } from "./context";
import { Button, TextField, Unstable_Grid2 } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

export const Searcher = () => {
  const myContext = React.useContext(MyContext);
  const organization = myContext.organization;
  const setOrganization = myContext.setOrganization;

  const handleKeypress = (ev) => {
    if (ev.keyCode === 13) {
      setOrganization(ev.target.value);
    }
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    setOrganization(ev.target.organization.value);
  };

  return (
    <Grid2 display="flex" justifyContent="center" marginTop="2rem" >
      <form onSubmit={handleSubmit} className="searcher-container">
        <TextField
          id="organization"
          label="Organización"
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
        <Button type="submit" variant="outlined" sx={{}}>
          Buscar
        </Button>
      </form>
    </Grid2>
  );
};
