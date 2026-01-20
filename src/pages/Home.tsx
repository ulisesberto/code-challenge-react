import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  CircularProgress,
  Grid,
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
import { EnrollmentFilters } from "../components/EnrollmentFilters";
import { NewEnrollmentForm } from "../components/NewEnrollmentForm";
import { Layout } from "../components/Layout";
import { useEnrollments } from "../hooks/useEnrollments";
import type { Enrollment, EnrollmentStatus } from "../types/enrollment";

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

export const Home = () => {
  const {
    loading,
    error,
    enrollments,
    filteredEnrollments,
    statusFilter,
    setStatusFilter,
    addEnrollment,
    confirmEnrollment,
  } = useEnrollments();

  if (loading)
    return (
      <Layout>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <CircularProgress />
        </Box>
      </Layout>
    );

  if (error)
    return (
      <Layout>
        <Alert severity="error">{error.message}</Alert>
      </Layout>
    );

  return (
    <Layout>
      <Stack spacing={3}>
        <Typography variant="h4" component="h1" gutterBottom>
          Enrollments Overview
        </Typography>

        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 12 }}>
            <Card>
              <CardContent>
                <Stack spacing={2}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="h6">Enrollments List</Typography>
                    <EnrollmentFilters
                      currentFilter={statusFilter}
                      onFilterChange={setStatusFilter}
                    />
                  </Box>
                  {!filteredEnrollments || filteredEnrollments.length === 0 ? (
                    <Typography>No enrollments found.</Typography>
                  ) : (
                    <TableContainer component={Paper}>
                      <Table
                        sx={{ minWidth: 650 }}
                        aria-label="enrollments table"
                      >
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
                          {filteredEnrollments.map((enrollment: Enrollment) => (
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
                                {enrollment.status === "pending" && (
                                  <Button
                                    variant="contained"
                                    size="small"
                                    onClick={() =>
                                      confirmEnrollment(enrollment.id)
                                    }
                                  >
                                    Confirm
                                  </Button>
                                )}
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
          </Grid>
          <Grid size={{ xs: 12, md: enrollments.length === 0 ? 12 : 4 }}>
            <NewEnrollmentForm onCreate={addEnrollment} />
          </Grid>
        </Grid>
      </Stack>
    </Layout>
  );
};
