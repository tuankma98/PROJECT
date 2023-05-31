import React from 'react';
import { Grid, Box } from '@mui/material';
import TrackItem from './TrackItem';

export default function TrackList(props) {
  const { dataTracks, slug } = props;

  const handleClick = () => {
    props.handleShowFormTrack();
  };

  const updateTracks = (slug) => {
    props.updateTracks(slug);
  };

  return (
    <Grid container spacing={1} className="settings-form-padding">
      <Box className="admin-courses-track">
        <h3>Nội dung khóa học</h3>
        {dataTracks?.length} bài học
        <ul>
          {dataTracks &&
            dataTracks.map((track, index) => (
              <li key={index}>
                <TrackItem
                  track={track}
                  index={index}
                  slug={slug}
                  updateTracks={updateTracks}
                  isCourse={false}
                />
              </li>
            ))}
        </ul>
        <Box className="admin-courses-button" onClick={handleClick}>
          <span className="admin-courses-button__plus">+</span>
        </Box>
      </Box>
    </Grid>
  );
}
