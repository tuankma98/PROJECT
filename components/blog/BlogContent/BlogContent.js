import React from "react";

import { Typography, CardMedia, Box } from "@mui/material";

export default function BlogContent(props) {
  const { dataBlog } = props;

  return (
    <React.Fragment>
      <Box className="blog-view">
        <Box className="blog-view__title">
          <Typography
            component="h1"
            variant="h3"
            className="notification-found__content"
          >
            {dataBlog.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {dataBlog.description}
          </Typography>
        </Box>
        <Box className="blog-view__author">
          <Box className="blog-view__avata">
            {dataBlog.created_by && (
              <CardMedia
                component="img"
                height="80"
                width="80"
                image={dataBlog.created_by.avatar}
              />
            )}
          </Box>
          {dataBlog.created_by && (
            <Box component="div">
              <Typography className="blog-view__name">
                {dataBlog.created_by.username}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {dataBlog.created_by.createdAt}
              </Typography>
            </Box>
          )}
        </Box>
      </Box>

      <Box
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: dataBlog.content }}
      ></Box>
    </React.Fragment>
  );
}
