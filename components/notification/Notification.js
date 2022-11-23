import React from "react";
import { useState } from "react";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import { Button } from "@mui/material";

export default function Notification(props) {
  // const { show } = props;
  const [showPopup, setShowPopup] = useState(true);

  return (
    <Box className={`notification-container ${showPopup ? "active" : ""}`}>
      <div className="notification-content">
        {/* <div className="notification-close" onClick={() => setShowPopup(false)}>
          &times;
        </div> */}
        <h3>
          {props.mail && <MarkEmailReadIcon />}
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
