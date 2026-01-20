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
  TableSortLabel,
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
  sortField: keyof Enrollment;
  setSortField: (field: keyof Enrollment) => void;
  sortOrder: "asc" | "desc";
  setSortOrder: (order: "asc" | "desc") => void;
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

const HEADER_HEIGHT = 56;
const ROW_HEIGHT = 52;
const VISIBLE_ROWS = 8;
const TABLE_HEIGHT = HEADER_HEIGHT + ROW_HEIGHT * VISIBLE_ROWS;

export const EnrollmentTable: React.FC<Props> = ({
  enrollments,
  statusFilter,
  setStatusFilter,
  searchTerm,
  setSearchTerm,
  sortField,
  setSortField,
  sortOrder,
  setSortOrder,
  onConfirm,
}) => {
  const handleSort = (field: keyof Enrollment) => {
    const isAsc = sortField === field && sortOrder === "asc";
    setSortOrder(isAsc ? "desc" : ("asc" as const));
    setSortField(field);
  };

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
          <Box
            component={Paper}
            sx={{
              height: TABLE_HEIGHT,
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
            }}
          >
            <TableContainer sx={{ flex: 1, overflow: "auto" }}>
              <Table
                sx={{
                  minWidth: 650,
                  borderCollapse: "separate",
                  borderSpacing: 0,
                  "& .MuiTableCell-root": {
                    borderLeft: "1px solid rgba(224, 224, 224, 1)",
                    borderBottom: "1px solid rgba(224, 224, 224, 1)",
                  },
                  "& .MuiTableCell-root:last-child": {
                    borderRight: "1px solid rgba(224, 224, 224, 1)",
                  },
                  "& .MuiTableHead-root .MuiTableCell-root": {
                    borderTop: "1px solid rgba(224, 224, 224, 1)",
                    backgroundColor: "#f5f5f5",
                    fontWeight: "bold",
                  },
                }}
                aria-label="enrollments table"
                stickyHeader
              >
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ width: "20%" }}>
                      <TableSortLabel
                        active={sortField === "student_name"}
                        direction={
                          sortField === "student_name" ? sortOrder : "asc"
                        }
                        onClick={() => handleSort("student_name")}
                      >
                        Name
                      </TableSortLabel>
                    </TableCell>
                    <TableCell sx={{ width: "25%" }}>
                      <TableSortLabel
                        active={sortField === "email"}
                        direction={sortField === "email" ? sortOrder : "asc"}
                        onClick={() => handleSort("email")}
                      >
                        Email
                      </TableSortLabel>
                    </TableCell>
                    <TableCell sx={{ width: "20%" }}>Workshop</TableCell>
                    <TableCell sx={{ width: "15%" }}>Status</TableCell>
                    <TableCell sx={{ width: "10%" }}>
                      <TableSortLabel
                        active={sortField === "created_at"}
                        direction={
                          sortField === "created_at" ? sortOrder : "asc"
                        }
                        onClick={() => handleSort("created_at")}
                      >
                        Date
                      </TableSortLabel>
                    </TableCell>
                    <TableCell sx={{ width: "10%" }}>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {enrollments.map((enrollment) => (
                    <TableRow
                      key={enrollment.id}
                      hover
                      sx={{
                        height: 52,
                        "&:hover": {
                          backgroundColor: "rgba(0, 0, 0, 0.04) !important",
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
              {(!enrollments || enrollments.length === 0) && (
                <Box
                  sx={{
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: 500,
                  }}
                >
                  <Typography color="textSecondary" variant="h6">
                    No enrollments found.
                  </Typography>
                </Box>
              )}
            </TableContainer>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
};
