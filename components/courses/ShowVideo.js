import React from "react";
import { useRouter } from "next/router";

import ReactPlayer from "react-player";

import { Button } from "@mui/material";

export default function ShowVideo(props) {
  const { dataVideo, popupVideo, slug, course } = props;
  const router = useRouter();

  const handleClose = () => props.showPopup();

  const handleClick = (e) => {
    e.preventDefault();

    router.push({
      pathname: "/courses/track/[trackId]",
      query: { courseId: slug, trackId: dataVideo._id },
    });
  };

  return (
    <div>
      <div
        className={`course-overlay ${popupVideo ? "is-active" : ""}`}
        onClick={handleClose}
      ></div>
      <div className={`course-video ${popupVideo ? "show" : ""}`}>
        <div className="course-video__item">
          <Button onClick={handleClick}>Xem thêm</Button>
          <h3>{course}</h3>
          <h2>{dataVideo.title}</h2>
          <div className="course-video-main">
            <ReactPlayer url={dataVideo.video_url} controls />
          </div>
        </div>
      </div>
    </div>
  );
}
