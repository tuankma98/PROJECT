import * as React from "react";

import { useState, useEffect } from "react";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Grid, Button, FormLabel } from "@mui/material";

import { createTeacher } from "../../../store";
import Notification from "../../notification/Notification";

function FormAddTeacher(props) {
  const { show, title, teacher } = props;
  const [dataTeacher, setDataTeacher] = useState({});
  const [popup, setPopup] = useState(false);

  useEffect(() => {
    if (teacher) setDataTeacher(teacher);
  }, []);

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
    if (data) setPopup(true)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleTurnOffPopup();
    props.updateTeacher();

    title ? props.editTeacher(dataTeacher) : createTeacherByAdmin(dataTeacher);
  };

  return (
    <Box className={`popup-container ${show ? "active" : ""}`}>
      <div className="popup-content">
        <div className="popup-close" onClick={() => props.handleTurnOffPopup()}>
          &times;
        </div>
        <Container className="popup-content-main" sx={{ mt: 20 }}>
          {/* <!-- Page content --> */}
          <Grid
            container
            spacing={1}
            className="settings-padding settings-content"
          >
            {/* {popup && (
              <Notification
                title="Thêm thành công"
                content={`Nhấn đóng để tiếp tục sử dụng hệ thống`}
                handleClose={() => setPopup(false)}
                mail={false}
              />
            )} */}

            <Grid item lg={12}>
              <div className="settings-form settings-card settings-shadow">
                <div className="settings-card-header">
                  <Grid container className="settings-form-header">
                    <Grid item xs={8}>
                      <h3>{title ? title : "Thêm giáo viên"}</h3>
                    </Grid>
                  </Grid>
                </div>
                <Box className="settings-card-profile-body">
                  <Box component="form" noValidate sx={{ mt: 1 }}>
                    <h6 className="settings-form-heading">
                      Thông tin giáo viên
                    </h6>
                    <Grid
                      container
                      spacing={1}
                      className="settings-form-padding"
                    >
                      <Grid item xs={12} lg={12}>
                        <div className="">
                          <FormLabel className="form-control-label">
                            Email
                          </FormLabel>
                          <TextField
                            fullWidth
                            label="Email"
                            name="email"
                            className="settings-form-input"
                            required
                            onChange={handleChange}
                            defaultValue={dataTeacher.email}
                            value={dataTeacher.email}
                          />
                        </div>
                      </Grid>

                      <Grid item xs={12} lg={6}>
                        <div className="">
                          <FormLabel className="form-control-label">
                            Username
                          </FormLabel>
                          <TextField
                            fullWidth
                            required
                            label="Username"
                            className="settings-form-input"
                            name="username"
                            onChange={handleChange}
                            defaultValue={dataTeacher.username}
                            value={dataTeacher.username}
                          />
                        </div>
                      </Grid>

                      <Grid item xs={12} lg={6}>
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
                      onClick={handleSubmit}
                    >
                      Submit
                    </Button>
                  </Box>
                </Box>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </Box>
  );
}

export default FormAddTeacher;
