import React from "react";
import { Button } from "@mui/material";

interface Props {
  onConfirm: () => void;
  status: string;
}

export const ConfirmEnrollmentButton: React.FC<Props> = ({
  onConfirm,
  status,
}) => {
  if (status !== "pending") return null;

  return (
    <Button variant="contained" size="small" onClick={onConfirm}>
      Confirm
    </Button>
  );
};
