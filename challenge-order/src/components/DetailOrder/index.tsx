import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Button, Checkbox, TextField } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Product, StateProductsPayload } from "../../types";

interface Props {
  products: Product[];
  onUpdateProducts: (payload: StateProductsPayload) => void;
  onUpdateAllCheckboxes: () => void;
  onUnselectedCheckboxes: () => void;
}

export const DetailOrder: React.FC<Props> = (props) => {
  const {
    products,
    onUpdateProducts,
    onUpdateAllCheckboxes,
    onUnselectedCheckboxes,
  } = props;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, name, type, value, checked } = e.target;

    onUpdateProducts({ id, name, type, value, checked });
  };

  const handleAllCheckboxes = () => {
    onUpdateAllCheckboxes();
  };

  const handleUnselectAllCheckboxes = () => {
    onUnselectedCheckboxes();
  };

  return (
    <Grid2
      marginTop="2rem"
      sx={{ p: 4, border: "1px solid grey", borderRadius: "8px" }}
    >
      <Grid2 display="flex" gap="1rem">
        <Button variant="contained" onClick={handleAllCheckboxes}>
          Valid all
        </Button>
        <Button variant="outlined" onClick={handleUnselectAllCheckboxes}>
          Pending All
        </Button>
      </Grid2>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell align="center">State</TableCell>
              <TableCell align="center">Description</TableCell>
              <TableCell align="center">Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((item) => (
              <TableRow
                key={item.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>
                  <Checkbox
                    name={String(item.id)}
                    value={item.state}
                    checked={item.state}
                    onChange={handleChange}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                </TableCell>

                <TableCell align="center">
                  {item.state === false ? "Pending" : "Valid"}
                </TableCell>

                <TableCell>{item.description}</TableCell>
                <TableCell align="center">
                  <TextField
                    id={String(item.id)}
                    name="amount"
                    value={item.amount}
                    onChange={handleChange}
                    type="number"
                    variant="outlined"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid2>
  );
};
