import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { MemberEntity, routes } from '@/core';
import { Link } from 'react-router-dom';

interface Props {
  members: MemberEntity[];
}

export const ListComponent: React.FC<Props> = (props) => {
  const { members } = props;
  return (
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
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <img src={member.avatar_url} />
              </TableCell>
              <TableCell>{member.id}</TableCell>
              <TableCell>
                <Link to={routes.details(member.login)}>{member.login}</Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
