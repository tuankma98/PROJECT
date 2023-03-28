import * as React from 'react';
import { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import DefaultLayout from '../layouts/default';
import ListCard from '../components/ListCard';
import ImageSlider from '../components/slideshow/ImageSlider';
import { SliderData } from '../components/slideshow/SliderData';
import UserCards from '../components/userCard/UserCard';
import BlogList from '../components/blog/BlogList';
import Copyright from '../components/CopyRight';
import { Donuts } from '../components/chart/Chart';

import { getTeacher, getCourses, getAllUser, getAllBlog } from '../store';
function Home() {
  const [numberTeachers, setNumberTeachers] = useState(0);
  const [numberStudents, setNumberStudents] = useState(0);
  const [numberCourse, setNumberCourse] = useState(0);
  const [numberBlog, setNumberBlog] = useState(0);

  // GET ALL TEACHER
  const { getAllTeacherAPI } = getTeacher();
  const getTeachersByAdmin = async () => {
    const data = await getAllTeacherAPI();
    if (data) setNumberTeachers(data.length);
  };

  // GET ALL TEACHER
  const { getAllUserAPI } = getAllUser();
  const getAllUserByUser = async () => {
    const data = await getAllUserAPI();
    setNumberStudents(data.length);
  };

  // GET ALL COURSES
  const { fetchDataCoursesAPI } = getCourses();
  const getDataCourse = async () => {
    const data = await fetchDataCoursesAPI();
    setNumberCourse(data.course.length);
  };

  // GET ALL BLOGS
  const { getAllBlogAPI } = getAllBlog();
  const getAllBlogByAll = async () => {
    const data = await getAllBlogAPI();
    if (data) setNumberBlog(data.blog.length);
  };

  useEffect(() => {
    getTeachersByAdmin();
    getAllUserByUser();
    getDataCourse();
    getAllBlogByAll();
  }, []);

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
      <Toolbar />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          {/* Slideshow  */}
          <Grid item xs={12}>
            <ImageSlider slides={SliderData} />
          </Grid>

          {/* Chart */}
          <Grid item xs={12}>
            <Container className="chart">
              <Donuts number={numberTeachers} title="Giáo viên" />
              <Donuts number={numberStudents} title="Sinh viên" />
              <Donuts number={numberCourse} title="Khóa học" />
              <Donuts number={numberBlog} title="Bài viết" />
            </Container>
          </Grid>

          {/* Card  */}
          <Grid item xs={12}>
            <ListCard />
          </Grid>
        </Grid>

        {/* Blog list  */}
        <BlogList />

        {/* User card  */}
        <UserCards />

        {/* <TheFooter /> */}
        <Copyright sx={{ pt: 4 }} />
      </Container>
    </Box>
  );
}

Home.getLayout = function getLayout(page) {
  return <DefaultLayout title={'F8 - học lập trình để đi làm!'}>{page}</DefaultLayout>;
};

export default Home;
