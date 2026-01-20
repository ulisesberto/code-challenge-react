import React from "react";
import {
  Box,
  Card,
  CardContent,
  Chip,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { EnrollmentFilters } from "./EnrollmentFilters";
import { EnrollmentSearchBar } from "./EnrollmentSearchBar";
import { ConfirmEnrollmentButton } from "./ConfirmEnrollmentButton";
import type { Enrollment, EnrollmentStatus } from "../types/enrollment";

interface Props {
  enrollments: Enrollment[];
  statusFilter: EnrollmentStatus;
  setStatusFilter: (status: EnrollmentStatus) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  onConfirm: (id: string) => void;
}

const getStatusColor = (
  status: EnrollmentStatus,
): "success" | "warning" | "error" | "default" => {
  switch (status) {
    case "confirmed":
      return "success";
    case "pending":
      return "warning";
    case "cancelled":
      return "error";
    default:
      return "default";
  }
};

export const EnrollmentTable: React.FC<Props> = ({
  enrollments,
  statusFilter,
  setStatusFilter,
  searchTerm,
  setSearchTerm,
  onConfirm,
}) => {
  return (
    <Card>
      <CardContent>
        <Stack spacing={2}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 2,
              flexWrap: "wrap",
            }}
          >
            <Typography variant="h6">Enrollments List</Typography>
            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              <EnrollmentSearchBar
                value={searchTerm}
                onChange={setSearchTerm}
              />
              <EnrollmentFilters
                currentFilter={statusFilter}
                onFilterChange={setStatusFilter}
              />
            </Box>
          </Box>
          {!enrollments || enrollments.length === 0 ? (
            <Typography>No enrollments found.</Typography>
          ) : (
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="enrollments table">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Workshop</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {enrollments.map((enrollment) => (
                    <TableRow
                      key={enrollment.id}
                      sx={{
                        "&:last-child td, &:last-child th": {
                          border: 0,
                        },
                      }}
                    >
                      <TableCell component="th" scope="row">
                        {enrollment.student_name}
                      </TableCell>
                      <TableCell>{enrollment.email}</TableCell>
                      <TableCell>{enrollment.workshop}</TableCell>
                      <TableCell>
                        <Chip
                          label={enrollment.status}
                          color={getStatusColor(enrollment.status)}
                          size="small"
                        />
                      </TableCell>
                      <TableCell>
                        {enrollment.created_at.toLocaleDateString()}
                      </TableCell>
                      <TableCell>
                        <ConfirmEnrollmentButton
                          status={enrollment.status}
                          onConfirm={() => onConfirm(enrollment.id)}
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </Stack>
      </CardContent>
    </Card>
  );
};
