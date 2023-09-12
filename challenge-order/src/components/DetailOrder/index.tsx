import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Checkbox, TextField } from "@mui/material";

interface Product {
  id: number | string;
  state: boolean;
  description: string;
  amount: string;
}

export const DetailOrder = () => {
  const [product, setProduct] = useState<Product[]>([
    {
      id: 1,
      state: false,
      description: "Frontend Master",
      amount: "2000",
    },
    {
      id: 2,
      state: false,
      description: "Backend Bootcamp",
      amount: "1500",
    },
    {
      id: 3,
      state: false,
      description: "JavaScript Bootcamp",
      amount: "1200",
    },
  ]);

  const checkboxHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;

    const copyProduct = [...product];

    const index = copyProduct.findIndex((item) => {
      return item.id === parseInt(name, 10);
    });

    if (index !== -1) {
      copyProduct[index] = {
        ...copyProduct[index],
        state: checked,
      };

      setProduct(copyProduct);
    }
  };

  const amountHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    const copyProduct = [...product];

    const index = copyProduct.findIndex((item) => {
      return item.id === parseInt(id, 10);
    });

    if (index !== -1) {
 
      copyProduct[index] = {
        ...copyProduct[index],
        amount: value,
      };
  
      setProduct(copyProduct);
    }
  };

  return (
    <TableContainer component={Paper}>
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
          {product.map((item) => (
            <TableRow
              key={item.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>
                <Checkbox
                  name={String(item.id)}
                  value={item.state}
                  checked={item.state}
                  onChange={checkboxHandleChange}
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
                  onChange={amountHandleChange}
                  type="number"
                  variant="outlined"
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
