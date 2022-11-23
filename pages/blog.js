import React from 'react';
import DefaultLayout from '../layouts/default'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import BlogList from '../components/blog/BlogList';
import Copyright from '../components/CopyRight';

function Blog() {

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
      <Box className="blog-container" component="main">
        <Toolbar />
        <AppBar className="blog-appbar" position="static" sx={{ mb: 4 }} >
          <Toolbar className="blog-hero">
            <Typography variant="h6" color="primary"  >
              Blog
            </Typography>
          </Toolbar>
        </AppBar>
        
        {/* Blog List  */}
        <BlogList />

      </Box>

      <Copyright sx={{ pt: 4, pb: 4 }} />
    </Box>
  );
}

Blog.getLayout = function getLayout(page) {
  return (
    <DefaultLayout>
      {page}
    </DefaultLayout>
  )
}

export default Blog;