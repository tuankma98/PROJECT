import React from 'react';

import DefaultLayout from '../../layouts/default';
import BlogList from '../../components/blog/BlogList';
import Copyright from '../../components/CopyRight';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ListCard from '../../components/ListCard';

function Courses() {
  return (
    <Box
      component="main"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
      }}
    >
      <Box className="blog-container" component="main">
        <Toolbar />
        <AppBar className="blog-appbar" position="static" sx={{ mb: 4 }}>
          <Toolbar className="blog-hero">
            <Typography variant="h6" color="primary">
              Courses
            </Typography>
          </Toolbar>
        </AppBar>

        <ListCard />
      </Box>

      <Copyright sx={{ pt: 4, pb: 4 }} />
    </Box>
  );
}

Courses.getLayout = function getLayout(page) {
  return <DefaultLayout title="Các khóa học">{page}</DefaultLayout>;
};

export default Courses;
