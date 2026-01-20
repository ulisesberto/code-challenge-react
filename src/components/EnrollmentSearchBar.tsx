import React from "react";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

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
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ fontSize: 20 }} />
            </InputAdornment>
          ),
        },
      }}
    />
  );
};
