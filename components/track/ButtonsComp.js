import React from "react";

import { Box, Button } from "@mui/material";

export default function ButtonsComp(props) {
  const { track, index, slug } = props;

  return (
    <Box className="admin-courses-track-btn">
      <Button
        sx={{ mt: 3, mb: 2, mr: 3 }}
        className="btn btn-info"
        onClick={() => props.handleEditTrack(track, index)}
      >
        Edit track
      </Button>
      <Button
        sx={{ mt: 3, mb: 2 }}
        className="btn btn-primary"
        onClick={() => props.handleDeleteTrack(track, slug)}
      >
        Delete track
      </Button>
    </Box>
  );
}
