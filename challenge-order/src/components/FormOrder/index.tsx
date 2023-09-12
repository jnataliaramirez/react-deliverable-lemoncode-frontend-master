import React, { ChangeEvent, FormEvent, useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

interface FormData {
  id: string;
  provider: string;
  date: string;
  totalAmount: string;
  state: string;
}

export const FormOrder = () => {
  const [formData, setFormData] = useState<FormData>({
    id: "",
    provider: "",
    date: getCurrentDay(),
    totalAmount: "",
    state: "",
  });

  function getCurrentDay() {
    const fecha = new Date();
    const year = fecha.getFullYear();
    let month: string | number = fecha.getMonth() + 1;
    let day: string | number = fecha.getDate();

    if (month < 10) {
      month = `0${month}`;
    }
    if (day < 10) {
      day = `0${day}`;
    }

    return `${year}-${month}-${day}`;
  }

  const handleChange = (
    e: ChangeEvent<
      | HTMLInputElement
      | HTMLSelectElement
      | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Datos del formulario:", formData);
  };

  return (
    <Box sx={{ p: 4, border: "1px solid grey", borderRadius: "8px" }}>
      <form onSubmit={handleSubmit}>
        <Grid2
          display="flex"
          flexDirection="column"
          gap="1rem"
          marginTop="1rem"
          width="100%"
        >
          <Grid2 display="flex" gap="2rem">
            <TextField
              id="id"
              name="id"
              label="Number:"
              value={formData.id}
              onChange={handleChange}
              required
              type="text"
              variant="outlined"
            />

            <TextField
              id="provider"
              name="provider"
              label="Provider:"
              value={formData.provider}
              onChange={handleChange}
              required
              type="text"
              variant="outlined"
              sx={{ width: "400px"}}
            />
            <TextField
              id="date"
              name="date"
              label="Date:"
              value={formData.date}
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
              value={formData.totalAmount}
              onChange={handleChange}
              type="text"
              variant="outlined"
            />

            <TextField
              id="state"
              name="state"
              label="State:"
              value={formData.state}
              onChange={handleChange}
              type="text"
              variant="outlined"
              sx={{ width: "72px"}}

            />
            <Grid2 alignSelf="center" justifySelf="self-end" marginLeft="auto">
              <Button
                type="submit"
                variant="contained"
                size="medium"
                sx={{
                  width: "160px",
                  height: "48px"
                }}
                endIcon={<SendIcon />}
              >
                Send
              </Button>
            </Grid2>
          </Grid2>
        </Grid2>
      </form>
    </Box>
  );
};
