import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { createTeacher } from "../../store";

import { Box, Button, Container, Grid } from "@mui/material";
import { FormLabel, TextField } from "@mui/material";

import AdminLayout from "../../layouts/admin";

import Notification from "../../components/notification/Notification";

export default function CreateTeacher() {
  const [dataTeacher, setDataTeacher] = useState({});
  const [popup, setPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataTeacher({
      ...dataTeacher,
      [name]: value,
    });
  };

  // CREATE TEACHER
  const { createTeacherAPI } = createTeacher();
  const createTeacherByAdmin = async (dataTeacher) => {
    const data = await createTeacherAPI(dataTeacher);
    if (data) setPopup(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const pattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*+]{6,16}$/;

    const raw = JSON.stringify({
      email: data.get("email"),
      username: data.get("userName"),
      password: data.get("password"),
    });

    const password = JSON.parse(raw).password;

    const res = password.match(pattern);
    if (res) {
      createTeacherByAdmin(dataTeacher);
      console.log("Valid password!");
    } else {
      console.log("Not a valid password.");
    }
  };

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
          {popup && (
            <Notification
              title="Thêm thành công"
              content={`Nhấn đóng để tiếp tục sử dụng hệ thống`}
              handleClose={() => setPopup(false)}
              mail={false}
            />
          )}
          <Grid item lg={12}>
            <div className="settings-form settings-card settings-shadow">
              <div className="settings-card-header">
                <Grid container className="settings-form-header">
                  <Grid item xs={8}>
                    <h3>Thêm giáo viên</h3>
                  </Grid>
                </Grid>
              </div>

              {/* Content  */}
              <Box className="settings-card-profile-body">
                <Box
                  component="form"
                  noValidate
                  onSubmit={handleSubmit}
                  sx={{ mt: 1 }}
                >
                  <h6 className="settings-form-heading">Teacher information</h6>
                  <Grid container spacing={1} className="settings-form-padding">
                    <Grid item xs={12} lg={6}>
                      <div className="">
                        <FormLabel className="form-control-label">
                          Username
                        </FormLabel>
                        <TextField
                          fullWidth
                          required
                          label="Username"
                          id="input-username"
                          className="settings-form-input"
                          name="username"
                          onChange={handleChange}
                        />
                      </div>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                      <div className="">
                        <FormLabel className="form-control-label">
                          Email
                        </FormLabel>
                        <TextField
                          fullWidth
                          label="Email"
                          id="input-email"
                          name="email"
                          className="settings-form-input"
                          required
                          onChange={handleChange}
                        />
                      </div>
                    </Grid>
                    <Grid item xs={12}>
                      <div className="">
                        <FormLabel className="form-control-label">
                          Password
                        </FormLabel>
                        <TextField
                          required
                          fullWidth
                          name="password"
                          label="Password"
                          type="password"
                          onChange={handleChange}
                        />
                      </div>
                    </Grid>
                  </Grid>

                  <Button
                    type="submit"
                    sx={{ mt: 3, mb: 2 }}
                    className="btn btn-primary"
                  >
                    Submit
                  </Button>
                </Box>
              </Box>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

CreateTeacher.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};
