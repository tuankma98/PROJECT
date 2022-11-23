import * as React from "react";

import AdminLayout from "../../../layouts/admin";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState, useEffect } from "react";
import { FormLabel } from "@mui/material";
import { Grid } from "@mui/material";
import { Button } from "@mui/material";
import Copyright from "../../../components/CopyRight";
import { useRouter } from "next/router";

import { addCourse, addTrack } from "../../../store";
import Track from "../../../components/track/Track";
import TrackList from "../../../components/track/TrackList";
import RioUpload from "../../../components/RioUpload";
import Notification from "../../../components/notification/Notification";

function Courses() {
  const [dataCourse, setDataCourse] = useState();
  const [slugnoti, setSlugnoti] = useState(true);
  const [popup, setPopup] = useState(false);
  const [showFormTrack, setShowFormTrack] = useState(false);

  // UPload
  const handleChangeFeaturedImage = (newImageUrl) => {
    setDataCourse({
      ...dataCourse,
      featured_image: newImageUrl,
    });
  };

  const hanleChangeVideoUrl = (newVideoUrl) => {
    setDataCourse({
      ...dataCourse,
      video_url: newVideoUrl,
    });
  };

  const [dataTracks, setDataTracks] = useState([]);

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    createCourse(dataCourse);
  };

  // Create course
  const { addCourseAPI } = addCourse();
  const createCourse = async () => {
    const data = await addCourseAPI(dataCourse);

    if (data === 200) setPopup(true);
    if (data === 400) setPopup("error");

    if (!data) setSlugnoti(false);

    if (data.course) {
      createTracks(data.course.slug);

      router.push({
        pathname: "/admin/courses/[courseId]",
        query: { courseId: data.course.slug },
      });
    }
  };

  // Create tracks
  const { addTrackAPI } = addTrack();
  const createTracks = (slug) => {
    if (dataTracks) {
      dataTracks.map((item) => {
        return new Promise((resolve) => {
          const trackItem = async () => {
            const data = await addTrackAPI(item, slug);
            resolve(data);
          };
          trackItem();
        });
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataCourse({
      ...dataCourse,
      featured_image:
        "https://res.cloudinary.com/beau-agency/image/upload/v1652781068/13eex.png",
      video_url:
        "https://res.cloudinary.com/beau-agency/video/upload/v1652780737/Screen%20Recording%202022-05-17%20at%2001.12.26.mov.mp4",
      [name]: value,
    });
  };

  const getTracks = (tracks) => {
    setDataTracks([...dataTracks, tracks]);
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
      {popup && (
        <Notification
          title="Thêm khóa học thành công"
          content={`Nhấn đóng để tạo thêm các bài học`}
          handleClose={() => setPopup(false)}
          mail={false}
        />
      )}

      {popup === "error" && (
        <Notification
          title="Thêm khóa học không thành công"
          content={`Vui lòng kiểm tra lại thông tin`}
          handleClose={() => setPopup(false)}
          mail={false}
        />
      )}

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
                    <h3>Tạo khóa học</h3>
                  </Grid>
                </Grid>
              </div>
              <Box className="settings-card-profile-body">
                <Box
                  component="form"
                  noValidate
                  onSubmit={handleSubmit}
                  sx={{ mt: 1 }}
                >
                  <h6 className="settings-form-heading">Course information</h6>
                  <Grid container spacing={1} className="settings-form-padding">
                    <Grid item xs={12} lg={6}>
                      <div className="">
                        <FormLabel className="form-control-label">
                          Title
                        </FormLabel>
                        <TextField
                          fullWidth
                          required
                          label="Title"
                          id="input-title"
                          className="settings-form-input"
                          name="title"
                          onChange={handleChange}
                        />
                      </div>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                      <div className="">
                        <FormLabel className="form-control-label">
                          Slug
                        </FormLabel>
                        <TextField
                          fullWidth
                          label="Slug"
                          id="input-slug"
                          name="slug"
                          className="settings-form-input"
                          required
                          onChange={handleChange}
                          error={!slugnoti}
                          helperText={
                            !slugnoti ? "Course Slug Already Exist" : ""
                          }
                        />
                      </div>
                    </Grid>
                    <Grid item xs={12}>
                      <div className="">
                        <FormLabel className="form-control-label">
                          Description
                        </FormLabel>
                        <TextField
                          fullWidth
                          required
                          multiline
                          label="Description"
                          id="input-description"
                          className="settings-form-input"
                          name="description"
                          onChange={handleChange}
                          rows={4}
                        />
                      </div>
                    </Grid>
                    <Grid item xs={12} md={4} className="form-control-file">
                      <FormLabel className="form-control-label">
                        Feature Image
                      </FormLabel>
                      <RioUpload
                        isVideo={false}
                        setValue={handleChangeFeaturedImage}
                      />
                    </Grid>
                    <Grid item xs={12} md={8} className="form-control-file">
                      <FormLabel className="form-control-label">
                        Video
                      </FormLabel>
                      <RioUpload isVideo setValue={hanleChangeVideoUrl} />
                    </Grid>
                  </Grid>

                  <TrackList
                    handleShowFormTrack={() => setShowFormTrack(true)}
                    dataTracks={dataTracks}
                  />

                  <Button
                    type="submit"
                    sx={{ mt: 3, mb: 2 }}
                    className="btn btn-primary"
                  >
                    Submit
                  </Button>
                </Box>

                <Track
                  show={showFormTrack}
                  handleTurnOffPopup={() => setShowFormTrack(false)}
                  getTracks={getTracks}
                />
              </Box>
            </div>
          </Grid>
        </Grid>
      </Container>

      <Copyright sx={{ pt: 4, pb: 4 }} />
    </Box>
  );
}

Courses.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};

export default Courses;
