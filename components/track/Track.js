import * as React from 'react';
import ReactPlayer from 'react-player';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState, useEffect } from 'react';
import { FormLabel } from '@mui/material';
import { Grid } from '@mui/material';
import { Button } from '@mui/material';

import RioUpload from '../RioUpload';

function Track(props) {
  const { show, title, track } = props;
  const [dataCourse, setDataCourse] = useState('');
  const [isVideo, setIsVideo] = useState(true);

  useEffect(() => {
    if (track) setDataCourse(track);
  }, []);

  useEffect(() => {}, [dataCourse]);

  const hanleChangeVideoUrl = (newVideoUrl) => {
    if (newVideoUrl) setIsVideo(false);
    setDataCourse({
      ...dataCourse,
      video_url: newVideoUrl,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataCourse({
      ...dataCourse,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    console.log(dataCourse);
    e.preventDefault();
    props.getTracks(dataCourse);
    props.handleTurnOffPopup();
  };

  return (
    <Box className={`popup-container ${show ? 'active' : ''}`}>
      <div className="popup-content">
        <div className="popup-close" onClick={() => props.handleTurnOffPopup()}>
          &times;
        </div>
        <Container className="popup-content-main" sx={{ mt: 20 }}>
          {/* <!-- Page content --> */}
          <Grid container spacing={1} className="settings-padding settings-content">
            <Grid item lg={12}>
              <div className="settings-form settings-card settings-shadow">
                <div className="settings-card-header">
                  <Grid container className="settings-form-header">
                    <Grid item xs={8}>
                      <h3>{title ? title : 'Thêm bài học'}</h3>
                    </Grid>
                  </Grid>
                </div>
                <Box className="settings-card-profile-body">
                  <Box component="form" noValidate sx={{ mt: 1 }}>
                    <h6 className="settings-form-heading">Thông tin bài học</h6>
                    <Grid container spacing={1} className="settings-form-padding">
                      <Grid item xs={12} lg={4}>
                        <div className="">
                          <FormLabel className="form-control-label">Title</FormLabel>
                          <TextField
                            fullWidth
                            required
                            label="Title"
                            id="input-title"
                            className="settings-form-input"
                            name="title"
                            onChange={handleChange}
                            defaultValue={dataCourse ? dataCourse.title : ''}
                            value={dataCourse ? dataCourse.title : ''}
                          />
                        </div>
                      </Grid>
                      <Grid item xs={12} lg={4}>
                        <div className="">
                          <FormLabel className="form-control-label">Position</FormLabel>
                          <TextField
                            fullWidth
                            label="Position"
                            id="input-position"
                            name="position"
                            className="settings-form-input"
                            required
                            onChange={handleChange}
                          />
                        </div>
                      </Grid>
                      <Grid item xs={12} lg={4}>
                        <div className="">
                          <FormLabel className="form-control-label">Duration</FormLabel>
                          <TextField
                            fullWidth
                            required
                            label="Duration"
                            id="input-duration"
                            className="settings-form-input"
                            name="duration"
                            onChange={handleChange}
                          />
                        </div>
                      </Grid>
                      <Grid item xs={12} lg={12}>
                        <div className="form-control-custom">
                          <FormLabel className="form-control-label">Video_url</FormLabel>
                          <RioUpload isVideo setValue={hanleChangeVideoUrl} />
                          {title && <ReactPlayer url={dataCourse.video_url} controls />}
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

export default Track;
