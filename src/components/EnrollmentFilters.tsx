import React from "react";
import { Select, MenuItem } from "@mui/material";
import type { SelectChangeEvent } from "@mui/material";
import { EnrollmentStatus } from "../types/enrollment";

type Props = {
  currentFilter: EnrollmentStatus;
  onFilterChange: (filter: EnrollmentStatus) => void;
};

export const EnrollmentFilters: React.FC<Props> = ({
  currentFilter,
  onFilterChange,
}) => {
  return (
    <Select
      value={currentFilter}
      onChange={(e: SelectChangeEvent) =>
        onFilterChange(e.target.value as EnrollmentStatus)
      }
      size="small"
      sx={{
        fontSize: "0.75rem",
        fontWeight: 700,
        color: "secondary.main",
        textTransform: "uppercase",
        letterSpacing: "0.05em",
        "& .MuiOutlinedInput-notchedOutline": { border: "none" },
        "& .MuiSelect-select": {
          paddingRight: "24px !important",
          paddingTop: 0,
          paddingBottom: 0,
        },
        height: "20px",
      }}
      displayEmpty
    >
      <MenuItem value={EnrollmentStatus.ALL}>Status: All</MenuItem>
      <MenuItem value={EnrollmentStatus.PENDING}>Pending</MenuItem>
      <MenuItem value={EnrollmentStatus.CONFIRMED}>Confirmed</MenuItem>
      <MenuItem value={EnrollmentStatus.CANCELLED}>Cancelled</MenuItem>
    </Select>
  );
};
