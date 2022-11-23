import * as React from 'react';

import AdminLayout from '../../layouts/admin';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import ImageSlider from '../../components/slideshow/ImageSlider';
import { SliderData } from '../../components/slideshow/SliderData';
import UserCards from '../../components/userCard/UserCard';
import BlogList from '../../components/blog/BlogList';
import Copyright from '../../components/CopyRight';
import AdminListCard from '../../components/admin/AdminListCard';
import BlogListAdmin from '../../components/blog/admin/BlogListAdmin';

function Admin() {
  return (
    <Box
      component="main"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[900],
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
      }}
    >
      <Toolbar />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          {/* Slideshow  */}
          <Grid item xs={12}>
            <ImageSlider slides={SliderData} />
          </Grid>
          {/* Chart */}
          {/* <Grid item xs={12} md={8} lg={9}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 240,
              }}
            >
              Thống kê
            </Paper>
          </Grid> */}
          {/* Recent Deposits */}
          {/* <Grid item xs={12} md={4} lg={3}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 240,
              }}
            >
              Biểu đồ
            </Paper>
          </Grid> */}
          {/* Recent Orders */}
          <Grid item xs={12}>
            <AdminListCard />
          </Grid>
        </Grid>

        {/* <BlogList /> */}
        <BlogListAdmin />

        <UserCards />

        {/* <TheFooter /> */}
        <Copyright sx={{ pt: 4 }} />
      </Container>
    </Box>
  )
}

Admin.getLayout = function getLayout(page) {
  return (
    <AdminLayout>
      {page}
    </AdminLayout>
  )
}

export default Admin;
