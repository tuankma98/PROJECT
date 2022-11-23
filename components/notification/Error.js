import React from "react";
import { useState } from "react";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import ErrorIcon from "@mui/icons-material/Error";
import { Button } from "@mui/material";

export default function Error(props) {
  // const { show } = props;
  const [showPopup, setShowPopup] = useState(true);

  return (
    <Box
      className={`notification-container error-container ${
        showPopup ? "active" : ""
      }`}
    >
      <div className="notification-content">
        <h3>
          <ErrorIcon />
          {props.title}
        </h3>
        <Container className="notification-content-main" sx={{ mt: 20 }}>
          {props.content}
        </Container>
        <Button
          className="btn btn-info notification-close"
          onClick={() => props.handleClose()}
        >
          Đóng
        </Button>
      </div>
    </Box>
  );
}
