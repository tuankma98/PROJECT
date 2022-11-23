import React from "react";

import { Box, Typography } from "@mui/material";
import IconDone from "../icons/iconDone";

export default function Description(props) {
  const { courseItem } = props;

  // Tách chuỗi
  const splitString = (text) => {
    if (text) {
      return text.split(
        /\u000D\u000A|[\u000A\u000B\u000C\u000D\u0085\u2028\u2029]/
      );
    }
    return []
  };

  return (
    <Box className="courses__desc">
      <Typography gutterBottom variant="h5" component="h5">
        Bạn sẽ học được gì?
      </Typography>
      <ul>
        {splitString(courseItem.description).map((item, index) => (
          <li key={index}>
            <IconDone />
            {item}
          </li>
        ))}
      </ul>
    </Box>
  );
}
