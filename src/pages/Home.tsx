import { Alert, Grid, Stack, Typography } from "@mui/material";
import { NewEnrollmentForm } from "../components/NewEnrollmentForm";
import { EnrollmentTable } from "../components/EnrollmentTable";
import { Layout } from "../components/Layout";
import { Loading } from "../components/Loading";
import { useEnrollments } from "../hooks/useEnrollments";

export const Home = () => {
  const {
    loading,
    error,
    enrollments,
    filteredEnrollments,
    settings,
    setSettings,
    addEnrollment,
    confirmEnrollment,
  } = useEnrollments();

  if (loading) return <Loading />;

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
            <EnrollmentTable
              enrollments={filteredEnrollments}
              settings={settings}
              setSettings={setSettings}
              onConfirm={confirmEnrollment}
            />
          </Grid>
          <Grid size={{ xs: 12, md: enrollments.length === 0 ? 12 : 4 }}>
            <NewEnrollmentForm onCreate={addEnrollment} />
          </Grid>
        </Grid>
      </Stack>
    </Layout>
  );
};
