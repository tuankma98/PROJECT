import React from "react";
import { useState, useEffect } from "react";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Grid } from "@mui/material";

export default function TrackPost(props) {
  const [numberLikes, setNumberLikes] = useState(10);
  const [like, setLike] = useState(false);

  const addLike = () => {
    setLike(!like);
    if (!like) setNumberLikes((prev) => prev + 1);
    if (like) setNumberLikes((prev) => prev - 1);
  };

  return (
    <div className="post">
      <div className="postBody">
        <div className="postContent">
          <div className="postDesc">
            <span className="desc">
              {like ? (
                <FavoriteIcon onClick={addLike} />
              ) : (
                <FavoriteBorderIcon onClick={addLike} />
              )}
              <span>{numberLikes} </span>
              Likes
            </span>
          </div>
        </div>
      </div>
      {props.children}
    </div>
  );
}
