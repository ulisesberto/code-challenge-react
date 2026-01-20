import React, { useState } from "react";
import { TextField, Button, Box, Typography, Paper, Grid } from "@mui/material";

import { EnrollmentStatus } from "../types/enrollment";
import type { Enrollment } from "../types/enrollment";

type Props = {
  onCreate: (enrollment: Enrollment) => void;
};

export const NewEnrollmentForm: React.FC<Props> = ({ onCreate }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [workshop, setWorkshop] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !workshop) return;

    const newEnrollment: Enrollment = {
      id: crypto.randomUUID(),
      student_name: name,
      email,
      workshop,
      status: EnrollmentStatus.PENDING,
      created_at: new Date(),
    };

    onCreate(newEnrollment);
    setName("");
    setEmail("");
    setWorkshop("");
  };

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom color="secondary.main">
        Create New Enrollment
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 4 }}>
            <TextField
              label="Student Name"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              fullWidth
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 4 }}>
            <TextField
              label="Email Address"
              type="email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              fullWidth
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 4 }}>
            <TextField
              label="Workshop Name"
              variant="outlined"
              value={workshop}
              onChange={(e) => setWorkshop(e.target.value)}
              required
              fullWidth
            />
          </Grid>
          <Grid
            size={{ xs: 12 }}
            sx={{ display: "flex", justifyContent: "flex-end", mt: 1 }}
          >
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              sx={{ px: 4 }}
            >
              Create Enrollment
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};
