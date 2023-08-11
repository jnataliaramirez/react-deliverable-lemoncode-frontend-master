import React from "react";
import { Link } from "react-router-dom";
import { Searcher } from "./Searcher";
import { MyContext } from "./context";
import Typography from "@mui/material/Typography";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { getMembers } from "./api";
import { ListPagination } from "./ListPagination";

interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
}

export const ListPage: React.FC = () => {
  const myContext = React.useContext(MyContext);
  const organization = myContext.organization;
  const numberPagination = myContext.pag;
  const setNumberPagination = myContext.setPag;

  const [members, setMembers] = React.useState<MemberEntity[]>([]);

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

      <TableContainer component={Paper} elevation={4} sx={{ mt: 4 }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Avatar</TableCell>
              <TableCell>Id</TableCell>
              <TableCell>Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {members.map((member) => (
              <TableRow
                key={member.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <img src={member.avatar_url} />
                </TableCell>
                <TableCell>{member.id}</TableCell>
                <TableCell>
                  <Link to={`/detail/${member.login}`}>{member.login}</Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
