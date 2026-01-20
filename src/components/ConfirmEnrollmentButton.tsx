import React from "react";
import { Button } from "@mui/material";
import { EnrollmentStatus } from "../types/enrollment";

interface Props {
  onConfirm: () => void;
  status: EnrollmentStatus;
}

export const ConfirmEnrollmentButton: React.FC<Props> = ({
  onConfirm,
  status,
}) => {
  if (status !== EnrollmentStatus.PENDING) return null;

  return (
    <Button variant="contained" size="small" onClick={onConfirm}>
      Confirm
    </Button>
  );
};
