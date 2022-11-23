import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { Box, Button, Container, Grid } from "@mui/material";
import AdminLayout from "../../layouts/admin";

import { getCourses, getAdmin } from "../../store";
import TrackItem from "../../components/track/TrackItem";

export default function MyCourse() {
  const [courses, setCourses] = useState([]);
  const router = useRouter();

  const { getAdminAPI } = getAdmin();
  const getUserNameAdmin = async () => {
    const data = await getAdminAPI();
    getMyCourse(data.username);
  };

  // Get course
  const { fetchDataCoursesAPI } = getCourses();
  const getMyCourse = async (userName) => {
    const data = await fetchDataCoursesAPI();
    const allCourse = data.course;
    const myCourses = allCourse.filter((x) => x.created_by === userName);

    if (myCourses) setCourses(myCourses)
  };

  useEffect(() => {
    getUserNameAdmin();
  }, []);

  //update Tracks
  const updateTracks = (slug) => {
    getUserNameAdmin();
  };

  // Add course
  const handleAddCourse = () => {
    router.push({
      pathname: "/admin/courses/"
    });
  }

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
      <Container className="settings-container admin-courses" sx={{ mt: 20 }}>
        {/* <!-- Page content --> */}
        <Grid
          container
          spacing={1}
          className="settings-padding settings-content"
        >
          <Grid item lg={12}>
            <div className="settings-form settings-card settings-shadow">
              <div className="settings-card-header">
                <Grid container className="settings-form-header">
                  <Grid item xs={8}>
                    <h3>Khóa học của tôi</h3>
                  </Grid>
                </Grid>
              </div>

              {/* Content  */}
              <Box className="settings-card-profile-body">
                <Box className="admin-courses-track">
                  <ul>
                    {courses &&
                      courses.map((course, index) => (
                        <li key={index}>
                          <TrackItem
                            track={course}
                            index={index}
                            slug={course.slug}
                            isCourse
                            updateTracks={updateTracks}
                          />
                        </li>
                      ))}
                  </ul>

                  {courses.length === 0 && (
                    <div className="admin-mycourse">
                      <h1>Bạn chưa thêm khóa học nào</h1>

                      <Button
                        type="submit"
                        sx={{ mt: 3, mb: 2 }}
                        className="btn btn-info"
                        onClick={handleAddCourse}
                      >
                        Thêm khóa học
                      </Button>
                    </div>
                  )}
                </Box>
              </Box>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

MyCourse.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};
