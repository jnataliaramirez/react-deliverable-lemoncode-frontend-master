import React from "react";
import { MyContext } from "../context";
import { Button, TextField } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

export const Searcher: React.FC = () => {
  const myContext = React.useContext(MyContext);
  const organization = myContext.organization;
  const setOrganization = myContext.setOrganization;

  const handleKeypress = (ev: React.KeyboardEvent<HTMLInputElement>) => {
    if (ev.keyCode === 13) {
      const inputElement = ev.target as HTMLInputElement;
      setOrganization(inputElement.value);
    }
  };

  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const formElement = ev.target as HTMLFormElement;
    const organizationInput = formElement.elements.namedItem(
      "organization"
    ) as HTMLInputElement;
    setOrganization(organizationInput.value);
  };

  return (
    <Grid2 display="flex" justifyContent="center" marginTop="2rem">
      <form onSubmit={handleSubmit} className="searcher-container">
        <TextField
          label="Organización"
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
        <Button type="submit" variant="outlined" sx={{}}>
          Buscar
        </Button>
      </form>
    </Grid2>
  );
};
