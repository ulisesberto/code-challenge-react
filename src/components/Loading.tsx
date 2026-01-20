import React from "react";
import { Box, CircularProgress } from "@mui/material";
import { Layout } from "./Layout";

export const Loading: React.FC = () => {
  return (
    <Layout>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <CircularProgress />
      </Box>
    </Layout>
  );
};
