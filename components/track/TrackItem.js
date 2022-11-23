import React from "react";
import { useState, useEffect } from "react";
import ReactPlayer from "react-player";

import { Box } from "@mui/material";

import { editTrack, deleteTrack, deleteCourse } from "../../store";

import Track from "./Track";
import TitleComp from "./TitleComp";
import ButtonsComp from "./ButtonsComp";

export default function TrackItem(props) {
  const { slug, track, index, isCourse } = props;

  const [showFormTrack, setShowFormTrack] = useState(false);
  const [toggle, setToggle] = useState(0);
  const [activeVideo, setActiveVideo] = useState(false);
  const [showVideo, setShowVideo] = useState(null);

  const getTracks = (dataTrack) => {
    editDataTrack(dataTrack, slug, dataTrack._id);
  };

  // EDIT TRACK
  const { editTrackAPI } = editTrack();
  const editDataTrack = async (dataTrack, slug, trackId) => {
    const data = await editTrackAPI(dataTrack, slug, trackId);
    if (data) props.updateTracks(slug);
  };

  const handleEditTrack = (track, index) => {
    setShowFormTrack(true);
    setToggle(index);
  };

  // DELETE TRACK
  const { deleteTrackAPI } = deleteTrack();
  const deleteDataTrack = async (slug, trackId) => {
    const data = await deleteTrackAPI(slug, trackId);
    if (data) props.updateTracks(slug);
  };

  // DELETE COURSE
  const { deleteCourseAPI } = deleteCourse();
  const deleteDataCourse = async (slug) => {
    const data = await deleteCourseAPI(slug);
    if (data) props.updateTracks(slug);
  };

  /** HandleDelete */
  const handleDeleteTrack = (track, slug) => {
    isCourse ? deleteDataCourse(slug) : deleteDataTrack(slug, track._id);
  };

  // Show video track
  const showPopupVideo = (track, index) => {
    setShowVideo(index);
    setActiveVideo(true);
  };

  const handleClose = () => {
    setShowVideo(null);
    setActiveVideo(false);
  };

  return (
    <React.Fragment>
      <Box
        className="admin-courses-track-title"
        onClick={() => showPopupVideo(track, index)}
      >
        <TitleComp track={track} />
      </Box>

      {showVideo === index && (
        <div className="course-modal">
          <div
            className={`course-overlay ${activeVideo ? "is-active" : ""}`}
            onClick={handleClose}
          ></div>
          <div className={`course-video ${activeVideo ? "show" : ""}`}>
            <div className="course-video__item">
              <h3>Giới thiệu khóa học</h3>
              <h2>{track.title}</h2>
              <div className="course-video-main">
                <ReactPlayer url={track.video_url} controls />
              </div>
            </div>
          </div>
        </div>
      )}

      <ButtonsComp
        handleEditTrack={handleEditTrack}
        handleDeleteTrack={handleDeleteTrack}
        track={track}
        index={index}
        slug={slug}
      />

      <Track
        track={track}
        title="Sửa bài học"
        show={toggle === index ? showFormTrack : false}
        handleTurnOffPopup={() => setShowFormTrack(false)}
        getTracks={getTracks}
      />
    </React.Fragment>
  );
}
