import React from "react";
import { MyContext } from "./context";
import Typography from "@mui/material/Typography";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { getMembers } from "./api";
import { ListPagination } from "./components/ListPagination";
import { Searcher } from "./components/Searcher";
import { ListTable } from "./components/ListTable";

export const ListPage: React.FC = () => {
  const myContext = React.useContext(MyContext);
  const organization = myContext.organization;
  const setMembers = myContext.setMembers;
  const numberPagination = myContext.pag;
  const setNumberPagination = myContext.setPag;

  // Dividir: una llamada a todos los members, otra para la paginación
  React.useEffect(() => {
    const fetchMembers = async (organization) => {
      const membersRes = await getMembers(organization);
      setNumberPagination({ ...numberPagination, count: membersRes.length });
      setMembers(membersRes.slice(numberPagination.from, numberPagination.to));
    };
    fetchMembers(organization);
  }, [organization, numberPagination.from, numberPagination.to]);

  return (
    <>
      <Grid2 display="flex" justifyContent="center">
        <Typography
          component="h2"
          color="primary"
          sx={{ fontSize: 24, textTransform: "uppercase", fontWeight: "bold" }}
        >
          Lista de miembros de la organización: {organization}
        </Typography>
      </Grid2>

      <Searcher />
      <ListPagination />
      <ListTable />
    </>
  );
};
