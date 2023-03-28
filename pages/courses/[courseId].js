import * as React from 'react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Grid, Typography, CardMedia } from '@mui/material';

import { getCourseBySlug } from '../../store';
import DefaultLayout from '../../layouts/default';
import Copyright from '../../components/CopyRight';
import ShowVideo from '../../components/courses/ShowVideo';
import Description from '../../components/courses/Description';
import TrackItem from '../../components/courses/TrackItem';

function CourseId() {
  const router = useRouter();

  const [courseItem, setCourseItem] = useState({});
  const [popupVideo, setPopupVideo] = useState(false);

  // get Data Course
  const { getCourseBySlugAPI } = getCourseBySlug();
  const getDataCourseItem = async (slug) => {
    const data = await getCourseBySlugAPI(slug);
    if (data) setCourseItem(data.course);
  };

  useEffect(() => {
    if (!router.isReady) return;
    getDataCourseItem(router.query.courseId);
  }, [router.isReady]);

  const handleClick = () => setPopupVideo(!popupVideo);

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
        <Grid container className="courses-container">
          <Grid item xs={8}>
            <Box className="courses__heading">
              <h1>{courseItem.title}</h1>
              <Typography variant="body2" color="text.secondary">
                {/* {courseItem.description} */}
              </Typography>
            </Box>

            {/* Description  */}
            <Description courseItem={courseItem} />

            {/* Track List  */}
            <TrackItem courseItem={courseItem} />
          </Grid>

          <Grid item xs={4} sx={{ height: '100%' }}>
            <Box className="course-content" onClick={handleClick}>
              <CardMedia
                component="img"
                height="250"
                width="100%"
                image={courseItem.featured_image}
              />
              <span className="courses__icon">
                <svg role="presentation" viewBox="0 0 24 24">
                  <path
                    d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0zm-2 15.5V9l4.5 3.25L10 15.5z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
            </Box>

            <div className="course-modal">
              <ShowVideo
                dataVideo={courseItem}
                popupVideo={popupVideo}
                showPopup={() => setPopupVideo(!popupVideo)}
              />
            </div>

            <Box className="courses__info">
              <p>Trình độ cơ bản</p>
              {courseItem.tracks && <p>Tổng số {courseItem.tracks.length} bài học</p>}
              <p>Thời lượng 0 phút 39 giây</p>
              <p>Học mọi lúc, mọi nơi</p>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Copyright sx={{ pt: 4, pb: 4 }} />
    </Box>
  );
}

CourseId.getLayout = function getLayout(page) {
  return <DefaultLayout title={'Chi tiết khóa học'}>{page}</DefaultLayout>;
};

export default CourseId;
