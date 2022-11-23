import * as React from "react";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import AdminLayout from "../../../layouts/admin";
import Copyright from "../../../components/CopyRight";
import BlogMainAdmin from "../../../components/blog/admin/BlogMainAdmin";
import { Grid } from "@mui/material";

function BlogId() {
  return (
    <Box
      component="main"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[100]
            : theme.palette.grey[900],
        flexGrow: 1,
        height: "100vh",
        overflow: "auto",
      }}
    >
      <Container sx={{ mt: 12 }}>
        <BlogMainAdmin />
      </Container>

      <Copyright sx={{ pt: 4, pb: 4 }} />
    </Box>
  );
}

BlogId.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};

export default BlogId;
