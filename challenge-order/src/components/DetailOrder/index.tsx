import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Checkbox, TextField } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Product } from "../../types";

export const DetailOrder = () => {
  const [products, setProducts] = useState<Product[]>([
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

  // Pasar esta función al formulario inicial Total Amount
  const getTotalAmount = (products: Product[]) => {
    const totalAmount = products.reduce((acc, product) => {
      const amountAsNumber = parseFloat(product.amount);
  
      return isNaN(amountAsNumber) ? acc : acc + amountAsNumber;
    }, 0);
  
    return totalAmount;
  };

  const checkboxHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;

    const copyProducts = [...products];

    const index = copyProducts.findIndex((item) => {
      return item.id === parseInt(name, 10);
    });

    if (index !== -1) {
      copyProducts[index] = {
        ...copyProducts[index],
        state: checked,
      };

      setProducts(copyProducts);
    }
  };

  const amountHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    const copyProducts = [...products];

    const index = copyProducts.findIndex((item) => {
      return item.id === parseInt(id, 10);
    });

    if (index !== -1) {
      copyProducts[index] = {
        ...copyProducts[index],
        amount: value,
      };

      setProducts(copyProducts);
    }
  };

  return (
    <Grid2
      marginTop="2rem"
      sx={{ p: 4, border: "1px solid grey", borderRadius: "8px" }}
    >
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
    </Grid2>
  );
};
