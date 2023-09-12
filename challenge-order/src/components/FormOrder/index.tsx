import React, { ChangeEvent, FormEvent, useState } from "react";
import { Button, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

interface FormData {
  number: string;
  provider: string;
  date: string;
  totalAmount: string;
  state: string;
}

export const FormOrder = () => {
  const [formData, setFormData] = useState<FormData>({
    number: "",
    provider: "",
    date: "",
    totalAmount: "",
    state: "",
  });

  const handleChange = (
    e: ChangeEvent<
      | HTMLInputElement
      | HTMLSelectElement
      | HTMLTextAreaElement
      | HTMLInputElement
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
    <form onSubmit={handleSubmit}>
      <TextField
        id="number"
        label="Number:"
        value={formData.number}
        onChange={handleChange}
        required
        type="text"
        variant="outlined"
      />

      <TextField
        id="provider"
        label="Provider:"
        value={formData.provider}
        onChange={handleChange}
        required
        type="text"
        variant="outlined"
      />
      <TextField
        id="date"
        label="Date:"
        value={formData.date}
        onChange={handleChange}
        required
        type="date"
        variant="outlined"
      />
      <TextField
        id="totalAmount"
        label="Total Amount:"
        value={formData.totalAmount}
        onChange={handleChange}
        type="text"
        variant="outlined"
      />

      <TextField
        id="state"
        label="State:"
        value={formData.state}
        onChange={handleChange}
        type="text"
        variant="outlined"
      />

      <Button
        type="submit"
        variant="contained"
        size="medium"
        endIcon={<SendIcon />}
      >
        Send
      </Button>
    </form>
  );
};
