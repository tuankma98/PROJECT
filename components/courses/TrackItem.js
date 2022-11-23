import React from "react";
import { Container } from "@mui/material";
import CourseItem from "../../pages/courseItem";

export default function TrackItem(props) {
  const { courseItem } = props;

  return (
    <Container className="courses-tracks">
      {courseItem.tracks &&
        courseItem.tracks.map((item, index) => (
          <CourseItem
            item={item}
            index={index}
            key={index}
            course={courseItem.title}
          />
        ))}
    </Container>
  );
}
