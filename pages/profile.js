import React from 'react';
import DefaultLayout from '../layouts/default';
import Box from '@mui/material/Box';
import { Avatar } from '@mui/material';
import { Grid } from '@mui/material';
import { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import Copyright from '../components/CopyRight';
import { getUser } from '../store';

function Profile() {
  const [dataUser, setDataUser] = useState({});
  const { fetchDataUser } = getUser();

  const getDataUser = async () => {
    const data = await fetchDataUser();
    setDataUser(data);
  };

  useEffect(() => {
    const tokens = localStorage.getItem('tokens');
    if (tokens) getDataUser();
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
      <Container className="settings-container profile-container" sx={{ mt: 9 }}>
        {/* <!-- Top settings --> */}
        <Box className="settings-top" id="settings-main">
          <Grid container className="settings-padding">
            {/* <!-- User --> */}
            <div className="settings-top-info">
              <span className="settings-top-avatar">
                {dataUser && <Avatar src={dataUser.avatar}></Avatar>}
              </span>
              {/* { dataUser.bio } */}
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
          <Grid item lg={12}>
            <Box className="settings-card settings-card-profile settings-shadow">
              <Box className="settings-card-profile__img">
                {dataUser && <Avatar className="rounded-circle" src={dataUser.avatar}></Avatar>}
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

                <Box className="profile-text">
                  <h1>Thông tin cá nhân</h1>

                  <ul className="profile-text__info">
                    <li>
                      <h3>Username</h3>
                      <p>{dataUser.username}</p>
                      <span>
                        Tên của bạn xuất hiện trên trang cá nhân và bên cạnh các bình luận của bạn.
                      </span>
                    </li>
                    {dataUser.bio && (
                      <li>
                        <h3>Bio</h3>
                        <p>{dataUser.bio}</p>
                        <span>
                          Bio hiển thị trên trang cá nhân và trong các bài viết (blog) của bạn.
                        </span>
                      </li>
                    )}
                    <li>
                      <h3>email</h3>
                      <p>{dataUser.email}</p>
                    </li>
                  </ul>

                  <h1>Mạng xã hội</h1>

                  <ul className="profile-text__social">
                    <li>
                      <h3>Github: </h3>
                      {dataUser.github_Url ? (
                        <a href={dataUser.github_Url}>{dataUser.github_Url}</a>
                      ) : (
                        <span>Bạn chưa thêm</span>
                      )}
                    </li>
                    <li>
                      <h3>Facebook: </h3>
                      {dataUser.facebook_Url ? (
                        <a href={dataUser.facebook_Url}>{dataUser.facebook_Url}</a>
                      ) : (
                        <span>Bạn chưa thêm</span>
                      )}
                    </li>
                    <li>
                      <h3>Instagram: </h3>
                      {dataUser.instagram_Url ? (
                        <a href={dataUser.instagram_Url}>{dataUser.instagram_Url}</a>
                      ) : (
                        <span>Bạn chưa thêm</span>
                      )}
                    </li>
                    <li>
                      <h3>Linkedin: </h3>
                      {dataUser.linkedIn ? (
                        <a href={dataUser.linkedIn}>{dataUser.linkedIn}</a>
                      ) : (
                        <span>Bạn chưa thêm</span>
                      )}
                    </li>
                    <li>
                      <h3>Twitter: </h3>
                      {dataUser.twitter_Url ? (
                        <a href={dataUser.twitter_Url}>{dataUser.twitter_Url}</a>
                      ) : (
                        <span>Bạn chưa thêm</span>
                      )}
                    </li>
                    <li>
                      <h3>Youtube:</h3>
                      {dataUser.youtube_Url ? (
                        <a href={dataUser.youtube_Url}>{dataUser.youtube_Url}</a>
                      ) : (
                        <span>Bạn chưa thêm</span>
                      )}
                    </li>
                  </ul>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Copyright sx={{ pt: 4, pb: 4 }} />
    </Box>
  );
}

Profile.getLayout = function getLayout(page) {
  return <DefaultLayout title={'Thông tin cá nhân!'}>{page}</DefaultLayout>;
};

export default Profile;
