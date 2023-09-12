import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { orders } from "../../api/mock";
import { Checkbox } from "@mui/material";

interface Product {
  id: number | string;
  state: boolean;
  description: string;
  amount: number;
}

export const DetailOrder = () => {
  const [product, setProduct] = useState<Product[]>([
    {
      id: 1,
      state: false,
      description: "Frontend Master",
      amount: 2000,
    },
    {
      id: 2,
      state: false,
      description: "Backend Bootcamp",
      amount: 1500,
    },
    {
      id: 3,
      state: false,
      description: "JavaScript Bootcamp",
      amount: 1200,
    },
  ]);


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {

    // const { id , state} = event.target;

    console.log("value", event.target.checked);
    console.log("name", event);

    // setChecked(event.target.checked);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="right">State</TableCell>
            <TableCell align="center">Description</TableCell>
            <TableCell align="right">Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {product.map((item) => (
            <TableRow
              key={item.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>
                <Checkbox
                  name="valid"
                  checked={item.state}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </TableCell>

              <TableCell align="right">
                {item.state === false ? "Pending" : "Valid"}
              </TableCell>

              <TableCell align="center">{item.description}</TableCell>
              <TableCell align="right">{item.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
