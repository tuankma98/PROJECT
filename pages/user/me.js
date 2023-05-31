import * as React from 'react';
import DefaultLayout from '../../layouts/default';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState, useEffect } from 'react';
import { Avatar, FormLabel } from '@mui/material';
import { Grid } from '@mui/material';
import { API_ME, API_PATCH_USER, ME } from '../../constants';
import { Button } from '@mui/material';
import Copyright from '../../components/CopyRight';

import { getUser, patchDataUser } from '../../store';
function User() {
  const [dataUser, setDataUser] = useState();

  const { fetchDataUser } = getUser();
  const getDataUser = async () => {
    const data = await fetchDataUser();
    setDataUser(data);
  };

  useEffect(() => {
    const tokens = localStorage.getItem('tokens');
    if (tokens) getDataUser();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataUser({
      ...dataUser,
      [name]: value,
    });
  };

  const { editDataUserAPI } = patchDataUser();
  const editDataByUser = async (dataUser) => {
    const data = await editDataUserAPI(dataUser);
    if (data) window.location.href = ME;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editDataByUser(dataUser);
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
      <Container className="settings-container" sx={{ mt: 9 }}>
        {/* <!-- Top settings --> */}
        <Box className="settings-top" id="settings-main">
          <Grid container className="settings-padding">
            {/* <!-- User --> */}
            <div className="settings-top-info">
              <span className="settings-top-avatar">
                {dataUser && <Avatar src={dataUser.avatar}></Avatar>}
              </span>
              <div className="settings-top-text">
                {dataUser && <span>{dataUser.username}</span>}
              </div>
            </div>
          </Grid>
        </Box>

        {/* <!-- Header --> */}
        <Box className="settings-banner">
          {/* <!-- Image --> */}
          <span className="settings-banner__img"></span>
          {/* <!-- Header container --> */}
          <Grid container className="settings-banner-container settings-padding">
            <Grid lg={7} md={10}>
              <h1>Xin chào {dataUser && dataUser.username}</h1>
              <p>
                Đây là trang hồ sơ của bạn. Bạn có thể xem tiến độ bạn đã đạt được với công việc và
                quản lý các dự án hoặc nhiệm vụ được giao
              </p>
            </Grid>
          </Grid>
        </Box>

        {/* <!-- Page content --> */}
        <Grid container spacing={1} className="settings-padding settings-content">
          <Grid item lg={4}>
            <Box className="settings-card settings-card-profile settings-shadow">
              <Box className="settings-card-profile__img">
                {dataUser && (
                  <Avatar
                    sx={{ width: 120, height: 120 }}
                    className="rounded-circle"
                    src={dataUser.avatar}
                  ></Avatar>
                )}
              </Box>
              <Box className="settings-card-profile-body">
                <Grid className="">
                  <div className="settings-card-profile-stats">
                    <div>
                      <span className="heading">22</span>
                      <span className="description">Friends</span>
                    </div>
                    <div>
                      <span className="heading">10</span>
                      <span className="description">Photos</span>
                    </div>
                    <div>
                      <span className="heading">89</span>
                      <span className="description">Comments</span>
                    </div>
                  </div>
                </Grid>
                <Box className="settings-card-profile-text">
                  <h3>{dataUser && dataUser.username}</h3>
                  {dataUser && <p>{dataUser.address}</p>}
                  <div className="settings-card-profile-text__job">
                    Solution Manager - Creative Tim Officer
                  </div>
                  <div>University of Computer Science</div>
                  <p>{dataUser && dataUser.bio}</p>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item lg={8}>
            <div className="settings-form settings-card settings-shadow">
              <div className="settings-card-header">
                <Grid container className="settings-form-header">
                  <Grid item xs={8}>
                    <h3>Thông tin tài khoản</h3>
                  </Grid>
                </Grid>
              </div>
              <Box className="settings-card-profile-body">
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                  <h6 className="settings-form-heading">Thông tin người dùng</h6>
                  <Grid container spacing={1} className="settings-form-padding">
                    <Grid item xs={12} lg={6}>
                      <div className="">
                        <FormLabel className="form-control-label">Username</FormLabel>
                        {dataUser && (
                          <TextField
                            fullWidth
                            disabled
                            label="Username"
                            defaultValue={dataUser.username}
                            className="settings-form-input settings-form-input-disable"
                          />
                        )}
                      </div>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                      <div className="">
                        <FormLabel className="form-control-label">Email</FormLabel>
                        {dataUser && (
                          <TextField
                            fullWidth
                            disabled
                            label="Email"
                            defaultValue={dataUser.email}
                            className="settings-form-input settings-form-input-disable"
                          />
                        )}
                      </div>
                    </Grid>
                  </Grid>
                  {/* <hr className="my-4"> */}
                  {/* <!-- Address --> */}
                  <h6 className="settings-form-heading">Thông tin liên lạc</h6>
                  <Grid container spacing={1} className="settings-form-padding">
                    <Grid item xs={12} md={12}>
                      <div className="">
                        <FormLabel className="form-control-label">Address</FormLabel>
                        {dataUser && (
                          <TextField
                            fullWidth
                            required
                            label="Address"
                            id="input-address"
                            className="settings-form-input"
                            defaultValue={dataUser.address}
                            value={dataUser.address}
                            name="address"
                            onChange={handleChange}
                          />
                        )}
                      </div>
                    </Grid>
                    <Grid item xs={12} md={12}>
                      <div className="">
                        <FormLabel className="form-control-label">Github</FormLabel>
                        {dataUser && (
                          <TextField
                            fullWidth
                            required
                            label="Github"
                            id="input-github"
                            className="settings-form-input"
                            defaultValue={dataUser.github_Url}
                            value={dataUser.github_Url}
                            name="github_Url"
                            onChange={handleChange}
                          />
                        )}
                      </div>
                    </Grid>
                    <Grid item xs={12} md={12}>
                      <div className="">
                        <FormLabel className="form-control-label">Facebook</FormLabel>
                        {dataUser && (
                          <TextField
                            fullWidth
                            required
                            label="Facebook"
                            id="input-facebook"
                            className="settings-form-input"
                            defaultValue={dataUser.facebook_Url}
                            value={dataUser.facebook_Url}
                            name="facebook_Url"
                            onChange={handleChange}
                          />
                        )}
                      </div>
                    </Grid>
                    <Grid item xs={12} md={12}>
                      <div className="">
                        <FormLabel className="form-control-label">Instagram</FormLabel>
                        {dataUser && (
                          <TextField
                            fullWidth
                            required
                            label="Instagram"
                            id="input-instagram"
                            className="settings-form-input"
                            defaultValue={dataUser.instagram_Url}
                            value={dataUser.instagram_Url}
                            name="instagram_Url"
                            onChange={handleChange}
                          />
                        )}
                      </div>
                    </Grid>
                    <Grid item xs={12} md={12}>
                      <div className="">
                        <FormLabel className="form-control-label">LinkedIn</FormLabel>
                        {dataUser && (
                          <TextField
                            fullWidth
                            required
                            label="LinkedIn"
                            id="input-linkedIn"
                            className="settings-form-input"
                            defaultValue={dataUser.linkedIn_Url}
                            value={dataUser.linkedIn_Url}
                            name="linkedIn_Url"
                            onChange={handleChange}
                          />
                        )}
                      </div>
                    </Grid>
                    <Grid item xs={12} md={12}>
                      <div className="">
                        <FormLabel className="form-control-label">Twitter</FormLabel>
                        {dataUser && (
                          <TextField
                            fullWidth
                            required
                            label="Twitter"
                            id="input-twitter"
                            className="settings-form-input"
                            defaultValue={dataUser.twitter_Url}
                            value={dataUser.twitter_Url}
                            name="twitter_Url"
                            onChange={handleChange}
                          />
                        )}
                      </div>
                    </Grid>
                    <Grid item xs={12} md={12}>
                      <div className="">
                        <FormLabel className="form-control-label">Youtube</FormLabel>
                        {dataUser && (
                          <TextField
                            fullWidth
                            required
                            label="Youtube"
                            id="input-youtube"
                            className="settings-form-input"
                            defaultValue={dataUser.youtube_Url}
                            value={dataUser.youtube_Url}
                            name="youtube_Url"
                            onChange={handleChange}
                          />
                        )}
                      </div>
                    </Grid>
                  </Grid>

                  <h6 className="settings-form-heading mb-4">About me</h6>
                  <Grid container spacing={1} className="settings-form-padding">
                    <Grid item xs={12}>
                      <div className="">
                        <FormLabel className="form-control-label">About Me</FormLabel>
                        {dataUser && (
                          <TextField
                            fullWidth
                            required
                            multiline
                            label="Bio"
                            id="input-bio"
                            className="settings-form-input"
                            defaultValue={dataUser.bio}
                            value={dataUser.bio}
                            name="bio"
                            onChange={handleChange}
                            rows={4}
                          />
                        )}
                      </div>
                    </Grid>
                  </Grid>

                  <Button type="submit" sx={{ mt: 3, mb: 2 }} className="btn btn-primary">
                    Chỉnh sửa
                  </Button>
                </Box>
              </Box>
            </div>
          </Grid>
        </Grid>
      </Container>

      <Copyright sx={{ pt: 4, pb: 4 }} />
    </Box>
  );
}

User.getLayout = function getLayout(page) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default User;
