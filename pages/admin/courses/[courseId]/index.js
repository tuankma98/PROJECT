import * as React from 'react';
import { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { useRouter } from 'next/router';

import AdminLayout from '../../../../layouts/admin';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { FormLabel } from '@mui/material';
import { Grid } from '@mui/material';
import { Button } from '@mui/material';

import { editCourse, addTrack, getCourseBySlug, deleteCourse } from '../../../../store';

import Copyright from '../../../../components/CopyRight';
import TrackList from '../../../../components/track/TrackList';
import Track from '../../../../components/track/Track';
import { API_ADMIN } from '../../../../constants';
import RioUpload from '../../../../components/RioUpload';
import Notification from '../../../../components/notification/Notification';
import Error from '../../../../components/notification/Error';

function EditCourse() {
  const router = useRouter();

  const [slugnoti, setSlugnoti] = useState(true);
  const [showFormTrack, setShowFormTrack] = useState(false);
  const [popup, setPopup] = useState(false);
  const [found, setFound] = useState(false);

  const [dataCourse, setDataCourse] = useState({});
  const [dataTracks, setDataTracks] = useState([]);

  const [tracksItems, setTracksItems] = useState([]);
  const [isImage, setIsImage] = useState(true);
  const [isVideo, setIsVideo] = useState(true);

  const getTracks = (dataTrack) => {
    setDataTracks([...dataTracks, dataTrack]);
    setTracksItems([...tracksItems, dataTrack]);
  };

  //update Tracks
  const updateTracks = (slug) => {
    getDataCourse(router.query.courseId);
  };

  // Check router
  useEffect(() => {
    if (!router.isReady) return;
    getDataCourse(router.query.courseId);
  }, [router.isReady]);

  // GET Data Course
  const { getCourseBySlugAPI } = getCourseBySlug();
  const getDataCourse = async (courseId) => {
    const data = await getCourseBySlugAPI(courseId);
    setDataCourse(data?.course);
    setDataTracks(data?.course?.tracks);
  };

  // add Track
  const { addTrackAPI } = addTrack();
  const addTrackItem = (slug) => {
    if (tracksItems) {
      tracksItems.map((item) => {
        return new Promise((resolve) => {
          const trackItem = async () => {
            const data = await addTrackAPI(item, slug);

            if (data === 200) setPopup(true);
            if (data === 401) setFound(true);
            resolve(data);
          };
          trackItem();
        });
      });
    }
  };

  // EDIT COURSE
  const { editCourseAPI } = editCourse();
  const editCourseBySlug = async (dataCourse, slug) => {
    const data = editCourseAPI(dataCourse, slug);
  };

  const handleChangeFeaturedImage = (newImageUrl) => {
    if (newImageUrl) setIsImage(false);
    setDataCourse({
      ...dataCourse,
      featured_image: newImageUrl,
    });
  };

  const hanleChangeVideoUrl = (newVideoUrl) => {
    if (newVideoUrl) setIsVideo(false);
    setDataCourse({
      ...dataCourse,
      video_url: newVideoUrl,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editCourse) editCourseBySlug(dataCourse, router.query.courseId);
    addTrackItem(router.query.courseId);
  };

  // DELETE Course
  const { deleteCourseAPI } = deleteCourse();
  const deleteCourseBySlug = async (courseId) => {
    const data = await deleteCourseAPI(courseId);
    if (data) window.location.href = `${API_ADMIN}/courses`;
  };

  const handleDelete = (e) => {
    deleteCourseBySlug(router.query.courseId);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataCourse({
      ...dataCourse,
      [name]: value,
    });
  };

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
      <Container className="settings-container admin-courses" sx={{ mt: 20 }}>
        {/* <!-- Page content --> */}
        <Grid container spacing={1} className="settings-padding settings-content">
          {popup && (
            <Notification
              title="Thêm bài học thành công"
              content={`Bạn đã thêm bài học thành công. Nhấn đóng để tiếp tục.`}
              handleClose={() => setPopup(false)}
              mail={false}
            />
          )}

          {found && (
            <Error
              title="Lỗi"
              content={`Đăng bài học không thành công. Vui lòng kiểm tra lại !`}
              handleClose={() => setFound(false)}
            />
          )}

          <Grid item lg={12}>
            <div className="settings-form settings-card settings-shadow">
              <div className="settings-card-header">
                <Grid container className="settings-form-header">
                  <Grid item xs={12} className="edit-course-heading">
                    <h3>Sửa khóa học</h3>
                    <Button
                      type="submit"
                      sx={{ mt: 3, mb: 2 }}
                      className="btn btn-primary"
                      onClick={handleDelete}
                    >
                      Xóa khóa học
                    </Button>
                  </Grid>
                </Grid>
              </div>
              <Box className="settings-card-profile-body">
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                  <h6 className="settings-form-heading">Course information</h6>
                  <Grid container spacing={1} className="settings-form-padding">
                    <Grid item xs={12} lg={6}>
                      <div className="">
                        <FormLabel className="form-control-label">Title</FormLabel>
                        {dataCourse?.title && (
                          <TextField
                            fullWidth
                            required
                            label="Title"
                            id="input-title"
                            className="settings-form-input"
                            name="title"
                            onChange={handleChange}
                            defaultValue={dataCourse?.title}
                            value={dataCourse?.title}
                          />
                        )}
                      </div>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                      <div className="">
                        <FormLabel className="form-control-label">Slug</FormLabel>
                        {dataCourse?.slug && (
                          <TextField
                            fullWidth
                            label="Slug"
                            id="input-slug"
                            name="slug"
                            className="settings-form-input"
                            required
                            onChange={handleChange}
                            error={!slugnoti}
                            helperText={!slugnoti ? 'Course Slug Already Exist' : ''}
                            defaultValue={dataCourse?.slug}
                            value={dataCourse?.slug}
                          />
                        )}
                      </div>
                    </Grid>
                    <Grid item xs={12}>
                      <div className="">
                        <FormLabel className="form-control-label">Description</FormLabel>
                        {dataCourse && (
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
                            defaultValue={dataCourse?.description}
                            value={dataCourse?.description}
                          />
                        )}
                      </div>
                    </Grid>
                    <Grid item xs={12} md={4} className="form-control-file">
                      <div className="">
                        <FormLabel className="form-control-label">Feature image</FormLabel>
                        <RioUpload
                          // title="Feature Image"
                          isVideo={false}
                          setValue={handleChangeFeaturedImage}
                        />
                        {isImage && (
                          <Box
                            component="img"
                            sx={{
                              maxWidth: { xs: 350, md: 250 },
                            }}
                            src={dataCourse?.featured_image}
                          />
                        )}
                      </div>
                    </Grid>
                    <Grid item xs={12} md={8} className="form-control-file">
                      <div className="">
                        <FormLabel className="form-control-label">Video_url</FormLabel>
                        <RioUpload
                          // title="Video"
                          isVideo
                          setValue={hanleChangeVideoUrl}
                        />
                        {isVideo && <ReactPlayer url={dataCourse?.video_url} controls />}
                      </div>
                    </Grid>
                  </Grid>

                  <TrackList
                    handleShowFormTrack={() => setShowFormTrack(true)}
                    dataTracks={dataTracks}
                    slug={router?.query?.courseId}
                    updateTracks={updateTracks}
                  />

                  <Button type="submit" sx={{ mt: 3, mb: 2 }} className="btn btn-primary">
                    Submit
                  </Button>
                </Box>

                {showFormTrack && (
                  <Track
                    show={showFormTrack}
                    handleTurnOffPopup={() => setShowFormTrack(false)}
                    getTracks={getTracks}
                  />
                )}
              </Box>
            </div>
          </Grid>
        </Grid>
      </Container>

      <Copyright sx={{ pt: 4, pb: 4 }} />
    </Box>
  );
}

EditCourse.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};

export default EditCourse;
