import React from "react";
import { TextField } from "@mui/material";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export const EnrollmentSearchBar: React.FC<Props> = ({ value, onChange }) => {
  return (
    <TextField
      size="small"
      placeholder="Search by name or email..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      sx={{ minWidth: 250 }}
    />
  );
};
