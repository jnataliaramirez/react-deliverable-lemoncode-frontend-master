import React, { ChangeEvent } from "react";
import { Box, Button, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { OrderInformation, SendOrderPayload } from "../../types";

interface Props {
  orderInformation: OrderInformation;
  onUpdateOrderInformation: (payload: SendOrderPayload) => void;
}

export const FormOrder: React.FC<Props> = (props) => {
  const { orderInformation, onUpdateOrderInformation } = props;

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    onUpdateOrderInformation({ name, value });
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
            value={orderInformation.number}
            required
            type="text"
            variant="outlined"
          />

          <TextField
            id="provider"
            name="provider"
            label="Provider:"
            value={orderInformation.provider}
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
            value={orderInformation.date}
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
            value={orderInformation.totalAmount}
            type="text"
            variant="outlined"
          />

          <TextField
            id="state"
            name="state"
            label="State:"
            value={`${orderInformation.state}%`}
            type="text"
            variant="outlined"
            sx={{ width: "72px" }}
          />
          <Grid2 alignSelf="center" justifySelf="self-end" marginLeft="auto">
            <Button
              disabled={orderInformation.state !== 100}
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
