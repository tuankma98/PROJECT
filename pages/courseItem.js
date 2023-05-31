import React from 'react';

import { useState } from 'react';
import { useRouter } from 'next/router';

import { Grid } from '@mui/material';
import { Button } from '@mui/material';

import ShowVideo from '../components/courses/ShowVideo';

function CourseItem(props) {
  const { item, index, text, course } = props;
  console.log(item);
  const [popupVideo, setPopupVideo] = useState(false);
  const router = useRouter();

  const handleEdit = (id) => {
    router.push({
      pathname: '/admin/courses/[courseId]/track/[trackId]',
      query: { courseId: `${router.query.courseId}`, trackId: id },
    });
  };

  return (
    <>
      <Grid
        className="course-modal"
        style={{
          cursor: 'pointer',
        }}
        sx={{
          '&:hover': {
            color: 'red',
          },
        }}
      >
        <Grid container className="course-modal-btn" onClick={() => setPopupVideo(!popupVideo)}>
          <Grid item xs={8}>
            <h3>
              {index + 1}. {item.title}
            </h3>
          </Grid>
          <Grid item xs={4} className="course-modal-btn-edit">
            <p>{item?.duration}</p>
            {text && (
              <Button
                type="submit"
                sx={{ mt: 3, mb: 2 }}
                className="btn btn-primary"
                onClick={() => handleEdit(item._id)}
              >
                {text}
              </Button>
            )}
          </Grid>
        </Grid>
      </Grid>

      <ShowVideo
        dataVideo={item}
        slug={router.query.courseId}
        popupVideo={popupVideo}
        showPopup={() => setPopupVideo(!popupVideo)}
        course={course}
      />
    </>
  );
}

export default CourseItem;
