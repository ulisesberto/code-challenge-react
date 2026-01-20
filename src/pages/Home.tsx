import { Alert, Grid, Stack, Typography } from "@mui/material";
import { NewEnrollmentForm } from "../components/NewEnrollmentForm";
import { EnrollmentTable } from "../components/EnrollmentTable";
import { Layout } from "../components/Layout";
import { useEnrollments } from "../hooks/useEnrollments";

export const Home = () => {
  const {
    loading,
    error,
    filteredEnrollments,
    settings,
    setSettings,
    addEnrollment,
    confirmEnrollment,
    refreshEnrollments,
  } = useEnrollments();

  // Loading is now handled within components (skeletons)

  if (error)
    return (
      <Layout>
        <Alert severity="error">{error.message}</Alert>
      </Layout>
    );

  return (
    <Layout>
      <Stack spacing={3}>
        <Typography
          variant="h4"
          component="h1"
          sx={{ color: "secondary.main", mb: 4 }}
        >
          Enrollments Overview
        </Typography>

        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 12 }}>
            <EnrollmentTable
              enrollments={filteredEnrollments}
              loading={loading}
              settings={settings}
              setSettings={setSettings}
              onConfirm={confirmEnrollment}
              onRefresh={refreshEnrollments}
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <NewEnrollmentForm onCreate={addEnrollment} />
          </Grid>
        </Grid>
      </Stack>
    </Layout>
  );
};
