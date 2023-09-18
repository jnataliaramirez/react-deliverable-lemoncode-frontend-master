import React, { ChangeEvent } from "react";
import { Box, Button, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

export const FormOrder = ({ orderInfo, onUpdateOrderInfo }) => {
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    onUpdateOrderInfo({
      ...orderInfo,
      [name]: value,
    });
  };

  return (
    <Box sx={{ p: 4, border: "1px solid grey", borderRadius: "8px" }}>
      <Grid2
        display="flex"
        flexDirection="column"
        gap="1rem"
        marginTop="1rem"
        width="100%"
      >
        <Grid2 display="flex" gap="2rem">
          <TextField
            id="number"
            name="number"
            label="Number:"
            value={orderInfo.number}
            onChange={handleChange}
            required
            type="text"
            variant="outlined"
          />

          <TextField
            id="provider"
            name="provider"
            label="Provider:"
            value={orderInfo.provider}
            onChange={handleChange}
            required
            type="text"
            variant="outlined"
            sx={{ width: "400px" }}
          />
          <TextField
            id="date"
            name="date"
            label="Date:"
            value={orderInfo.date}
            onChange={handleChange}
            required
            type="date"
            variant="outlined"
          />
        </Grid2>

        <Grid2 display="flex" gap="2rem">
          <TextField
            id="totalAmount"
            name="totalAmount"
            label="Total Amount:"
            value={orderInfo.totalAmount}
            onChange={handleChange}
            type="text"
            variant="outlined"
          />

          <TextField
            id="state"
            name="state"
            label="State:"
            value={`${orderInfo.state}%`}
            onChange={handleChange}
            type="text"
            variant="outlined"
            sx={{ width: "72px" }}
          />
          <Grid2 alignSelf="center" justifySelf="self-end" marginLeft="auto">
            <Button
              disabled={orderInfo.state !== 100}
              type="submit"
              variant="contained"
              size="medium"
              sx={{
                width: "160px",
                height: "48px",
              }}
              endIcon={<SendIcon />}
            >
              Send
            </Button>
          </Grid2>
        </Grid2>
      </Grid2>
    </Box>
  );
};
