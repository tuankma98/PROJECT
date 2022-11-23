import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { getAllUser } from "../../store";

import { Box, Button, Container, Grid } from "@mui/material";

import AdminLayout from "../../layouts/admin";
import ListTeacher from "../../components/admin/teacher/ListTeacher";
import FormAddTeacher from "../../components/admin/teacher/FormAddTeacher";

export default function Students() {
  const [teachers, setTeachers] = useState([]);
  const [showFormTrack, setShowFormTrack] = useState(false);
  const [updateStudents, setUpdateStudents] = useState(false);

  // GET ALL TEACHER
  const { getAllUserAPI } = getAllUser();
  const getAllUserByAdmin = async () => {
    const data = await getAllUserAPI();
    setTeachers(data);
  };

  const updateTeacher = () => {
    setUpdateStudents(!updateStudents);
  };

  useEffect(() => {
    getAllUserByAdmin();
  }, [updateStudents]);

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
                    <h3>Tất cả sinh viên</h3>
                  </Grid>
                </Grid>
              </div>

              {/* Content  */}
              <Box className="settings-card-profile-body">
                <Box className="admin-courses-track">
                  <ListTeacher
                    teachers={teachers}
                    handleShowFormTrack={() => setShowFormTrack(true)}
                    updateTeacher={updateTeacher}
                    text="sinhvien"
                  />

                  <FormAddTeacher
                    show={showFormTrack}
                    handleTurnOffPopup={() => setShowFormTrack(false)}
                    updateTeacher={updateTeacher}
                  />

                  {/* {teachers.length === 0 && (
                    <div className="admin-mycourse">
                      <h1>Bạn chưa thêm khóa học nào</h1>

                      <Button
                        type="submit"
                        sx={{ mt: 3, mb: 2 }}
                        className="btn btn-info"
                      >
                        Thêm khóa học
                      </Button>
                    </div>
                  )} */}
                </Box>
              </Box>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

Students.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};
